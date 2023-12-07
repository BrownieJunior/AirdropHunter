document.addEventListener("DOMContentLoaded", function () {
  var isButtonDisabled = false;

  function disableButtonForOneSecond() {
    isButtonDisabled = true;
    setTimeout(function () {
      isButtonDisabled = false;
    }, 1500);
  }

  var showMoreButtons = document.querySelectorAll(".show__more-btn");
  var showLessButtons = document.querySelectorAll(".show__less-btn");

  showMoreButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (isButtonDisabled) {
        return;
      }

      disableButtonForOneSecond();

      var dataBar = button.getAttribute("data-bar");
      var carousel1 = document.querySelector(".carousel1");
      var carousel2 = document.querySelector(".carousel2");

      carousel2.classList.add("show2");
      carousel2.classList.remove("hide");
      carousel1.classList.add("hide");
      carousel1.classList.remove("show1");

      var carouselItem = document.querySelector(
        '.carousel-item[data-slide="' + dataBar + '"]'
      );
      carouselItem.classList.add("active");
      setTimeout(function () {
        var carouselBarItem = document.querySelector(
          '.carousel-item[data-slide-bar="' + dataBar + '"]'
        );
        carouselBarItem.classList.remove("active");
      }, 1000);
    });
  });

  showLessButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (isButtonDisabled) {
        return;
      }

      disableButtonForOneSecond();

      var dataNews = button.getAttribute("data-news");
      var carousel1 = document.querySelector(".carousel1");
      var carousel2 = document.querySelector(".carousel2");

      carousel2.classList.add("hide");
      carousel2.classList.remove("show2");
      carousel1.classList.add("show1");
      carousel1.classList.remove("hide");

      var carouselBarItem = document.querySelector(
        '.carousel-item[data-slide-bar="' + dataNews + '"]'
      );
      carouselBarItem.classList.add("active");

      setTimeout(function () {
        var carouselItem = document.querySelector(
          '.carousel-item[data-slide="' + dataNews + '"]'
        );
        carouselItem.classList.remove("active");
      }, 1500);
    });
  });
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

var slides = document.querySelectorAll(".swiper-slide");
var cards = document.querySelectorAll(".card");

slides.forEach(function (slide) {
  slide.addEventListener("click", function () {
    var projectIcon = slide.getAttribute("data-project-icon");
    var matchingCard = document.querySelector(
      '.card[data-project="' + projectIcon + '"]'
    );

    if (matchingCard) {
      matchingCard.classList.add("highlight");
      setTimeout(function () {
        matchingCard.classList.remove("highlight");
      }, 2000);
    }
  });
});
