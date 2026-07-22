document.getElementById("year").textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");
burger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  burger.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    burger.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  })
);

const items = Array.from(document.querySelectorAll(".acc-item"));
function setOpen(item, open) {
  const q = item.querySelector(".acc-q");
  const panel = item.querySelector(".acc-a");
  const mark = item.querySelector(".acc-mark");
  q.setAttribute("aria-expanded", String(open));
  panel.style.maxHeight = open ? panel.scrollHeight + "px" : null;
  mark.textContent = open ? "−" : "+";
}
items.forEach((item, i) => {
  item.querySelector(".acc-q").addEventListener("click", () => {
    const isOpen = item.querySelector(".acc-q").getAttribute("aria-expanded") === "true";
    items.forEach((o) => setOpen(o, false));
    if (!isOpen) setOpen(item, true);
  });
  if (i === 0) setOpen(item, true);
});
