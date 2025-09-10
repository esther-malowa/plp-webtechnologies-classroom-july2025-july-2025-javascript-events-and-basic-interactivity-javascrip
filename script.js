
//Event Handling
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

messageBtn.addEventListener("click", () => {
  message.textContent = " You clicked the button!";
});

//  Interactive Elements 

// Light/Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const count = document.getElementById("count");
let counterValue = 0;

increment.addEventListener("click", () => {
  counterValue++;
  count.textContent = counterValue;
});

decrement.addEventListener("click", () => {
  if (counterValue > 0) {
    counterValue--;
    count.textContent = counterValue;
  }
});

// Collapsible FAQ
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display =
    faqAnswer.style.display === "block" ? "none" : "block";
});

//  Form Validation 
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  let valid = true;

  // Reset errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("formSuccess").textContent = "";

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").textContent =
      "Name must be at least 2 characters.";
    valid = false;
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email.";
    valid = false;
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }

  // Success message
  if (valid) {
    document.getElementById("formSuccess").textContent =
      " Form submitted successfully!";
    form.reset();
  }

// Part 2: Functions with Parameters


// A reusable function with parameters & return value
function calculateArea(width, height) {
  return width * height;
}

// Demonstrating local vs global scope
const globalMessage = "I am global!";

function scopeExample() {
  let localMessage = "I am local!";
  console.log(globalMessage); 
  console.log(localMessage);  
}

scopeExample(); 
// console.log(localMessage); 

// Using function when button clicked
document.getElementById("calcBtn").addEventListener("click", () => {
  const result = calculateArea(5, 3);
  document.getElementById("calcResult").textContent = 
    `Area: ${result}`;
});


// Part 3: JS Triggering CSS Animations

const jsBox = document.getElementById("jsBox");
const animateBtn = document.getElementById("animateBtn");

function triggerAnimation(element, className) {
  // Remove class if already applied to restart animation
  element.classList.remove(className);
  void element.offsetWidth; // Trick to reflow DOM
  element.classList.add(className);
}

animateBtn.addEventListener("click", () => {
  triggerAnimation(jsBox, "animate");

});
});