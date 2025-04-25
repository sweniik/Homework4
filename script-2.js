 /* Name: Sweni Karedia 
  File: script-2.js
  Date created: 02/28/2025
  Date Updated: 04/10/2025
  Description: JS for Form Interactions and Dynamic Content Display.

*/
 // Displays Current Date and Time
 function displayCurrentDate(){
 const dateElement = document.getElementById('date');
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric'
  });
  dateElement.textContent = formattedDate;
}
window.onload = displayCurrentDate;

//Validates First name 
function validateFname() {
    let firstNameInput = document.getElementById("fname");
    let firstName = firstNameInput.value.trim();
    const errorSpan = document.getElementById("fname-error");
    const namePattern = /^[A-Za-z'-]+$/;

    if (firstName.length === 0) {
        errorSpan.textContent = "First name cannot be blank";
        return false;
    } else if (!namePattern.test(firstName)) {
        errorSpan.textContent = "Only letters, apostrophes, and dashes are allowed";
        return false;
    } else if (firstName.length > 30) {
        errorSpan.textContent = "First name cannot exceed 30 characters";
        return false;
    } else {
        errorSpan.textContent = ""; 
        return true;
    }
}


//Validates Middle name
function validateMname() {
    const mname = document.getElementById("mname").value.trim();
    const errorSpan = document.getElementById("mname-error");

    if (mname.length === 0) {
        errorSpan.textContent = ""; 
        return true;
    } else if (!/^[A-Za-z]$/.test(mname)) {
        errorSpan.textContent = "Middle initial must be a single letter";
        return false;
    } else {
        errorSpan.textContent = "";
        return true;
    }
}


// Validates Last Name
function validateLname() {
    const lname = document.getElementById("lname").value.trim();
    const errorSpan = document.getElementById("lname-error");
    const namePattern = /^[A-Za-z'-]+$/;

    if (lname.length === 0) {
        errorSpan.textContent = "Last name cannot be blank";
        return false;
    } else if (!namePattern.test(lname)) {
        errorSpan.textContent = "Only letters, apostrophes, and dashes are allowed";
        return false;
    } else if (lname.length > 30) {
        errorSpan.textContent = "Last name cannot exceed 30 characters";
        return false;
    } else {
        errorSpan.textContent = ""; // valid
        return true;
    }
}


//Validates Dob
function validateDob() {
    let dob = document.getElementById("dob");  
    let date = new Date(dob.value);  
    let today = new Date();  
    let maxDate = new Date();  
    maxDate.setFullYear(today.getFullYear() - 120);  

    if (date.getTime() > today.getTime()) {  
        document.getElementById("dob-error").innerHTML =  
        "Date cannot be in the future";  
        dob.value = "";  
        return false;  
    } else if (date.getTime() < maxDate.getTime()) {  
        document.getElementById("dob-error").innerHTML =  
        "Date cannot be more than 120 years ago";  
        dob.value = "";  
        return false;  
    } else {  
        document.getElementById("dob-error").innerHTML = "";  
        return true;  
    }  
}

//Validates Ssn
function validateSsn() {
    const ssn = document.getElementById("ssn").value.trim();
    const errorSpan = document.getElementById("ssn-error");
    
    
    const ssnPattern = /^(?!000|666|9\d{2})\d{3}[- ]?(?!00)\d{2}[- ]?(?!0000)\d{4}$/;

    if (ssn.length === 0) {
        errorSpan.textContent = "SSN is required";
        return false;
    } else if (!ssnPattern.test(ssn)) {
        errorSpan.textContent = "Enter a valid SSN (e.g., 123-45-6789)";
        return false;
    } else {
        errorSpan.textContent = ""; // valid
        return true;
    }
}
//Validates Address1
function validateAddress1() {
    const address1 = document.getElementById("address1").value.trim();
    const error = document.getElementById("address1-error");
    const addressPattern = /^[A-Za-z0-9\s.,'#-]{2,30}$/;

    if (address1.length === 0) {
        error.textContent = "Address Line 1 is required";
        return false;
    } else if (address1.length < 2) {
        error.textContent = "Address Line 1 must be at least 2 characters long";
        return false;
    } else if (!addressPattern.test(address1)) {
        error.textContent = "Use only letters, numbers, spaces, and punctuation";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

// Validates Address2
function validateAddress2() {
    const address2Input = document.getElementById("address2");
    const address2 = address2Input.value.trim();
    const error = document.getElementById("address2-error");
    const addressPattern = /^[A-Za-z0-9\s.,'#-]+$/;

    // Debugging line: Check if the function is being called
    console.log("Validating Address Line 2:", address2);

    if (address2.length > 0 && address2.length < 2) {
        error.textContent = "Address Line 2 must be at least 2 characters long";
        return false;
    } else if (address2.length > 30) {
        error.textContent = "Address Line 2 cannot exceed 30 characters";
        return false;
    } else if (address2.length > 0 && !addressPattern.test(address2)) {
        error.textContent = "Use only letters, numbers, spaces, and common symbols";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}



// Validates City
function validateCity() {
    let city = document.getElementById("city").value;
    const cityPattern = /^[A-Za-z\s]+$/;

    city = city.trim();
    document.getElementById("city").value = city;

    if (city.length === 0) {
        document.getElementById("city-error").innerHTML = "City cannot be blank";
        return false;
    } else if (city.length < 2) {
        document.getElementById("city-error").innerHTML = "City must be at least 2 characters long";
        return false;
    } else if (!city.match(cityPattern)) {
        document.getElementById("city-error").innerHTML = "City can only contain letters and spaces";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

//Validates Zip Code 
function validateZip() {
    let zip = document.getElementById("zip").value;
    const zipPattern = /^\d{5}(-\d{4})?$/;  

    zip = zip.trim();  
    document.getElementById("zip").value = zip;

    if (zip.length === 0) {
        document.getElementById("zip-error").innerHTML = "Zip code cannot be blank";
        return false;
    } else if (zip.length < 5) {
        document.getElementById("zip-error").innerHTML = "Zip code must be at least 5 digits long";
        return false;
    } else if (!zip.match(zipPattern)) {
        document.getElementById("zip-error").innerHTML = "Zip code can only contain numbers and dashes";
        return false;
    } else {
        document.getElementById("zip-error").innerHTML = "";  
        return true;
    }
}


// Validates Email
function validateEmail() {
    let email = document.getElementById("email").value;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/;  

    email = email.trim();  
    document.getElementById("email").value = email;

    if (email.length === 0) {
        document.getElementById("email-error").innerHTML = "Email cannot be blank";
        return false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";  
        return true;
    }
}


// Validates Phone Number
function validatePhone() {
    let phone = document.getElementById("phone").value;
    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;  

    phone = phone.trim();  
    document.getElementById("phone").value = phone;

    if (phone.length === 0) {
        document.getElementById("phone-error").innerHTML = "Phone number cannot be blank";
        return false;
    } else if (!phone.match(phonePattern)) {
        document.getElementById("phone-error").innerHTML = "Phone number must be in the format: 123-456-7890";
        return false;
    } else {
        document.getElementById("phone-error").innerHTML = "";  
        return true;
    }
}


// Validates Username  

function validateUid() {
    let uidField = document.getElementById("uid");  
    let uid = uidField.value.toLowerCase();  
    uidField.value = uid;  
    
    let errorDiv = document.getElementById("uid-error");  
    
    
    if (uid.length === 0) {
        errorDiv.innerHTML = "Username cannot be blank";
        return false;
    }

    if (!isNaN(uid.charAt(0))) {
        errorDiv.innerHTML = "Username cannot start with a number";
        return false;
    }

    if (uid.length < 5) {
        errorDiv.innerHTML = "Username must be at least 5 characters";
        return false;
    }

    if (uid.length > 20) {
        errorDiv.innerHTML = "Username cannot exceed 20 characters";
        return false;
    }

    let regex = /^[a-z0-9_-]{5,20}$/;
    if (!regex.test(uid)) {
        errorDiv.innerHTML = "Username can only have lowercase letters, numbers, underscores, and dashes";
        return false;
    }
    
    errorDiv.innerHTML = "";
    return true;
}

//Validates Password 
function validatePassword() {
    const password = document.getElementById("password").value; 
    const userId = document.getElementById("uid").value;  
    
    const errorMessage = [];  

    if (password.length < 8) {
        errorMessage.push("Password must be at least 8 characters long");
    }
    if (!password.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }
    if (!password.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }
    if (!password.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number");
    }
    if (!password.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }
    if (password.includes(userId)) {
        errorMessage.push("Password cannot contain user ID");
    }
    const errorDiv = document.getElementById("password-error");
    if (errorMessage.length > 0) {
        errorDiv.innerHTML = errorMessage.join('<br>'); 
        return false;
    } else {
        errorDiv.innerHTML = "";  
        return true; 
    }
}
document.getElementById("password").addEventListener("input", validatePassword);

//Validates Confirm Password 
function confirmPword() {
    const pword1 = document.getElementById("password").value;
    const pword2 = document.getElementById("confirm-password").value;
 
    if (pword1 !== pword2) {
        document.getElementById("confirm-password2-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("confirm-password2-error").innerHTML = 
        "Passwords match";
        return true;
    }
}
    
//Validates Review 
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
    if (formcontent.elements[i].value !== "") {
    switch (formcontent.elements[i].type) {
    case "checkbox":
    if (formcontent.elements[i].checked) {
    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
     }
     break;
     case "radio":
     if (formcontent.elements[i].checked) {
     formoutput += `<tr><td align='right'>${formcontent.elements[i].name}
     </td><td>${formcontent.elements[i].value}</td></tr>`;
     }
     break;
     default:
     formoutput += `<tr><td align='right'>${formcontent.elements[i].name}
     </td><td>${formcontent.elements[i].value}</td></tr>`;
      }
      }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}



//Validates Everything 
function validateEverything() {
    let valid = true;

    if (!validateFname()) valid = false;
    if (!validateMname()) valid = false;
    if (!validateLname()) valid = false;
    if (!validateDob()) valid = false;
    if (!validateSsn()) valid = false;
    if (!validateAddress1()) valid = false;
    if (!validateCity()) valid = false;
    if (!validateZip()) valid = false;
    if (!validatePhone()) valid = false;
    if (!validateEmail()) valid = false;
    if (!validateUid()) valid = false;
    if (!validatePassword()) valid = false;
    if (!validateconfirmPword()) valid = false;


    if (valid) {
        document.getElementById("submit").disabled = false;
    } else {
    }
}