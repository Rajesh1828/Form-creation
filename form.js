var nameError = document.getElementById("name-error");
var numberError = document.getElementById("number-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");
var deptError = document.getElementById("check-error");

function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length === 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name (e.g. Rajesh S)";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i>';
    return true;
}

function validateNumber() {
    var number = document.getElementById("Phone-number").value;
    if (number.length === 0) {
        numberError.innerHTML = "Number required";
        return false;
    }
    if (number.length !== 10) {
        numberError.innerHTML = "Number should be 10 digits";
        return false;
    }
    if (!number.match(/^[0-9]{10}$/)) {
        numberError.innerHTML = "Only digits allowed";
        return false;
    }
    numberError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById("email-id").value;
    if (email.length === 0) {
        emailError.innerHTML = "Email required";
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = "Write a proper email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById("message").value;
    var required = 30;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + " more characters required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i>';
    return true;
}

function validateDepartment() {
    var radios = document.getElementsByName("dept");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            deptError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: green;"></i>';
            return true;
        }
    }
    deptError.innerHTML = "Please select a department";
    return false;
}

function validateSubmit() {
    if (!validateName() || !validateNumber() || !validateEmail() || !validateMessage() || !validateDepartment()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix the errors and submit";
        setTimeout(function () {
            submitError.style.display = "none";
        }, 3000);
        return false;
    }
    submitError.innerHTML = "";
    alert("Form submitted successfully!");
    return true;
}

document.getElementById("submit-btn").addEventListener("click", function (e) {
    if (!validateSubmit()) {
        e.preventDefault();
    }
});
