/* P/Q/W/E/R 버튼 클릭 시 해당하는 스킬 설명 섹션을 보여주는 스크립트 */
document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const skillSections = document.querySelectorAll(".skill-sec");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // 현재 활성화된 버튼 및 섹션의 active 클래스 제거
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      skillSections.forEach((sec) => sec.classList.remove("active"));

      // 클릭한 버튼 활성화
      button.classList.add("active");

      // 버튼의 data-skill 속성값과 일치하는 ID를 가진 섹션 활성화
      const skillId = button.getAttribute("data-skill");
      const targetSection = document.getElementById(`skill-${skillId}`);
      if (targetSection) {
        targetSection.classList.add("active");
      }
    });
  });
});
