const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

function getMeanCourseFee() {
  return prisma.course.aggregate({
    _avg: {
      crseFee: true,
    },
  });
}

/** Section A */

function getNumberOfFullTimeStaff() {
  return prisma.staff.aggregate({
    //TODO: Implement the query
    _count: {
      staffNo: true,
    },
    where: {
      typeOfEmployment: "FT",
    },
  });
}

function getHighestAndLowestPayInSOC() {
  return prisma.staff.aggregate({
    //TODO: Implement the query
    where: {
      deptCode: "SOC",
    },
    _max: {
      pay: true,
    },
    _min: {
      pay: true,
    },
  });
}

/** Section B */

function getTotalAllowanceOfStaffByGrade() {
  return prisma.staff.groupBy({
    //TODO: Implement the query
    by: ['grade'],
    where: {
        grade: {
            not: {
                startsWith: 'S'
            }
        },
        allowance: {
            not: null
        }
    },
    _sum: {
        allowance: true
    },
    orderBy: {
        grade: 'desc'
    }
    
  });
}

function getMeanPayTotalPayAndNoOfStaffByDesignation() {
  return prisma.staff.groupBy({
    //TODO: Implement the query
    by: ['designation'],
    where: {
        typeOfEmployment: 'FT'
    },
    _avg: {
        pay: true
    },
    _sum: {
        pay: true
    },
    _count: {
        staffNo: true
    },
    having: {
        staffNo: {
            _count: {
                gt: 2
            }
        },
    },
    orderBy: {
        _count: {
            staffNo: 'asc'
        }
    }
  });
}

function getTotalPayAndNoOfStaffByDeptWithHighTotal() {
  return prisma.staff.groupBy({
    //TODO: Implement the query
  });
}

/** Using Raw Query */

function getAvgLabFeeWithRawQuery() {
  return prisma.$queryRaw`SELECT AVG(COALESCE(lab_fee, 0)) AS "Mean Lab Fee" FROM course;`;
}

async function main(argument) {
  let results;
  switch (argument) {
    case "getMeanCourseFee":
      results = await getMeanCourseFee();
      break;
    case "getNumberOfFullTimeStaff":
      results = await getNumberOfFullTimeStaff();
      break;
    case "getHighestAndLowestPayInSOC":
      results = await getHighestAndLowestPayInSOC();
      break;
    case "getTotalAllowanceOfStaffByGrade":
      results = await getTotalAllowanceOfStaffByGrade();
      break;
    case "getMeanPayTotalPayAndNoOfStaffByDesignation":
      results = await getMeanPayTotalPayAndNoOfStaffByDesignation();
      break;
    case "getTotalPayAndNoOfStaffByDeptWithHighTotal":
      results = await getTotalPayAndNoOfStaffByDeptWithHighTotal();
      break;
    case "getAvgLabFeeWithRawQuery":
      results = await getAvgLabFeeWithRawQuery();
      break;
    default:
      console.log("Invalid argument");
  }
  results && console.log(results);
}

main(process.argv[2]);
