document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("skin-img");
  const nameEl = document.getElementById("skin-name");
  const counterEl = document.getElementById("skin-count");
  const dots = document.querySelectorAll(".skin-dot");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  let current = 0;

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

  const update = () => {
    img.style.opacity = "0";
    setTimeout(() => {
      img.src = skins[current].src;
      img.alt = skins[current].name;
      img.style.opacity = "1";
    }, 200);

    nameEl.textContent = skins[current].name;
    counterEl.textContent = current + 1 + " / " + skins.length;

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });
  };

  prevBtn.addEventListener("click", () => {
    current = (current - 1 + skins.length) % skins.length;
    update();
  });

  nextBtn.addEventListener("click", () => {
    current = (current + 1) % skins.length;
    update();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      current = i;
      update();
    });
  });

  update();
});
