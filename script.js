var selSub = document.getElementById("select-sub")
var inputDegree = document.getElementById("input-degree")
var inputHours = document.getElementById("input-hours")
var addSub = document.getElementById("show-result")
var totalGpa = document.getElementById("show-total")
var getId = document.getElementById("idStu")
var addHours = 0;
var gpa = [];
var omar;
var gaber
var addSelSub = []
var students = [
    {
        id: '1',
        subjects: [],
        gpa: 0,
        hour: 0
    },
    {
        id: '2',
        subjects: [],
        gpa: 0,
        hour: 0
    },
    {
        id: '3',
        subjects: [],
        gpa: 0,
        hour: 0
    }

]


function calc() {
    calcGpaSub()
}

var total = 0
// var addHours = 0;
var gpa =[]
function calcGpaSub() {
    if (checkId()) {
        var degree = '';
        degree = inputDegree.value
        if (degree != '') {
            var hour = parseInt(selSub.options[selSub.selectedIndex].getAttribute("data-hour"))
            // console.log(typeof(hour))
            var res = ((degree / 20) - 1) * hour
            // console.log(res)
            console.log(hour)
            addHours += hour
            console.log(addHours)
            gpa.push(res)
            // console.log(gpa)
            var sumGpas = gpa.reduce((a, b) => a + b)
            // console.log(sumGpas)
            // console.log(total)
            total = sumGpas / addHours
            addStudentObj(selSub.value,hour,total)
            
            console.log(students)
            display(selSub.value, hour, res)
            displayTotal(total)
            clear()
        }
    } else {
        console.log("kngeu9vhvy6904hjmq2,")
    }


}
function clear() {
    selSub.value = ''
    inputDegree.value = ''
    inputHours.value = ''
}

selSub.addEventListener("change", function () {
    // console.log(this.options[this.selectedIndex].getAttribute("data-hour"))
})
function checkId() {
    for (let i = 0; i < students.length; i++) {
        // console.log('id')
        // console.log(getId.value)
        // console.log('studentID')

        // console.log(students[i].id)

        if (getId.value == students[i].id) {
            return true
        }  
           
    }

}

function display(sub, hour, gpaSub,) {
    addSub.innerHTML += `<div><span>${sub}</span>
    <span>${hour}</span>
    <span>${gpaSub}</span></div>
    `
}
function displayTotal(total) {
    totalGpa.innerHTML = `<div>${total}</div>`
}

function addStudentObj(studentSub,hour,gpa) {
    for (let i = 0; i < students.length; i++) {
        if (getId.value == students[i].id) {
            students[i].subjects.push(studentSub)
            students[i].hour+=hour
            students[i].gpa=gpa
            
        }
    }
}