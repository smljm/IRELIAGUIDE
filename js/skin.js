/* 이전/다음 버튼 및 하단 도트를 이용해 이렐리아 스킨 이미지를 교체하는 슬라이더 스크립트 */
document.addEventListener("DOMContentLoaded", () => {
  // 이렐리아 스킨 데이터 배열 (이미지 파일명 및 화면에 표시될 이름)
  const skins = [
    { img: "그냥이렐리아.jpg", name: "기본 이렐리아" },
    { img: "암흑검이렐리아.jpg", name: "암흑검 이렐리아" },
    { img: "조조이렐리아.jpg", name: "연화 이렐리아" },
    { img: "서리검이렐리아.jpg", name: "서리검 이렐리아" },
    { img: "잠행요원이렐리아.jpg", name: "잠행요원 이렐리아" },
    { img: "불멸의영웅이렐리아.jpg", name: "불멸의 영웅 이렐리아" },
    { img: "하이눈이렐리아.jpg", name: "하이눈 이렐리아" },
    { img: "센티넬이렐리아.jpg", name: "빛의 감시자 이렐리아" },
    { img: "신화창조자이렐리아.jpg", name: "신화 창조자 이렐리아" },
  ];

  let currentIndex = 0;

  const skinImg = document.getElementById("skin-img");
  const skinName = document.getElementById("skin-name");
  const skinCount = document.getElementById("skin-count");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const dots = document.querySelectorAll(".skin-dot");

  // 현재 인덱스에 맞게 이미지, 텍스트, 도트의 활성화 상태를 업데이트
  function updateSlider() {
    const currentSkin = skins[currentIndex];

    // 이미지 변경 시 자연스러운 페이드 효과 적용
    skinImg.style.opacity = 0;

    setTimeout(() => {
      skinImg.src = currentSkin.img;
      skinImg.alt = currentSkin.name;
      skinName.textContent = currentSkin.name;
      skinCount.textContent = `${currentIndex + 1} / ${skins.length}`;

      // 인디케이터 도트 활성화 상태 업데이트
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });

      skinImg.style.opacity = 1;
    }, 200);
  }

  // 이전 버튼 클릭 (첫 번째 스킨이면 마지막 스킨으로 이동)
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? skins.length - 1 : currentIndex - 1;
    updateSlider();
  });

  // 다음 버튼 클릭 (마지막 스킨이면 첫 번째 스킨으로 이동)
  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex === skins.length - 1 ? 0 : currentIndex + 1;
    updateSlider();
  });

  // 하단 인디케이터 도트 클릭 시 해당 스킨으로 바로 이동
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      currentIndex = idx;
      updateSlider();
    });
  });

  // 페이지 초기 로드 시 첫 번째 스킨 표시
  updateSlider();
});
