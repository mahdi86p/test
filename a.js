// ================= دکمه برگشت به بالا =================
const btn = document.getElementById("backToTop"); // دکمه بازگشت به بالا
const menuToggle = document.getElementById("toggle"); // آیکون منوی موبایل

// ================= منو =================
const sections = document.querySelectorAll("section[id]"); // تمام بخش‌هایی که id دارند
const navLinks = document.querySelectorAll(".nav-list li a"); // لینک‌های منو
const navList = document.querySelectorAll(".nav-list"); // لیست منو

// وقتی صفحه اسکرول می‌شود
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset; // مقدار اسکرول عمودی

  // ---- برگشت به بالا ----
  if (scrollY > 300) {
    btn.classList.add("show"); // نمایش دکمه وقتی بیشتر از 300 پیکسل اسکرول شد
  } else {
    btn.classList.remove("show"); // مخفی کردن دکمه وقتی کمتر از 300 پیکسل
  }

  // ---- اسکرول بین اجزای سایت ----
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight; // ارتفاع بخش
    const sectionTop = section.offsetTop - 120; // فاصله بخش از بالا (منهای ارتفاع هدر)
    const sectionId = section.getAttribute("id"); // گرفتن id بخش

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active"); // حذف کلاس active از همه لینک‌ها

        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active"); // اضافه کردن active به لینک بخش فعال
        }
      });
    }
  });
});

// ================= برگشت به بالا =================
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0, // رفتن به بالای صفحه
    behavior: "smooth", // اسکرول نرم
  });
});

// ================= منوی موبایل =================
menuToggle.addEventListener("click", () => {
  navList[0].style.display == "flex" // بررسی وضعیت نمایش منو
    ? (navList[0].style.display = "none") // اگر باز است، ببند
    : (navList[0].style.display = "flex"); // اگر بسته است، باز کن
});

// وقتی اندازه صفحه تغییر کرد
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    navList[0].style.display = "flex"; // نمایش منو به صورت دائم در دسکتاپ
  }
});

// ================= اسلایدر =================
const slides = document.querySelectorAll(".hero-slide"); // تمام اسلایدها
const dots = document.querySelectorAll(".hero-dot"); // دکمه‌های کنترل اسلایدر

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = dot.getAttribute("data-slide"); // گرفتن شماره اسلاید از دکمه

    slides.forEach((slide) => slide.classList.remove("active")); // حذف active از همه اسلایدها
    dots.forEach((d) => d.classList.remove("active")); // حذف active از همه دکمه‌ها

    slides[index].classList.add("active"); // فعال کردن اسلاید انتخاب شده
    dot.classList.add("active"); // فعال کردن دکمه مربوط به اسلاید
  });
});
