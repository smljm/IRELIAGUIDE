/* 챔피언 카드를 클릭하면 상세 상성 정보를 모달 창으로 띄워주는 스크립트 */
document.addEventListener("DOMContentLoaded", () => {
  const champCards = document.querySelectorAll(".champ-card");
  const modalWrap = document.getElementById("modal-wrap");
  const modalClose = document.getElementById("modal-close");

  const modalName = document.getElementById("modal-name");
  const modalType = document.getElementById("modal-type");
  const modalDesc = document.getElementById("modal-desc");

  // 챔피언 카드 클릭 시 모달 열기 및 데이터 주입
  champCards.forEach((card) => {
    card.addEventListener("click", () => {
      const name = card.getAttribute("data-name");
      const type = card.getAttribute("data-type");
      const desc = card.getAttribute("data-desc");

      modalName.textContent = name;
      modalDesc.textContent = desc;

      // 유리함(good) / 불리함(bad) 유형에 따라 텍스트 및 스타일 변경
      modalType.className = "modal-type"; // 클래스 초기화
      if (type === "good") {
        modalType.textContent = "유리한 상대";
        modalType.classList.add("good");
      } else if (type === "bad") {
        modalType.textContent = "불리한 상대";
        modalType.classList.add("bad");
      }

      modalWrap.classList.add("open");
    });
  });

  // 닫기 버튼 클릭 시 모달 닫기
  modalClose.addEventListener("click", () => {
    modalWrap.classList.remove("open");
  });

  // 모달 바깥 어두운 배경 클릭 시 모달 닫기
  modalWrap.addEventListener("click", (e) => {
    if (e.target === modalWrap) {
      modalWrap.classList.remove("open");
    }
  });
});
