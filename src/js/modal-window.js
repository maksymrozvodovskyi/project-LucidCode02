const modal = document.querySelector("#modal");
const closeModalBtn = document.querySelector(".modal-btn-close");
const backdrop = document.querySelector("#modal");
const body = document.body;

export function openModal() {
  modal.classList.add("show");
  body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("show");
  body.style.overflow = "";
}

closeModalBtn.addEventListener("click", closeModal);

backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
