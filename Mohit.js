window.addEventListener("load", myLoad)
const Preloader = document.querySelector(".preloader");

function myLoad(){
  console.log("preloader is called")
  if (Preloader) {
    setTimeout(() => {
      Preloader.style.display = "none";
    }, 1000);
  }
}