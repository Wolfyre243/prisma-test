const { query } = require('../services/db');
const { SQL_ERROR_CODE, UNIQUE_VIOLATION_ERROR, RAISE_EXCEPTION, EMPTY_RESULT_ERROR, INVALID_INPUT } = require('../errors');

module.exports.retrieveAll = async () => {
    const sql = `SELECT * FROM users;`
    return query(sql).then((result) => {
        const { rows } = result;
        return rows;
    });
}

module.exports.retrieveAllPaginated = async (
    page, pageSize, _sort, _order, _search, _roleFilter, _levelFilter
) => {
    
    const sortColumns = [
        'user_id', 'username', 'email', 'user_role', 'level', 'points',
        'first_name', 'last_name', 'school', 'sec_level',
        'created_at', 'last_login',
    ];
    console.log(sortColumns.includes(_sort))
    const sql = `
    SELECT * FROM retrieve_all_users_paginated($1, $2, $3, $4, $5)
    ORDER BY 
        ${sortColumns.includes(_sort) ? _sort : 'user_id'} 
        ${_order === 'asc' ? 'ASC' : 'DESC'};
    `;
    return query(
        sql, 
        [page, pageSize, _search, _roleFilter, _levelFilter]
    ).then((result) => {
        const { rows } = result;
        return rows;
    });
}

module.exports.retrieveUserCount = async () => {
    const sql = `SELECT COUNT(*) as count FROM users;`
    return query(sql).then((result) => {
        const { rows } = result;
        return rows[0].count;
    });
}

module.exports.retrieveByUsernameOrEmail = async (username, email) => {
    const sql = `SELECT * FROM users WHERE username = $1 OR email = $2;`
    return query(sql, [username, email]).then((result) => {
        const { rows } = result;
        return rows;
    });
}

module.exports.retrieveByUsername = async (username) => {
    const sql = `
    SELECT 
		u.user_id, u.username, u.email, u.password as password,
		p.first_name, p.last_name, p.school, p.sec_level,
        r.role_name as "user_role",
		u.created_at
	FROM users u
	JOIN userprofile p ON u.user_id = p.user_id
	JOIN userrole ur ON u.user_id = ur.user_id
	JOIN role r ON ur.role_id = r.role_id
	WHERE u.username = $1;
    `
    return query(sql, [username]).then((result) => {
        const { rows } = result;
        if (rows.length === 0) {
            throw new EMPTY_RESULT_ERROR(404, "User not found with the provided username.");
        }
        return rows[0];
    });
}

module.exports.retrieveByUserId = async (user_id) => {
    const sql = `SELECT * FROM retrieve_user_by_id($1);`
    return query(sql, [user_id]).then((result) => {
        const { rows } = result;
        if (rows.length === 0) {
            throw new EMPTY_RESULT_ERROR(404, "User not found.");
        }
        return rows[0];
    });
}

module.exports.retrieveCompletedToursByUserId = async (user_id) => {
    const sql = `
    SELECT * FROM retrieve_completed_tours_by_id($1);
    `;
    return query(sql, [user_id]).then((result) => {
        const { rows } = result;
        return rows;
    });
}

module.exports.retrieveOngoingToursByUserId = async (user_id) => {
    const sql = `
    SELECT 
		utc.tourcompletion_id, t.tour_id, t.tour_name, t.description, 
        utc.created_at as started_at
	FROM tour t
	JOIN usertourcompletion utc ON utc.tour_id = t.tour_id
	WHERE utc.user_id = $1 AND utc.completed = false
    ORDER BY started_at DESC;
    `;
    return query(sql, [user_id]).then((result) => {
        const { rows } = result;
        if (rows.length === 0) {
            throw new EMPTY_RESULT_ERROR(404, "No tours ongoing");
        }
        return rows;
    });
}

module.exports.retrieveCompletedQuizzesByUserId = async (user_id) => {
    const sql = `
    SELECT * FROM retrieve_completed_quizzes_by_id($1);
    `;
    return query(sql, [user_id]).then((result) => {
        const { rows } = result;
        return rows;
    });
}

module.exports.retrieveSessionsByUserId = async (user_id) => {
    const sql = `
    SELECT session_id, is_active, login_at, logout_at
    FROM sessions
    WHERE user_id = $1
    ORDER BY is_active DESC, login_at DESC, logout_at DESC;
    `;
    return query(sql, [user_id]).then((result) => {
        const { rows } = result;
        return rows;
    });
}

module.exports.insertSingle = async (username, email, password, fname, lname, school, sec_level) => {
    const sql = `
        CALL register_user($1, $2, $3, $4, $5, $6, $7, o_user_id := NULL, o_user_role := NULL);
    `
    return query(sql, [username, email, password, fname, lname, school, sec_level])
        .then((result) => {
            const { rows } = result;

            // If there is an error message, throw it
            if (rows.length == 1 && result.rows[0].errMsg) {
                throw new RAISE_EXCEPTION(500, result.rows[0].errMsg);
            }
            console.log("User inserted successfully"); // #DEBUG
            return rows[0];
        })
        .catch((error) => {
            if (error.code === SQL_ERROR_CODE.UNIQUE_VIOLATION) {
                throw new UNIQUE_VIOLATION_ERROR(409, `Username or email already exists.`);
            }
            if (error.code === SQL_ERROR_CODE.RAISE_EXCEPTION) {
                // Thrown from a stored procedure, etc
                throw new RAISE_EXCEPTION(500, error.message);
            }

            throw error;
        })
}

