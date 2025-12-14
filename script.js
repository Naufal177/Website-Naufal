// Toggle menu untuk mobile
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Form WhatsApp
document.getElementById("whatsapp-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const phone = "6281234567890"; // Ganti dengan nomor WhatsApp Anda
    const url = `https://wa.me/${phone}?text=Halo, saya ${name}. ${message}`;
    window.open(url, "_blank");
});

// Dark Mode
const darkModeBtn = document.querySelector(".dark-mode-btn");
darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

