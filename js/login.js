document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("name-input");
  const btn = document.getElementById("enter-btn");
  const error = document.getElementById("error-msg");

  //페이지포커스
  input.focus();

  //로그인함수
  const tryLogin = () => {
    const value = input.value.trim();

    //빈값일때
    if (!value) {
      error.textContent = "소환사명을 입력해주세요.";
      input.focus();
      return;
    }

    //이름저장후다음페이지
    localStorage.setItem("summoner", value);
    location.href = "home.html";
  };

  //버튼또는엔터시발동
  btn.addEventListener("click", tryLogin);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") tryLogin();
  });

  //에러메세지초기화
  input.addEventListener("input", () => {
    error.textContent = "";
  });
});
