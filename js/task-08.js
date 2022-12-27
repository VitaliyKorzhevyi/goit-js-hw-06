const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password }
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert ("Please fill in all the fields!");
  }
  const objValue = {
    email: email.value ,
    password: password.value
}
  console.log(objValue);

  e.currentTarget.reset();
}