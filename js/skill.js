document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".skill-sec");

  //마우스로탭전환
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.skill;

      //기존활성화클래스제거
      tabs.forEach((t) => t.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));

      //활성화
      tab.classList.add("active");
      document.getElementById("skill-" + target).classList.add("active");
    });
  });

  //단축키연동
  document.addEventListener("keydown", (e) => {
    if (e.isComposing) return; //한글입력중복방지

    const keys = { p: "p", q: "q", w: "w", e: "e", r: "r" };
    const key = e.key.toLowerCase();

    //클릭이벤트발동
    if (keys[key]) {
      const tab = document.querySelector(`.tab-btn[data-skill="${key}"]`);
      if (tab) tab.click();
    }
  });
});
