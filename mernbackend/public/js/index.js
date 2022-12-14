let input1 = document.querySelector("#contactName");
let input2 = document.querySelector("#contactEmail");
let input3 = document.querySelector("#contactPhone");
let input4 = document.querySelector("#contactMessage");
let button = document.querySelector(".btn");

button.disabled = true;

input1.addEventListener("keyup", handleName);
input2.addEventListener("keyup", handleEmail);
input3.addEventListener("keyup", handlePhone);
input4.addEventListener("keyup", handleMessage);

function handleName() {
  if (document.getElementById("conatactName").value === "") {
    button[0].disabled = true; //button remains disabled
  } else {
    button[0].disabled = false; //button is enabled
  }
}
function handleEmail() {
  if (document.getElementById("conatactEmail").value === "") {
    button[0].disabled = true; //button remains disabled
  } else {
    button[0].disabled = false; //button is enabled
  }
}
function handlePhone() {
  if (document.getElementById("conatactPhone").value === "") {
    button[0].disabled = true; //button remains disabled
  } else {
    button[0].disabled = false; //button is enabled
  }
}
function handleMessage() {
  if (document.getElementById("conatactMessage").value === "") {
    button[0].disabled = true; //button remains disabled
  } else {
    button[0].disabled = false; //button is enabled
  }
}

validateForm();
//code for validation in add-user

let userName = document.getElementById("contactName");
let userEmail = document.getElementById("contactEmail");
let userPhone = document.getElementById("contactPhone");
let userMessage = document.getElementById("contactMessage");
let flag = 1;

function validateForm() {
  checkUserName();
  checkUserEmail();
  checkUserPhone();
  checkUserMessage();

  if (
    checkUserName() === false ||
    checkUserEmail() === false ||
    checkUserPhone() === false ||
    checkUserMessage() === false
  ) {
    flag = 0;
  } else {
    flag = 1;
    alert("Redirecting to contact us page!");
  }
}

function checkUserName() {
  if (userName.value == "") {
    document.getElementById("invalid_name").innerHTML = "Username is Empty!";
    flag = 0;
  } else if (userName.value.length < 3) {
    document.getElementById("invalid_name").innerHTML =
      "Username require min 3 character";
    flag = 0;
  } else {
    document.getElementById("invalid_name").innerHTML = "";
    flag = 1;
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}

function checkUserEmail() {
  if (userEmail.value == "") {
    document.getElementById("invalid_email").innerHTML = "Email is Empty!";
    flag = 0;
  } else {
    document.getElementById("invalid_email").innerHTML = "";
    flag = 1;
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}

function checkUserPhone() {
  if (userPhone.value == "") {
    document.getElementById("invalid_phone").innerHTML =
      "Phone Number Field is Empty!";
    flag = 0;
  } else {
    document.getElementById("invalid_phone").innerHTML = "";
    flag = 1;
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}

function checkUserMessage() {
  if (userMessage.value == "") {
    document.getElementById("invalid_message").innerHTML =
      "Message Field is Empty!";
    flag = 0;
  } else {
    document.getElementById("invalid_message").innerHTML = "";
    flag = 1;
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}
