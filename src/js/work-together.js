import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("#contactForm");
const modal = document.querySelector("#modal");
const closeModalBtn = document.querySelector(".modal-btn-close");
const backdrop = document.querySelector("#modal");
const body = document.body;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const emailInput = document.querySelector("#email");
  const commentInput = document.querySelector("#comments");
  const email = emailInput.value.trim();
  const comment = commentInput.value.trim();

  const isEmailValid = emailInput.checkValidity();

  if (!isEmailValid) {
    iziToast.show({
      message: "Please enter a valid email address.",
      messageColor: "#fafafa",
      backgroundColor: "#ef4040",
      position: "topRight",
    });
    return;
  }

  try {
    const response = await fetch("https://portfolio-js.b.goit.study/api/requests", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, comment }),
    });

    if (!response.ok) {
      throw new Error("Failed to send form data");
    }

    openModal();
    form.reset();
  } catch (error) {
    iziToast.show({
      message: "Something went wrong. Please try again later.",
      messageColor: "#fafafa",
      backgroundColor: "#ef4040",
      position: "topRight",
    });
  }
});

// Modal
function openModal() {
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

// Apply text truncation effect for comments input (visually)
const commentInput = document.querySelector("#comments");
commentInput.style.whiteSpace = "nowrap";
commentInput.style.overflow = "hidden";
commentInput.style.textOverflow = "ellipsis";
