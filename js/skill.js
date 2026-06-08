document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".skill-sec");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.skill;

      tabs.forEach((t) => t.classList.remove("active"));
      sections.forEach((s) => s.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById("skill-" + target).classList.add("active");
    });
  });

  document.addEventListener("keydown", (e) => {
    const keys = { q: "q", w: "w", e: "e", r: "r" };
    const key = e.key.toLowerCase();
    if (keys[key]) {
      const tab = document.querySelector(`.tab-btn[data-skill="${key}"]`);
      if (tab) tab.click();
    }
  });
});
