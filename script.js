document.getElementById("year").textContent = new Date().getFullYear();

const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  })
);

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

document.querySelectorAll(".acc-q").forEach((q) => {
  q.addEventListener("click", () => {
    const item = q.parentElement;
    const panel = item.querySelector(".acc-a");
    const open = q.getAttribute("aria-expanded") === "true";
    document.querySelectorAll(".acc-q").forEach((o) => {
      o.setAttribute("aria-expanded", "false");
      o.parentElement.querySelector(".acc-a").style.maxHeight = null;
    });
    if (!open) {
      q.setAttribute("aria-expanded", "true");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
