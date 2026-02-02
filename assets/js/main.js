// ============sidebar-active===========
$(function () {
  $(".sidebar a").click(function () {
    $(".sidebar a").removeClass("active");
    $(this).addClass("active");
  });
});

// ============Profile-dropdown===========

const profile = document.querySelector(".profile_div");
const dropdown = document.querySelector(".user-dropdown");

profile.addEventListener("click", (e) => {
  e.stopPropagation();
  profile.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!profile.contains(e.target)) {
    profile.classList.remove("active");
  }
});

// ==========sidebar toggle=========

const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.querySelector(".sidebar");
toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

const mobileToggle = document.getElementById("mobileToggle");
const overlay = document.getElementById("overlay");

mobileToggle.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }
});

// ====Calender section===========

document.addEventListener("DOMContentLoaded", function () {
  const calendar = new FullCalendar.Calendar(
    document.getElementById("calendar"),
    {
      initialView: "dayGridMonth",
      initialDate: "2026-01-15",
      height: "auto",

      headerToolbar: {
        left: "prev",
        center: "title",
        right: "next",
      },

      events: [
        {
          title: "Agile & Scrum Fundamentals...",
          start: "2026-01-15T10:00:00",
          end: "2026-01-15T12:00:00",
        },
      ],

      eventDidMount(info) {
        tippy(info.el, {
          allowHTML: true,
          animation: "scale",
          placement: "top",
          theme: "light",
          content: `
            <div class="fc-tooltip">
              <h4>${info.event.title}</h4>
              <p>January 15 2026 · 10:00 – 12:00 PM</p>
            </div>
          `,
        });
      },
    },
  );

  calendar.render();
});

// ========Accordion news feed=========
const tabs = document.querySelectorAll(".nf_tab");
const tabItems = document.querySelectorAll(".nf_tab_item");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("nf_tab_active"));
    tabItems.forEach((item) => item.classList.remove("nf_active"));

    tab.classList.add("nf_tab_active");
    tabItems[index].classList.add("nf_active");
  });
});

// ======Resource hub accordion=====

const tabsResource = document.querySelectorAll(".departments li");
const panels = document.querySelectorAll(".tab-panel");

tabsResource.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabsResource.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const target = tab.getAttribute("data-tab");
    panels.forEach((panel) => {
      if (panel.getAttribute("data-panel") === target) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  });
});

// =======photo gallery carousel======

new Swiper(".gallerySwiper", {
  slidesPerView: 4,
  spaceBetween: 18,
  loop: true,

  speed: 1200,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  freeMode: false,

  pagination: {
    el: ".gallery_form .swiper-pagination",
    clickable: true,
  },

  watchSlidesProgress: false,
  watchSlidesVisibility: false,

  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 3 },
  },
});

// =====scroll-top=======

const scrollBtn = document.querySelector(".scroll_top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
