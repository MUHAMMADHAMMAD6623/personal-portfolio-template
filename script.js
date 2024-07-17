document.addEventListener("DOMContentLoaded", () => {
  // variables
  const hamburgerIcon = document.querySelector(".menu");
  const rightSection = document.querySelector(".right");
  const universe = document.querySelector('body')
  // Function for the hamburger menu
  function setInitialHeight() {
    if (window.innerWidth < 900) {
      rightSection.style.height = "0px";
    } else {
      rightSection.style.height = "auto";
    }
  }

  setInitialHeight();
  window.addEventListener("resize", setInitialHeight);
  // Function for the hamburger menu
  hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("menu-clicked");
    const sectionhiding = setTimeout(()=>{
      universe.classList.toggle('not-needed')
    },600)
    if (rightSection.style.height === "0px") {
      rightSection.style.height = "100vh";
    } else {
      rightSection.style.height = "0px";
    }
  });
  // JavaScript code for smooth scrolling on clicking the navbar links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  // Swiper js object
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
  // Js media query to set 1 column instead of 2 in devices having width less than 700px
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
