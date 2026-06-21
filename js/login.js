/* 소환사명 입력 및 유효성을 검사하는 로그인 스크립트 */
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("name-input");
  const btn = document.getElementById("enter-btn");
  const error = document.getElementById("error-msg");

  // 페이지 로드 시 입력창에 포커스
  input.focus();

  // 로그인 시도 함수
  const tryLogin = () => {
    const value = input.value.trim();

    // 빈 값 검사
    if (!value) {
      error.textContent = "소환사명을 입력해주세요.";
      input.focus();
      return;
    }

    // 브라우저에 이름 저장 후 홈 화면으로 이동
    localStorage.setItem("summoner", value);
    location.href = "home.html";
  };

  // 버튼 클릭 및 엔터 키 입력 이벤트 연결
  btn.addEventListener("click", tryLogin);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") tryLogin();
  });

  // 사용자가 글자를 입력하기 시작하면 에러 메시지 초기화
  input.addEventListener("input", () => {
    error.textContent = "";
  });
});
