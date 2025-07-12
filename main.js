// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
}); // Countdown Timer
function startCountdown() {
  const eventDate = new Date("July 15, 2026 08:00:00").getTime();
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;
    if (distance < 0) {
      clearInterval(timer);
      document.querySelector(".countdown-box").innerHTML =
        "<p class='text-lg text-white'>The event has started!</p>";
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").textContent = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").textContent = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").textContent = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").textContent = seconds
      .toString()
      .padStart(2, "0");
  }, 1000);
}
startCountdown();
// Rotating Banner
const bannerItems = document.querySelectorAll(".banner-item");
let currentBanner = 0;
function rotateBanner() {
  bannerItems.forEach((item, index) => {
    item.classList.remove("opacity-100");
    item.classList.add("opacity-0");
  });
  bannerItems[currentBanner].classList.remove("opacity-0");
  bannerItems[currentBanner].classList.add("opacity-100");
  currentBanner = (currentBanner + 1) % bannerItems.length;
}
setInterval(rotateBanner, 5000);
rotateBanner();
// Schedule Tabs
const tabs = document.querySelectorAll(".day-tab");
const contents = document.querySelectorAll(".day-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => {
      t.classList.remove("text-indigo-600", "border-indigo-600");
      t.classList.add("text-gray-500");
    });
    contents.forEach((content) => content.classList.add("hidden"));
    tab.classList.add("text-indigo-600", "border-indigo-600");
    tab.classList.remove("text-gray-500");
    document
      .getElementById(`${tab.id.replace("-tab", "")}-content`)
      .classList.remove("hidden");
  });
});
// Collapsible Schedule Sections
const collapsibleHeaders = document.querySelectorAll(".collapsible-header");
collapsibleHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector(".collapsible-icon");
    content.classList.toggle("open");
    icon.classList.toggle("rotate-180");
  });
});
// Registration Form Submission
const regForm = document.getElementById("regForm");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");
regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(regForm);
  const ticketType = formData.get("ticketType");
  toastMessage.textContent = `Successfully registered for ${ticketType}!`;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
  regForm.reset();
});
// Auto-select ticket type from pricing buttons
const registerButtons = document.querySelectorAll(".register-btn");
const ticketSelect = document.getElementById("ticketType");
registerButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const ticket = btn.getAttribute("data-ticket");
    ticketSelect.value = ticket;
    document
      .getElementById("registration-form")
      .scrollIntoView({ behavior: "smooth" });
  });
});
// Download Schedule Button
document.getElementById("downloadBtn").addEventListener("click", () => {
  window.open("/path-to-schedule.pdf", "_blank");
});
