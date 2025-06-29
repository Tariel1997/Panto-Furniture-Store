const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

for (let btn of infoBtns) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    // Hide all other hints
    for (let hint of infoHints) {
      hint.classList.add("none");
    }

    // Show current hint
    this.parentNode.querySelector(".info-hint").classList.toggle("none");
  });
}



document.addEventListener("click", function () {
    for (let hint of infoHints) {
      hint.classList.add("none");
    }
  });



for (let hint of infoHints) {
    hint.addEventListener('click', (e) => e.stopPropagation())
}

// Swiper slider

const swiper = new Swiper(".swiper", {
  loop: true,
  freeMode: true,


  slidesPerView: 1,
  spaceBetween: 42,

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1230: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});

// Tabs

const tabBtns = document.querySelectorAll('[data-tab]');

for (let btn of tabBtns) {
  btn.addEventListener('click', function () {

    // Removing active class from all buttons
    for (let btn of tabBtns) {
      btn.classList.remove('tab-controls__btn--active');
    }

    // Adding active class to the clicked button
    this.classList.add('tab-controls__btn--active');

    // Hiding all tab contents and showing the one that matches the clicked button
    const tabsProducts = document.querySelectorAll('[data-tab-value]');
    for (let product of tabsProducts) {

      //Checking if all products are loaded
      if (this.dataset.tab === 'all') {
        product.classList.remove('none');
      } else {
        if (product.dataset.tabValue === this.dataset.tab) {
          product.classList.remove('none');
        } else {
          product.classList.add('none');
        }
      }
    }

    // Updating Swiper to reflect the changes in the DOM
    swiper.update()
  })
}


//Mobile Nav

const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn')
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn')
const mobileNav = document.querySelector('#mobile-nav')

mobileNavOpenBtn.onclick = function () {
  mobileNav.classList.add("mobile-nav-wrapper--open");
}

mobileNavCloseBtn.onclick = function () {
  mobileNav.classList.remove("mobile-nav-wrapper--open");
}