/* 탭 클릭 및 키보드 단축키를 이용한 스킬 정보 전환 스크립트 */
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".skill-sec");

  // 마우스 클릭 시 탭 전환 처리
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.skill;

      // 기존 활성화 클래스 모두 제거
      tabs.forEach((t) => t.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));

      // 클릭한 탭과 매칭되는 섹션 활성화
      tab.classList.add("active");
      document.getElementById("skill-" + target).classList.add("active");
    });
  });

  // 키보드(P, Q, W, E, R) 입력 시 단축키 연동 처리
  document.addEventListener("keydown", (e) => {
    if (e.isComposing) return; // 한글 입력 중복 트리거 방지

    const keys = { p: "p", q: "q", w: "w", e: "e", r: "r" };
    const key = e.key.toLowerCase();

    // 누른 키가 지정된 스킬 키에 해당하면 클릭 이벤트 강제 발생
    if (keys[key]) {
      const tab = document.querySelector(`.tab-btn[data-skill="${key}"]`);
      if (tab) tab.click();
    }
  });
});
