// navbar sticky
// document.addEventListener("scroll", () => {
//   const navbar1 = document.querySelector(".navbar1");
//   const navbar2 = document.querySelector(".banner-header");

//   let scrollPosition = window.scrollY;
//   console.log(scrollPosition);
//   // Check the scroll position
//   if (scrollPosition > 100) {
//     navbar1.style.transform = "translateY(-100%)";

//     // Show the second navbar
//     navbar2.style.top = "100px";
//   } else {
//     // Show the first navbar
//     navbar1.style.transform = "translateY(0)";

//     // Hide the second navbar
//     navbar2.style.top = "-100px";
//   }
// });

// const mainNavbar = document.querySelector(".navbar1");
// const stickyNavbar = document.querySelector(".banner-header");

// // Scroll event listener
// window.addEventListner("scroll", () => {
//   // Check scroll position
//   if (window.scrollY > 100) {
//     // When scrolled 100px or more
//     mainNavbar.style.display = "none"; // Hide main navbar
//     stickyNavbar.classList.add("show"); // Show sticky navbar
//   } else {
//     mainNavbar.style.display = "block"; // Show main navbar
//     stickyNavbar.classList.remove("show"); // Hide sticky navbar
//   }
// });
// youtube video
document.getElementById("play-btn").addEventListener("click", () => {
  const frame = getElementById("frame2");
  const videoUrl =
    "https://www.youtube.com/embed/OTJX8yjiIMs?si=orfXw_BnaZoVDdI-";
  frame.src = videoUrl;
  frame.style.display = "block";
  // document.getElementById("play-btn").style.display = "none";
});
