const btnTrailer = document.querySelector(".btn-trailer");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const videoLink = "https://www.youtube.com/embed/Cb4WV4aXBpk";

function alternarModal() {
  modal.classList.toggle("open");
}

btnTrailer.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", videoLink);
});

btnCloseModal.addEventListener("click", () => {
  alternarModal();
  video.setAttribute("src", "");
});
