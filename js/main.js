/* 상단 바에 로그인한 유저명을 표시하는 스크립트 */
document.addEventListener("DOMContentLoaded", () => {
  const nickname = localStorage.getItem("summoner");
  const navUser = document.querySelector(".nav-user");

  // 저장된 소환사명이 있고 표시할 영역이 존재하면 화면에 렌더링
  if (navUser && nickname) {
    navUser.textContent = nickname + "님 환영합니다";
  }
});
