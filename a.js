// ================= Back To Top =================
const btn = document.getElementById("backToTop");

// ================= Scroll Spy =================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-list li a");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  // ---- Back to Top button ----
  if (scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }

  // ---- ScrollSpy Menu ----
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 120; // ارتفاع هدر
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// ================= Back To Top Click =================
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
