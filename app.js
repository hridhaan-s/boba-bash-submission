const view = document.getElementById("view");
const big = view.querySelector("img");

document.querySelectorAll(".shot").forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    big.src = btn.dataset.full;
    big.alt = img.alt;
    view.showModal();
  });
});

view.addEventListener("click", () => view.close());

view.addEventListener("close", () => {
  big.removeAttribute("src");
});