module.exports.updateByUserId = async (
    user_id,
    { username, fname, lname, school, sec_level, user_role_id }
) => {
    const sql = `CALL update_user($1, $2, $3, $4, $5, $6, $7);`;

    return query(sql, [user_id, username, fname, lname, school, sec_level, user_role_id])
        .then((result) => {
            console.log("User updated successfully"); // #DEBUG
            return;
        })
        .catch((error) => {
            if (error.code === SQL_ERROR_CODE.UNIQUE_VIOLATION) {
                throw new UNIQUE_VIOLATION_ERROR(409, `Username already exists.`);
            }
            if (error.code === SQL_ERROR_CODE.RAISE_EXCEPTION) {
                // Thrown from stored procedure
                throw new RAISE_EXCEPTION(...error.message.split('|'));
            }
            if (error.code === SQL_ERROR_CODE.INVALID_INPUT) {
                // Thrown from stored procedure
                throw new INVALID_INPUT(400, 'Invalid input value(s) provided');
            }

            throw error;
        })
}

module.exports.updateRoleByUserId = async (user_id, user_role_id) => {
    const sql = `
    UPDATE userrole
    SET role_id = $2
    WHERE user_id = $1;
    `;

    return query(sql, [user_id, user_role_id])
        .then((result) => {
            const { rowCount } = result;
            if (!rowCount) {
                throw new EMPTY_RESULT_ERROR(404, "User not found.");
            }
            console.log("User role updated successfully"); // #DEBUG
            return;
        })
        .catch((error) => {
            if (error.code === SQL_ERROR_CODE.RAISE_EXCEPTION) {
                // Thrown from stored procedure
                throw new RAISE_EXCEPTION(500, error.message);
            }
            throw error;
        })
}

module.exports.incrementPointsByUserId = async (addPoints, addLevels, user_id) => {
    const sql = `
    UPDATE userprofile
    SET 
        points = GREATEST(points + $1, 0),
        level = GREATEST(level + $2, 0)
    WHERE user_id = $3;
    `;

    return query(sql, [parseInt(addPoints), parseInt(addLevels), user_id])
        .then((result) => {
            const { rowCount } = result;
            if (!rowCount) {
                throw new EMPTY_RESULT_ERROR(404, "User not found.");
            }
            console.log("User role updated successfully"); // #DEBUG
            return;
        })
        .catch((error) => {
            if (error.code === SQL_ERROR_CODE.RAISE_EXCEPTION) {
                // Thrown from stored procedure
                throw new RAISE_EXCEPTION(500, error.message);
            }
            throw error;
        })
}

module.exports.verifyUser = async (user_id, email) => {
    const sql = `
    UPDATE users
    SET is_verified = true
    WHERE user_id = $1 AND email = $2;
    `;

    return query(sql, [user_id, email])
        .then((result) => {
            const { rowCount } = result;
            if (!rowCount) {
                throw new EMPTY_RESULT_ERROR(404, "User not found.");
            }
            console.log("User verified successfully"); // #DEBUG
            return;
        })
        .catch((error) => {
            if (error.code === SQL_ERROR_CODE.RAISE_EXCEPTION) {
                // Thrown from stored procedure
                throw new RAISE_EXCEPTION(500, error.message);
            }

            throw error;
        })
}

module.exports.updateUserPassword = async (user_id, password) => {
    const sql = `
    UPDATE users
    SET password = $2
    WHERE user_id = $1;
    `;

    return query(sql, [user_id, password])
        .then((result) => {
            const { rowCount } = result;
            if (!rowCount) {
                throw new EMPTY_RESULT_ERROR(404, "User not found.");
            }
            return;
        })
        .catch((error) => {
            if (error.code === SQL_ERROR_CODE.RAISE_EXCEPTION) {
                // Thrown from stored procedure
                throw new RAISE_EXCEPTION(500, error.message);
            }
            throw error;
        })
}

module.exports.deleteByUserId = async (user_id) => {
    const sql = `
    DELETE FROM users
	WHERE user_id = $1;
    `;

    return query(sql, [user_id])
        .then((result) => {
            const { rowCount } = result;
            if (!rowCount) {
                throw new EMPTY_RESULT_ERROR(404, "User not found.");
            }
            console.log("User deleted successfully"); // #DEBUG
            return;
        })
        .catch((error) => {
            if (error.code === SQL_ERROR_CODE.RAISE_EXCEPTION) {
                // Thrown from a stored procedure, etc
                throw new RAISE_EXCEPTION(500, error.message);
            }

            throw error;
        })
}