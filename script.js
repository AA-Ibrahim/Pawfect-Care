const testimonials = document.querySelectorAll(".testimonial");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let currentIndex = 0;

// Script for the deals section
document.querySelector(".deal-btn").addEventListener("click", () => {
    alert("Promo code PAWFECT20 applied. Happy shopping!");
  });
  
// Function to show the current testimonial
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    if (i === index) {
      testimonial.classList.add("active");
    } else {
      testimonial.classList.remove("active");
    }
  });
}

// Function to go to the next testimonial
function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length; // Loop back to start
  showTestimonial(currentIndex);
}

// Event listeners for manual navigation
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
  showTestimonial(currentIndex);
});

nextBtn.addEventListener("click", () => {
  nextTestimonial();
});

// Auto-rotate testimonials every 3 second
let autoRotate = setInterval(nextTestimonial, 3000);

// Pause auto-rotation on button hover
const carouselControls = document.querySelector(".carousel-controls");
carouselControls.addEventListener("mouseenter", () => {
  clearInterval(autoRotate);
});

carouselControls.addEventListener("mouseleave", () => {
  autoRotate = setInterval(nextTestimonial, 3000);
});

// Initialize the first testimonial as active
showTestimonial(currentIndex);
