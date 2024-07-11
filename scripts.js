// Mobile menu display
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});

// Reviews slider
let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');

    function changeSlide(direction) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

// Booking Form function
document.addEventListener("DOMContentLoaded", function() {
  const bookButton = document.getElementById("book-table-btn");
  const reservationForm = document.getElementById("booking-table");

  bookButton.addEventListener("click", () => {
    reservationForm.style.display = "block";
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  var modal = document.getElementById("booking-table");

  // Get all buttons that open the modal
  var buttons = document.querySelectorAll(".book-table");

  // Get the <span> element that closes the modal
  var span = document.querySelector(".close");

  // Check if modal exists
  if (modal) {
    // When the user clicks any button with class "book-table", open the modal
    buttons.forEach(button => {
      button.onclick = function() {
        modal.style.display = "block";
      };
    });

    // When the user clicks on <span> (x), close the modal
    if (span) {
      span.onclick = function() {
        modal.style.display = "none";
      };
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
});




