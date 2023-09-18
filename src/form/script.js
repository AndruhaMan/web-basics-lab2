'use strict';

const form = document.querySelector(".form");
const fullname = document.getElementsByName("fullname")[0];
const group = document.getElementsByName("group")[0];
const phone = document.getElementsByName("phone")[0];
const faculty = document.getElementsByName("faculty")[0];
const city = document.getElementsByName("city")[0];
const submitButton = document.querySelector(".submit");
const cancelButton = document.querySelector(".cancel");

let fullnameError = false;
let groupError = false;
let phoneError = false;
let facultyError = false;
let cityError = false;

const fullnameRegexp = /^([A-Z][a-z]+ [A-Z]\. [A-Z]\.)$/;
const groupRegexp = /^([A-Z]{2}-[0-9]{2})$/;
const phoneRegexp = /^(\(\d{3}\)-\d{3}-\d{2}-\d{2})$/;
const facultyRegexp = /^([A-Z]{4})$/;
const cityRegexp = /^([A-Z][a-z]+)$/;

submitButton.addEventListener("click", () => {
  if (!fullnameRegexp.test(fullname.value.trim())) {
    fullnameError = true;
  } else {
    fullnameError = false;
  }

  if (!groupRegexp.test(group.value.trim())) {
    groupError = true;
  } else {
    groupError = false;
  }

  if (!phoneRegexp.test(phone.value.trim())) {
    phoneError = true;
  } else {
    phoneError = false;
  }

  if (!facultyRegexp.test(faculty.value.trim())) {
    facultyError = true;
  } else {
    facultyError = false;
  }

  if (!cityRegexp.test(city.value.trim())) {
    cityError = true;
  } else {
    cityError = false;
  }

  updateErrors();

  if (!fullnameError && !groupError && !phoneError && !facultyError && !cityError) {
    openTable();
  }
});

cancelButton.addEventListener("click", () => {
  fullnameError = false;
  groupError = false;
  phoneError = false;
  facultyError = false;
  cityError = false;

  updateErrors();
  form.reset();
});

function updateErrors() {
  if (fullnameError) {
    addError(fullname)
  } else {
    removeError(fullname);
  }

  if (groupError) {
    addError(group)
  } else {
    removeError(group);
  }

  if (phoneError) {
    addError(phone)
  } else {
    removeError(phone);
  }

  if (facultyError) {
    addError(faculty)
  } else {
    removeError(faculty);
  }

  if (cityError) {
    addError(city)
  } else {
    removeError(city);
  }
}

function addError(element) {
  element.classList.add("is-danger");
  element.parentElement.children[2].innerHTML = `
    <i class="fas fa-exclamation-triangle"></i>
  `;
  element.parentElement.parentElement.children[2].innerHTML = 'Wrong format';
}

function removeError(element) {
  element.classList.remove("is-danger");
  element.parentElement.children[2].innerHTML = '';
  element.parentElement.parentElement.children[2].innerHTML = '';
}

function openTable() {
  const tab = window.open();
  tab.document.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <title>Table</title>
  </head>
  <body>
    <div class="container box">
      <table class="table is-fullwidth">
        <tbody>
          <tr>
            <th>Full name</th>
            <td>${fullname.value}</td>
          </tr>

          <tr>
            <th>Group</th>
            <td>${group.value}</td>
          </tr>

          <tr>
            <th>Phone number</th>
            <td>${phone.value}</td>
          </tr>

          <tr>
            <th>Faculty</th>
            <td>${faculty.value}</td>
          </tr>

          <tr>
            <th>City</th>
            <td>${city.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
  </html>
  `);
  tab.document.close();
}
