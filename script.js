// sticky navbar

// youtube video
document.getElementById("play-btn").addEventListener("click", () => {
  const frame = getElementById("frame2");
  const videoUrl =
    "https://www.youtube.com/embed/OTJX8yjiIMs?si=orfXw_BnaZoVDdI-";
  frame.src = videoUrl;
  frame.style.display = "block";
  // document.getElementById("play-btn").style.display = "none";
});
// ham close and open
const coutBtn = document.querySelector(".cout-icon-width");
coutBtn.addEventListener("click", () => {
  const sideNav = document.querySelector(".ham-overlay");
  sideNav.classList.remove("open-nav");
});
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  const sideNav = document.querySelector(".ham-overlay");
  sideNav.classList.add("open-nav");
});
// counter
const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('data');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});


