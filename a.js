// ================= Back To Top =================
const btn = document.getElementById("backToTop");
const menuToggle = document.getElementById("toggle");

// ================= Scroll Spy =================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-list li a");

const navList = document.querySelectorAll(".nav-list");

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

menuToggle.addEventListener("click", () => {
  navList[0].style.display == "flex"
    ? (navList[0].style.display = "none")
    : (navList[0].style.display = "flex");
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    // navList.style.display = "flex";
    navList[0].style.display = "flex";
  }
});

// slider

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".hero-dot");

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = dot.getAttribute("data-slide");

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((d) => d.classList.remove("active"));

    slides[index].classList.add("active");
    dot.classList.add("active");
  });
});
