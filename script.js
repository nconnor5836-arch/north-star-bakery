// North Star Bakery - Touchstone 4

// Arrays used to manage website data
const bakeryProducts = [
  "Signature Loaf",
  "Pastries",
  "Celebration Cake"
];

const favoriteMessages = [
  "Great choice!",
  "Thanks for choosing a favorite!",
  "Your favorite has been saved!"
];

// Save the customer's favorite product
function saveFavorite() {
  const productSelect = document.getElementById("favoriteProduct");
  const favoriteMessage = document.getElementById("favoriteMessage");

  if (!productSelect || !favoriteMessage) {
    return;
  }

  const selectedProduct = productSelect.value;

  if (selectedProduct === "") {
    favoriteMessage.textContent = "Please select a product first.";
    return;
  }

  localStorage.setItem("favoriteProduct", selectedProduct);

  favoriteMessage.textContent =
    "Favorite saved: " + selectedProduct;
}

// Load the saved favorite when the page opens
function loadFavorite() {
  const productSelect = document.getElementById("favoriteProduct");
  const favoriteMessage = document.getElementById("favoriteMessage");

  if (!productSelect || !favoriteMessage) {
    return;
  }

  const savedProduct = localStorage.getItem("favoriteProduct");

  if (savedProduct) {
    productSelect.value = savedProduct;
    favoriteMessage.textContent =
      "Saved favorite: " + savedProduct;
  }
}

// Validate the contact form
function validateContactForm(event) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");

  if (!name || !email || !nameError || !emailError) {
    return;
  }

  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";

  // Validation check 1: Name
  if (name.value.trim().length < 2) {
    nameError.textContent =
      "Please enter a name with at least 2 characters.";
    isValid = false;
  }

  // Validation check 2: Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email.value.trim())) {
    emailError.textContent =
      "Please enter a valid email address.";
    isValid = false;
  }

  // Prevent submission if validation fails
  if (!isValid) {
    event.preventDefault();
  }
}

// Set up the website features
function initializeWebsite() {
  loadFavorite();

  const favoriteButton = document.getElementById("saveFavorite");

  if (favoriteButton) {
    favoriteButton.addEventListener("click", saveFavorite);
  }

  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", validateContactForm);
  }
}

// Run after the page has loaded
document.addEventListener("DOMContentLoaded", initializeWebsite);
