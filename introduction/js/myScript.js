function myFunction() {
  const demo = document.getElementById("demo");
  if (demo) {
    demo.textContent = "Paragraph changed!";
  }
}

function setGreeting() {
  const hour = new Date().getHours();
  const banner = document.getElementById("greeting-banner");

  if (!banner) return;

  if (hour < 12) {
    banner.textContent = "Good morning! Welcome to Iza's profile ✨";
  } else if (hour < 18) {
    banner.textContent = "Goodfunction myFunction() {
  const demo = document.getElementById("demo");
  if (demo) {
    demo.textContent = "Paragraph changed!";
  }
}

function setGreeting() {
  const hour = new Date().getHours();
  const banner = document.getElementById("greeting-banner");

  if (!banner) return;

  if (hour < 12) {
    banner.textContent = "Good morning! Welcome to Iza's profile ✨";
  } else if (hour < 18) {
    banner.textContent = "Good afternoon! Welcome to Iza's profile ✨";
  } else {
    banner.textContent = "Good evening! Welcome to Iza's profile ✨";
  }
}

function sayHello() {
  alert("Hi there! Thanks for visiting Iza's profile page! 🐱✨");
}

function togglePhoto() {
  const photo = document.getElementById("profile-photo");

  if (!photo) return;

  const isHidden = window.getComputedStyle(photo).display === "none";
  photo.style.display = isHidden ? "block" : "none";
}

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

setGreeting(); afternoon! Welcome to Iza's profile ✨";
  } else {
    banner.textContent = "Good evening! Welcome to Iza's profile ✨";
  }
}

function sayHello() {
  alert("Hi there! Thanks for visiting Iza's profile page! 🐱✨");
}

function togglePhoto() {
  const photo = document.getElementById("profile-photo");

  if (!photo) return;

  if (photo.style.display === "none") {
    photo.style.display = "block";
  } else {
    photo.style.display = "none";
  }
}

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

setGreeting();