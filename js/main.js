document.addEventListener("DOMContentLoaded", () => {
  const nickname = localStorage.getItem("summoner");
  const navUser = document.querySelector(".nav-user");
  if (navUser && nickname) {
    navUser.textContent = nickname + "님 환영합니다";
  }
});
