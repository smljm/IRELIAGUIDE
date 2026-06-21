/* 챔피언 카드 클릭 시 상세 상성 정보를 보여주는 팝업 모달 스크립트 */
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".champ-card");
  const overlay = document.getElementById("modal-wrap");
  const modalName = document.getElementById("modal-name");
  const modalType = document.getElementById("modal-type");
  const modalDesc = document.getElementById("modal-desc");
  const closeBtn = document.getElementById("modal-close");

  // 챔피언 카드 클릭 이벤트 설정
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const name = card.dataset.name;
      const type = card.dataset.type;
      const desc = card.dataset.desc;

      // 모달 내부 텍스트 주입
      modalName.textContent = name;
      modalType.textContent = type === "good" ? "유리한 상대" : "불리한 상대";

      // 유리함/불리함 상태에 따라 클래스 다르게 적용 (CSS 색상 연동)
      modalType.className = "modal-type " + (type === "good" ? "good" : "bad");
      modalDesc.textContent = desc;

      // 모달창 열기
      overlay.classList.add("open");
    });
  });

  // 모달 닫기 기능 정의
  const closeModal = () => overlay.classList.remove("open");

  closeBtn.addEventListener("click", closeModal);

  // 어두운 배경 영역 클릭 시 닫기
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  // ESC 키 입력 시 닫기
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
