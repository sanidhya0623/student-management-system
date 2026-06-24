const API_URL = "http://localhost:3000/students";

// Add Student

document.getElementById("studentForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const student = {
        name: document.getElementById("name").value,
        enrollment: document.getElementById("enrollment").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        branch: document.getElementById("branch").value
    };

    try{

        const response = await fetch(API_URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(student)
        });

        const data = await response.json();

        // Success Message

        document.getElementById("message").innerHTML =
        "✅ Student Added Successfully";

        setTimeout(() => {

            document.getElementById("message").innerHTML = "";

        },3000);

        document.getElementById("studentForm").reset();

        loadStudents();

    }
    catch(error){

        console.log(error);

        document.getElementById("message").innerHTML =
        "❌ Error Adding Student";
    }
});


// Load Students

async function loadStudents(){

    try{

        const response = await fetch(API_URL);

        const students = await response.json();

        // Student Count

        document.getElementById("count").innerText =
        students.length;

        const table =
        document.getElementById("studentTable");

        table.innerHTML = "";

        students.forEach(student => {

            table.innerHTML += `
                <tr>
                    <td>${student.name}</td>
                    <td>${student.enrollment}</td>
                    <td>${student.email}</td>
                    <td>${student.mobile}</td>
                    <td>${student.branch}</td>
                </tr>
            `;
        });

    }
    catch(error){

        console.log(error);
    }
}


// Search Students

function searchStudents(){

    let filter =
    document.getElementById("search")
    .value.toLowerCase();

    let rows =
    document.querySelectorAll("#studentTable tr");

    rows.forEach(row => {

        let text =
        row.innerText.toLowerCase();

        row.style.display =
        text.includes(filter)
        ? ""
        : "none";
    });
}


// Load Students When Page Opens

loadStudents();