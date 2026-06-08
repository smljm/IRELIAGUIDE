document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("name-input");
  const btn = document.getElementById("enter-btn");
  const error = document.getElementById("error-msg");

  input.focus();

  const tryLogin = () => {
    const value = input.value.trim();
    if (!value) {
      error.textContent = "소환사명을 입력해주세요.";
      input.focus();
      return;
    }
    localStorage.setItem("summoner", value);
    location.href = "home.html";
  };

  btn.addEventListener("click", tryLogin);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") tryLogin();
  });

  input.addEventListener("input", () => {
    error.textContent = "";
  });
});
