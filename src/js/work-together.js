import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { openModal } from "./modal-window";

const form = document.querySelector("#contactForm");

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

const commentInput = document.querySelector("#comments");

commentInput.style.whiteSpace = "nowrap";
commentInput.style.overflow = "hidden";
commentInput.style.textOverflow = "ellipsis";