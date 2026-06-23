/*팝업모달*/
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".champ-card");
  const overlay = document.l("modal-wrap");
  const modalName = document.getElementById("modal-name");
  const modalType = document.getElementById("modal-type");
  const modalDesc = document.getElementById("modal-desc");
  const closeBtn = document.getElementById("modal-close");

  //클릭시
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const name = card.dataset.name;
      const type = card.dataset.type;
      const desc = card.dataset.desc;

      //모달내부텍스트
      modalName.textContent = name;
      modalType.textContent = type === "good" ? "유리한 상대" : "불리한 상대";

      //유리불리색다르게
      modalType.className = "modal-type " + (type === "good" ? "good" : "bad");
      modalDesc.textContent = desc;

      //모달창열기
      overlay.classList.add("open");
    });
  });

  //모달달기기능
  const closeModal = () => overlay.classList.remove("open");

  closeBtn.addEventListener("click", closeModal);

  //배경클릭시닫기
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  //ESC시닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
