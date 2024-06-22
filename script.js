document.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("email");
  const submit = document.getElementById("submit");
  const popupEmail = document.getElementById("popup_email");
  const cardContainer = document.querySelector(".card");
  const popupContainer = document.querySelector(".popup_container");
  const dismissButton = document.getElementById("dismiss");

  function showError(input) {
    input.parentElement.classList.add("error");
    input.parentElement.classList.remove("success");
  }

  function showSuccess(input) {
    input.parentElement.classList.add("success");
    input.parentElement.classList.remove("error");
    popupEmail.textContent = input.value;
  }

  function checkEmail(input) {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (re.test(input.value.trim())) {
      showSuccess(input);
      email.value = "";
      cardContainer.style.visibility = "hidden";
      popupContainer.style.visibility = "visible";
    } else {
      showError(input);
    }
  }

  // event handler
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    checkEmail(email);
  });

  dismissButton.addEventListener("click", (e) => {
    e.preventDefault();

    popupContainer.style.visibility = "hidden";
    cardContainer.style.visibility = "visible";
  });
});
