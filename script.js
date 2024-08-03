document.addEventListener("DOMContentLoaded", () => {
  // Select the hamburger menu icon
  const hamburgerIcon = document.querySelector(".menu");
  // Select the right section of the navbar
  const rightSection = document.querySelector(".right");
  // Select the body element
  const universe = document.querySelector('body');

  // Function to set the initial height of the right section based on the window width
  function setInitialHeight() {
    if (window.innerWidth < 900) {
      // If the window width is less than 900px, set the right section height to 0px (hidden)
      rightSection.style.height = "0px";
    } else {
      // Otherwise, set the right section height to auto (default height)
      rightSection.style.height = "auto";
    }
  }

  // Call the function to set the initial height
  setInitialHeight();
  // Add an event listener to the window resize event to adjust the height dynamically
  window.addEventListener("resize", setInitialHeight);

  // Add an event listener to the hamburger menu icon for click events
  hamburgerIcon.addEventListener("click", () => {
    // Toggle the 'menu-clicked' class on the hamburger icon to animate the icon
    hamburgerIcon.classList.toggle("menu-clicked");
    // Toggle the 'not-needed' class on the body element to apply background color changes
    universe.classList.toggle('not-needed');
    // Check the current height of the right section and toggle between 0px and 100vh
    if (rightSection.style.height === "0px") {
      rightSection.style.height = "100vh"; // Show the right section
    } else {
      rightSection.style.height = "0px"; // Hide the right section
    }
  });

  // Smooth scrolling functionality for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Prevent the default anchor click behavior
      e.preventDefault();

      // Scroll to the section referenced by the anchor link smoothly
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Initialize Swiper.js for the testimonials section
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2, // Number of slides to show at once
    spaceBetween: 30, // Space between slides in pixels
    autoplay: {
      delay: 2500, // Delay between slide transitions in milliseconds
    },
    pagination: {
      el: ".swiper-pagination", // Pagination element
      clickable: true, // Make pagination bullets clickable
    },
  });

  // Function to adjust Swiper settings based on media query
  const jsmediaquery = () => {
    if (mediaquery.matches) {
      // If the media query matches (window width is less than 700px)
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1, // Show 1 slide at a time
        spaceBetween: 30, // Space between slides
        autoplay: {
          delay: 2500, // Delay between slide transitions
        },
        pagination: {
          el: ".swiper-pagination", // Pagination element
          clickable: true, // Make pagination bullets clickable
        },
      });
    } else {
      // If the media query does not match (window width is 700px or more)
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2, // Show 2 slides at a time
        spaceBetween: 30, // Space between slides
        autoplay: {
          delay: 2500, // Delay between slide transitions
        },
        pagination: {
          el: ".swiper-pagination", // Pagination element
          clickable: true, // Make pagination bullets clickable
        },
      });
    }
  };

  // Create a media query to check if the screen width is less than 700px
  const mediaquery = window.matchMedia("(max-width:700px)");
  // Call the jsmediaquery function to set initial Swiper settings
  jsmediaquery(mediaquery);
  // Add an event listener to the media query to adjust Swiper settings on screen width change
  mediaquery.addEventListener("change", jsmediaquery);
});
