window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});


topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll("nav li");
  menuItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, 100 * index);
  });
});


document.querySelector("form").addEventListener("submit", function (e) {
  const nom = document.getElementById("nom").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!nom || !email || !message) {
    e.preventDefault();
    alert("Merci de remplir tous les champs !");
  }
});