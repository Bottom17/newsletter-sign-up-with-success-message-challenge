const displayErrorMsg = () => {
  const appBtn = document.querySelector(".app__form-btn");
  const invalidLabel = document.styleSheets[1].cssRules[7];
  const appInput = document.querySelector(".app__form-input");

  appBtn.addEventListener("click", () => {
    if (!appInput.checkValidity()) {
      invalidLabel.style.display = "inherit";
    } else {
      invalidLabel.style.display = "none";
    }
  });
};

export default displayErrorMsg;
