var selSub = document.getElementById("select-sub");
var inputDegree = document.getElementById("input-degree");
var inputHours = document.getElementById("input-hours");
var addSub = document.getElementById("show-result");
var totalGpa = document.getElementById("show-total");
var getId = document.getElementById("idStu");
var addHours = 0;
var gpa = [];
var omar;
var gaber;
var hoda;
var addSelSub = [];
var students = [
  {
    id: "1",
    subjects: [],
    gpa: 0,
    hour: 0,
  },
  {
    id: "2",
    subjects: [],
    gpa: 0,
    hour: 0,
  },
  {
    id: "3",
    subjects: [],
    gpa: 0,
    hour: 0,
  },
];

function calc() {
  calcGpaSub();
}

var total = 0;
// var addHours = 0;
var gpa = [];
function calcGpaSub() {
  if (checkId()) {
    var degree = "";
    degree = inputDegree.value;
    if (degree != "") {
      var hour = parseInt(
        selSub.options[selSub.selectedIndex].getAttribute("data-hour")
      );
      // console.log(typeof(hour))
      var res = (degree / 20 - 1) * hour;
      // console.log(res)
      console.log(hour);
      addHours += hour;
      console.log(addHours);
      gpa.push(res);
      // console.log(gpa)
      var sumGpas = gpa.reduce((a, b) => a + b);
      // console.log(sumGpas)
      // console.log(total)
      total = sumGpas / addHours;
      addStudentObj(selSub.value, hour, total);

      console.log(students);
      display(selSub.value, hour, res);
      displayTotal(total);
      clear();
    }
  } else {
    console.log("kngeu9vhvy6904hjmq2,");
  }
}
function clear() {
  selSub.value = "";
  inputDegree.value = "";
  inputHours.value = "";
}

selSub.addEventListener("change", function () {
  // console.log(this.options[this.selectedIndex].getAttribute("data-hour"))
});
function checkId() {
  for (let i = 0; i < students.length; i++) {
    // console.log('id')
    // console.log(getId.value)
    // console.log('studentID')

    // console.log(students[i].id)

    if (getId.value == students[i].id) {
      return true;
    }
  }
}

function display(sub, hour, gpaSub) {
  addSub.innerHTML += `<div><span>${sub}</span>
    <span>${hour}</span>
    <span>${gpaSub}</span></div>
    `;
}
function displayTotal(total) {
  totalGpa.innerHTML = `<div>${total}</div>`;
}

function addStudentObj(studentSub, hour, gpa) {
  for (let i = 0; i < students.length; i++) {
    if (getId.value == students[i].id) {
      students[i].subjects.push(studentSub);
      students[i].hour += hour;
      students[i].gpa = gpa;
    }
  }
}

// zolfa section

// static subjects
let subjectsObjs = [
  // semester 1
  { code: "PHM012", name: "Mathematics-1", hours: 3, semester: 1 },
  { code: "PHM021", name: "Vibration and Waves", hours: 3, semester: 1 },
  { code: "PHM031", name: "Statics", hours: 2, semester: 1 },
  { code: "MDP011", name: "Engineering Drawing", hours: 1, semester: 1 },
  { code: "PHM041", name: "Engineering Chemistry", hours: 2, semester: 1 },
  { code: "CSE031", name: "Computing in Engineering", hours: 2, semester: 1 },
  // semester 2

  { code: "PHM013", name: "Mathematics-2", hours: 3, semester: 2 },
  { code: "PHM022", name: "Electricity and Magnetism", hours: 3, semester: 2 },
  { code: "PHM032", name: "Dynamics", hours: 2, semester: 2 },
  {
    code: "CEP011",
    name: "Projection and Engineering Graphics",
    hours: 1,
    semester: 2,
  },
  { code: "MDP081", name: "Production Engineering", hours: 2, semester: 2 },
  {
    code: "ENG011",
    name: "Fundamentals of Engineering",
    hours: 2,
    semester: 2,
  },
  //semester 3

  { code: "CSE111", name: "Logic Design", hours: 3, semester: 3 },
  { code: "CSE131", name: "Computer Programming", hours: 3, semester: 3 },
  {
    code: "PHM113",
    name: "Differential and Partial Differential Equations",
    hours: 3,
    semester: 3,
  },
  {
    code: "EPM118",
    name: "Electrical and Electronic Circuits",
    hours: 2,
    semester: 3,
  },
  {
    code: "EPM211",
    name: "Properties of Electrical Materials",
    hours: 2,
    semester: 3,
  },
  {
    code: "ASU112",
    name: "Report Writing and Communication skills",
    hours: 2,
    semester: 3,
  },

  // semester 4

  {
    code: "CSE112",
    name: "Computer Organization and Architecture",
    hours: 3,
    semester: 4,
  },
  {
    code: "CSE111",
    name: "Advanced Computer Programming",
    hours: 2,
    semester: 4,
  },
  { code: "CSE334", name: "Software Engineering", hours: 2, semester: 4 },
  { code: "PHM111", name: "Probability and Statistics", hours: 2, semester: 4 },
  { code: "PHM114", name: "Numerical Analysis", hours: 2, semester: 4 },
  { code: "", name: "ASU Elective-1", hours: 2, semester: 4 },
];

let usersData = [
  {
    id: "admin",
    email: "admin" + emailBase,
    password: "P@ssw0rdAdmin",
  },
];

let emailBase = "@company.edu.eg";

function idGenerator() {
  let id = "";

  for (let i = 0; i < 8; i++) {
    let randNum = Math.floor(Math.random() * 9);

    id += randNum;
  }
  console.log(id);

  return id;
}

function createNewEmptyStudent() {
  // this function should be called when log in as new student.
  let studentID = idGenerator();
  let studentObj = {
    id: studentID,
    email: `${studentID}${emailBase}`,
    password: `P@ssw0rd${studentID}`,
    subjects: [], //array of objects
    gpa: 0,
    grade: "",
    totalHours: 0,
    availableTotalHours: 18,
    level: 1,
  };

  //   usersData.push(studentObj);
  return studentObj;

  console.log(usersData);
  // push in the array

  // create random id
  // generate email
  // generate password
}

function createRandomStudents() {
  for (let i = 0; i < 50; i++) {
    let student = createNewStudent();
    // create 6 subjects for one student

    for (let j = 0; j < 6; j++) {
      let randomNum = Math.floor(Math.random() * subjectsObjs.length);

      student.subjects.push(subjectsObjs[randomNum]);
      student.totalHours += subjectsObjs[randomNum].hours;
    }
    usersData.push(student);
  }
  console.log(usersData);
}

function setDataToLocalStorage() {
  localStorage.setItem("userData", usersData);
  console.log(data);
}

function getDataFromLocalStorage() {
  var data = localStorage.getItem("userData");
  console.log(data);
}
