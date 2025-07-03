require("dotenv").config();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

function getAllStaff() {
  return prisma.staff.findMany({});
}

/** Section A: Basic Queries */
function getHodInfo() {
  return prisma.department.findMany({
    select: {
      deptName: true,
      hodApptDate: true,
    },
  });
}

function getDeptStaffingInfo() {
  return prisma.department.findMany({
    select: {
      deptCode: true,
      noOfStaff: true,
    },
    orderBy: {
      noOfStaff: "desc",
    },
  });
}

function getCitizenshipWithoutDuplicates() {
  return prisma.staff.findMany({
    select: {
      citizenship: true,
    },
    distinct: ["citizenship"],
		orderBy: [
			{ citizenship: 'desc' }
		]
  });
}

/** Section B: Filtering Queries */

function getStaffofSpecificCitizenships() {
  return prisma.staff.findMany({
    select: {
      citizenship: true,
      staffName: true,
    },
    where: {
      citizenship: { in: ["Hong Kong", "Korea", "Malaysia", "Thailand"] },
    },
		orderBy: [
			{ citizenship: 'asc' }
		]
  });
}

function getStaffWithBachelorDegreeOrDeputyDesignation() {
  return prisma.staff.findMany({
    select: {
      highestQln: true,
      staffName: true,
      designation: true,
    },
    where: {
      OR: [
        {
          highestQln: {
            in: ["BA", "BBA", "BComp", "BDM", "BSc", "BSE", "MPA"],
          },
        },
        {
          designation: {
            contains: "Deputy",
          },
        },
      ],
    },
  });
}

async function getStaffByCriteria1() {
  const results = await prisma.staff.findMany({
    select: {
      gender: true,
      pay: true,
      maritalStatus: true,
      staffName: true,
    },
    where: {
      maritalStatus: "M", // Married
      OR: [
        {
          gender: "F",
          pay: {
            gte: 4000,
            lte: 7000,
          },
        },
        {
          gender: "M",
          pay: {
            gte: 2000,
            lte: 6000,
          },
        },
      ],
    },
    orderBy: [{ gender: "asc" }, { pay: "asc" }],
  });
	return results.map(r => ({
    ...r,
    pay: r.pay && parseFloat(r.pay),
  }));

}

/** Section C: Relation Queries */

async function getDepartmentCourses() {
  return prisma.department.findMany({
    select: {
      deptName: true,
      course: {
        select: {
          crseName: true,
          crseFee: true,
          labFee: true,
        },
      },
    },
    orderBy: [{ deptName: "asc" }],
  });
}

const getStaffAndDependents = () => {
  return prisma.staff.findMany({
    where: {
      staffDependent: {
        some: {},
      },
    },
    select: {
      staffName: true,
      staffNo: true,
      staffDependent: {
        select: {
          dependentName: true,
          relationship: true,
        },
      },
    },
    orderBy: [{ staffName: "asc" }],
  });
};

const getDepartmentCourseStudentDob = () => {
  return prisma.department.findMany({
    where: {
      course: {
        // at least 1 course
        some: {
          student: {
            // course has at least 1 student
            some: {},
          },
        },
      },
    },
    select: {
      deptName: true,
      course: {
        // join coruse table
        select: {
          crseName: true,
          student: {
            // join student to course
            select: {
              studName: true,
              dob: true,
            },
            orderBy: {
              dob: "asc", // Desc order of age
            },
          },
        },
        orderBy: {
          crseName: "asc",
        },
      },
    },
    orderBy: {
      deptName: "asc",
    },
  });
};

async function main(argument) {
  let results;
  switch (argument) {
    case "getAllStaff":
      results = await getAllStaff();
      break;
    case "getCitizenshipWithoutDuplicates":
      results = await getCitizenshipWithoutDuplicates();
      break;
    case "getHodInfo":
      results = await getHodInfo();
      break;
    case "getDeptStaffingInfo":
      results = await getDeptStaffingInfo();
      break;
    case "getStaffofSpecificCitizenships":
      results = await getStaffofSpecificCitizenships();
      break;
    case "getStaffWithBachelorDegreeOrDeputyDesignation":
      results = await getStaffWithBachelorDegreeOrDeputyDesignation();
      break;
    case "getStaffByCriteria1":
      results = await getStaffByCriteria1();
      break;
    case "getDepartmentCourses":
      results = await getDepartmentCourses();
      break;
    case "getStaffAndDependents":
      results = await getStaffAndDependents();
      break;
    case "getDepartmentCourseStudentDob":
      results = await getDepartmentCourseStudentDob();
      break;
    default:
      console.log("Invalid argument");
      break;
  }
  results && console.dir(results, { depth: 1 });
}

main(process.argv[2]);
