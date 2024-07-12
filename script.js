document.addEventListener('DOMContentLoaded', () => {
   const hamburgerIcon = document.querySelector('.menu');
   const rightSection = document.querySelector('.right');
 
   function setInitialHeight() {
     if (window.innerWidth < 900) {
       rightSection.style.height = '0px';
     } else {
       rightSection.style.height = 'auto';
     }
   }
 
   setInitialHeight();
   window.addEventListener('resize', setInitialHeight);
 
   hamburgerIcon.addEventListener('click', () => {
     hamburgerIcon.classList.toggle('menu-clicked');
     if (rightSection.style.height === '0px') {
       rightSection.style.height = '100vh';
     } else {
       rightSection.style.height = '0px';
     }
   });
 });
 