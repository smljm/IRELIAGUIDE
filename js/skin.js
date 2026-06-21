/* 이전/다음 버튼 및 도트 인디케이터를 활용한 스킨 슬라이더 스크립트 */
document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("skin-img");
  const nameEl = document.getElementById("skin-name");
  const counterEl = document.getElementById("skin-count");
  const dots = document.querySelectorAll(".skin-dot");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let current = 0; // 현재 표시 중인 스킨 배열 인덱스

  // 스킨 목록 데이터 데이터셋
  const skins = [
    { name: "연꽃 수도회 이렐리아", src: "연꽃수도회이렐리아.jpg" },
    { name: "서리검 이렐리아", src: "서리검이렐리아.jpg" },
    { name: "불멸의 영웅 이렐리아", src: "불멸의영웅이렐리아.jpg" },
    { name: "하이눈 이렐리아", src: "하이눈이렐리아.jpg" },
    { name: "감시자 이렐리아", src: "감시자이렐리아.jpg" },
    { name: "네온 레이서 이렐리아", src: "네온레이서이렐리아.jpg" },
    { name: "천상의 자수 이렐리아", src: "천상의자수이렐리아.jpg" },
    { name: "소울 파이터 이렐리아", src: "소울파이터이렐리아.jpg" },
    {
      name: "프레스티지 소울 파이터 이렐리아",
      src: "프레스티지소울파이터이렐리아.jpg",
    },
  ];

  // 슬라이더 상태 업데이트 함수
  const update = () => {
    // 이미지 변경 시 페이드인 효과 연출
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = skins[current].src;
      img.alt = skins[current].name;
      img.style.opacity = "1";
    }, 200);

    // 하단 텍스트 및 페이지 번호 갱신
    nameEl.textContent = skins[current].name;
    counterEl.textContent = current + 1 + " / " + skins.length;

    // 현재 선택된 도트 인디케이터 활성화 처리
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });
  };

  // 이전 버튼 클릭 (처음에서 누르면 마지막 스킨으로 순환)
  prevBtn.addEventListener("click", () => {
    current = (current - 1 + skins.length) % skins.length;
    update();
  });

  // 다음 버튼 클릭 (마지막에서 누르면 처음 스킨으로 순환)
  nextBtn.addEventListener("click", () => {
    current = (current + 1) % skins.length;
    update();
  });

  // 개별 도트 인디케이터 클릭 이벤트 바인딩
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      current = i;
      update();
    });
  });

  // 초기 페이지 진입 시 최초 1회 실행
  update();
});
