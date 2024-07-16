document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.querySelector(".menu");
  const rightSection = document.querySelector(".right");

  function setInitialHeight() {
    if (window.innerWidth < 900) {
      rightSection.style.height = "0px";
    } else {
      rightSection.style.height = "auto";
    }
  }

  setInitialHeight();
  window.addEventListener("resize", setInitialHeight);

  hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("menu-clicked");
    if (rightSection.style.height === "0px") {
      rightSection.style.height = "100vh";
    } else {
      rightSection.style.height = "0px";
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const jsmediaquery = () => {
    if (mediaquery.matches) {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else {
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  };
  const mediaquery = window.matchMedia("(max-width:700px)");
  jsmediaquery(mediaquery);
  mediaquery.addEventListener("change", jsmediaquery);
});
