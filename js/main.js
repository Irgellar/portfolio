// burger menu
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger?.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
});

// close menu on link click (mobile)
document.querySelectorAll(".nav__link").forEach((a) => {
    a.addEventListener("click", () => nav.classList.remove("is-open"));
});

// reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("is-visible");
        });
    },
    { threshold: 0.12 }
);

revealEls.forEach((el) => io.observe(el));

// skills animation
const skillEls = document.querySelectorAll(".skill");
const skillsIO = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target;
            const percent = Number(el.dataset.percent || 0);
            const fill = el.querySelector(".skill__fill");
            if (fill) fill.style.width = `${Math.max(0, Math.min(100, percent))}%`;
            skillsIO.unobserve(el);
        });
    },
    { threshold: 0.35 }
);

skillEls.forEach((el) => skillsIO.observe(el));

// year
document.getElementById("year").textContent = String(new Date().getFullYear());
