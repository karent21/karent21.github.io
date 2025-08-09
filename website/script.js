function toggleBox() {
  const box = document.getElementById("contactBox");
  if (box.style.display === "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }
}


window.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector(".profile-img");

  if (img) {
    img.classList.add("bounce");

    setTimeout(() => {
      img.classList.remove("bounce");
    }, 5000);
  }
});




