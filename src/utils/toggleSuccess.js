const toggleSuccess = () => {
  const appBtn = document.querySelector(".app__form-btn");
  const successMenu = document.querySelector(".success");
  const appInput = document.querySelector(".app__form-input");
  const successSpan = document.querySelector(".success__container-span");
  const successBtn = document.querySelector(".success__container-btn");
  // State
  let isSuccessMenuOpen = false;

  appBtn.addEventListener("click", () => {
    if (appInput.checkValidity()) {
      document.documentElement.scrollTop = 0;
      successMenu.style.display = "flex";
      document.body.style.overflowY = "hidden";
      successSpan.innerHTML = appInput.value;
      isSuccessMenuOpen = !isSuccessMenuOpen;
    }
  });

  successBtn.addEventListener("click", () => {
    if (isSuccessMenuOpen) {
      successMenu.style.display = "none";
      document.body.style.removeProperty("overflow-y");
      isSuccessMenuOpen = !isSuccessMenuOpen;
    }
  });
};

export default toggleSuccess;
