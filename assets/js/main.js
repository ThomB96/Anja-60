
(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  // scrollTop.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

})();

//Timers voor het aftellen van de opdracthen
document.addEventListener('DOMContentLoaded', function () {
  // Functie om afteltimer in te stellen
  function setCountdown(elementId, imgId, btnId, targetDate) {
    const countDownDate = new Date(targetDate).getTime();
    const timerElement = document.getElementById(elementId);
    const imgElement = document.getElementById(imgId);
    const imgStyle = document.getElementById(imgId).style;
    const btnStyle = document.getElementById(btnId).style;

    const updateTimer = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(updateTimer);
        timerElement.innerHTML = "";
        imgElement.classList.remove("hidden");
        imgStyle.setProperty('display', 'hidden')
        btnStyle.removeProperty('display')
      } else {
        timerElement.innerHTML = `Beschikbaar in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        imgStyle.setProperty('opacity', '1%')
        btnStyle.setProperty('display', 'none')
      }
    }, 1000);
  }

  // Timer instellen voor elke opdracht
  setCountdown('timer1', 'img1', 'btn_1', '2024-11-11T09:00:00');
  setCountdown('timer2', 'img2', 'btn_2', '2024-11-18T09:00:00');
  setCountdown('timer3', 'img3', 'btn_3', '2024-11-25T09:00:00');
  setCountdown('timer4', 'img4', 'btn_4', '2024-12-02T09:00:00');
  setCountdown('timer5', 'img5', 'btn_5', '2024-12-09T09:00:00');
  setCountdown('timer6', 'img6', 'btn_6', '2024-12-16T09:00:00');
});

function clikToExpandMainImage() {
  const image = document.getElementById('mainImage');
  const imageStyle = image.style();

  imageStyle.setProperty('Scale', '2.0')
}