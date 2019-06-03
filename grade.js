// document.querySelector('button').addEventListener('click', calculateGrade, false);
window.addEventListener('load', addEventListeners, false);

function calculateGrade(event) {
    if (event) {
        event.preventDefault();
    }
    let form = document.forms[0]
    let q1 = parseFloat(form.q1.value) || 0; 
    let q2 = parseFloat(form.q2.value) || 0; 
    let q3 = parseFloat(form.q3.value) || 0; 
    let q4 = parseFloat(form.q4.value) || 0; 
    let midterm = parseFloat(form.midterm.value) || 0; 
    let final = parseFloat(form.final.value) || 0;
    let grade = 0.2*(q1 + q2 + q3 + q4) + 0.1*(midterm + final);
    gradeSpan.innerHTML = grade.toFixed(2); 
}

function addEventListeners(event) {
    if (event) {
        event.preventDefault();
    }
    let formFields = document.querySelectorAll("input");
    formFields.forEach(function (f) {
        f.addEventListener('keyup', calculateGrade, false)
    })
}