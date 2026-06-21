/* 네비게이션 바에 로그인한 유저 이름을 표시하는 스크립트 */
document.addEventListener("DOMContentLoaded", () => {
  const navUser = document.querySelector(".nav-user");

  if (navUser) {
    // 로컬 스토리지에서 저장된 소환사 이름을 가져옴
    const savedName = localStorage.getItem("summonerName");

    // 이름이 존재하면 네비게이션 바 우측에 표시
    if (savedName) {
      navUser.textContent = `${savedName}님 환영합니다`;
    }
  }
});
