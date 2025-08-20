// Cookie Banner
const cookieBanner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-cookies");

if (!localStorage.getItem("cookiesAccepted")) {
  cookieBanner.classList.remove("hidden");
}

acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookiesAccepted", "true");
  cookieBanner.classList.add("hidden");
});

// Package Selection
const packageButtons = document.querySelectorAll(".select-package");
const packageField = document.getElementById("packageField");

packageButtons.forEach(button => {
  button.addEventListener("click", () => {
    const chosen = button.dataset.package;
    packageField.value = chosen;
    document.getElementById("upload").scrollIntoView({ behavior: "smooth" });
  });
});

// Upload Form Confirmation
const uploadForm = document.getElementById("uploadForm");
const confirmationMsg = document.getElementById("confirmation-msg");

uploadForm.addEventListener("submit", (e) => {
  e.preventDefault();
  confirmationMsg.classList.remove("hidden");
  uploadForm.reset();
  packageField.value = "";
});
