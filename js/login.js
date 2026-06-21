/* 소환사 이름을 검사하고 저장한 후 메인 화면으로 이동시키는 로그인 스크립트 */
document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-btn");
  const nameInput = document.getElementById("name-input");
  const errorMsg = document.getElementById("error-msg");

  if (enterBtn && nameInput) {
    enterBtn.addEventListener("click", () => {
      const nameValue = nameInput.value.trim();

      // 유효성 검사: 빈 값 체크
      if (nameValue === "") {
        errorMsg.textContent = "소환사 이름을 입력해주세요.";
        return;
      }

      // 유효성 검사: 글자 수 제한 (예시: 2글자 미만 또는 16글자 초과)
      if (nameValue.length < 2 || nameValue.length > 16) {
        errorMsg.textContent = "소환사 이름은 2~16자 사이여야 합니다.";
        return;
      }

      // 검증 통과 시 이름을 로컬 스토리지에 저장하고 홈으로 이동
      localStorage.setItem("summonerName", nameValue);
      window.location.href = "home.html";
    });

    // 엔터 키를 눌러도 버튼 클릭과 동일하게 작동하도록 설정
    nameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        enterBtn.click();
      }
    });
  }
});
