const course_structure = {
  "B.Tech": {
    code: "A",
    branches: {
      CIV: { code: "01", sections: 4 },
      EEE: { code: "02", sections: 4 },
      MECH: { code: "03", sections: 4 },
      ECE: { code: "04", sections: 4 },
      CSE: { code: "05", sections: 4 },
      IT: { code: "12", sections: 4 },
      CSM: { code: "66", sections: 4 },
      CSD: { code: "67", sections: 4 },
      CSC: { code: "62", sections: 4 },
      CSB: { code: "32", sections: 4 },
    },
  },
};

export const checkStudentRollNumber = (roll) => {
  /* 2 - year - Allow last 8 years students.
   * 2 - College code - Anything
   * 1 - Type of Course - '1' or '5'
   * 1 - Course Code - A,D,E,F,R,S,T
   * 2 - Branch Code -
   * 2 - Serial Number
   */
  roll = roll.toUpperCase().trim();
if(roll.length!=10)
return false;
if(roll.substring(2,4)!=='P6')
return false;
if(isNaN(roll[9]))
return false;
  let year = roll.substring(0, 2).trim();
  let allowedYears = [];
  let currentYear = new Date().getFullYear();
  for (let i = 0; i < 8; i++)
    allowedYears.push(String(currentYear - i).slice(-2));
  //Invalid Year
  if (!allowedYears.includes(year)) {
    return false;
  }

  let courseType = roll.substring(4, 5);

  //Invalid Course Type
  if (!["1", "5"].includes(courseType)) {
    return false;
  }

  let courseCode = roll.substring(5, 6);
  let branchCode = roll.substring(6, 8);

  let branchOK = false;
  let courseOK = false;

  //Find if branch code is right.
  //First find the branches.

  for (const course in course_structure) {
    if (course_structure[course].code == courseCode) {
      courseOK = true;
      let branches = course_structure[course].branches;
      for (const branch in branches) {
        if (course_structure[course].branches[branch].code == branchCode) {
          branchOK = true;
          break;
        }
      }
      break;
    }
  }

  return branchOK && courseOK;
};
