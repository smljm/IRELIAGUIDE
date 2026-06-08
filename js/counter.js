document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".champ-card");
  const overlay = document.getElementById("modal-wrap");
  const modalName = document.getElementById("modal-name");
  const modalType = document.getElementById("modal-type");
  const modalDesc = document.getElementById("modal-desc");
  const closeBtn = document.getElementById("modal-close");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const name = card.dataset.name;
      const type = card.dataset.type;
      const desc = card.dataset.desc;

      modalName.textContent = name;
      modalType.textContent =
        type === "good" ? "✦ 유리한 상대" : "✦ 불리한 상대";
      modalType.className = "modal-type " + (type === "good" ? "good" : "bad");
      modalDesc.textContent = desc;

      overlay.classList.add("open");
    });
  });

  const closeModal = () => overlay.classList.remove("open");

  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
