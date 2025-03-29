import { data } from "/scripts/data.js";
const RspBtn = document.querySelector(".rsp-btn-cnt");
const CompanyTitle = document.querySelectorAll(".cmp-name");
const Button = document.querySelectorAll("ul li button");
const RspList = document.querySelectorAll(".rsp-menu .rsp-list");
const hiddenElements = document.querySelectorAll(".hidden");
const Navbar = document.querySelector(".navbar");
const Icons = document.querySelectorAll(".icon");
let angle = 0;
CompanyTitle.forEach((el) => {
  el.textContent = data[0].companyName;
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    Navbar.classList.add("active-nav");
  } else {
    Navbar.classList.remove("active-nav");
  }
});
RspBtn.onclick = () => {
  RspBtn.parentElement.parentElement.classList.toggle("active-menu");
};
window.addEventListener("resize", () => {
  RspBtn.parentElement.parentElement.classList.remove("active-menu");
});
Button.forEach((AllBtn) => {
  AllBtn.onclick = () => {
    AllBtn.classList.add("active-btn");
    setTimeout(() => {
      AllBtn.classList.remove("active-btn");
    }, 1100);
  };
});
RspList.forEach((AllList) => {
  AllList.onclick = () => {
    RspBtn.parentElement.parentElement.classList.remove("active-menu");
  };
});

function Observer(ElObserve, classes) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add(classes);
      } else {
        entry.target.classList.remove(classes);
      }
    });
  });
  ElObserve.forEach((el) => observer.observe(el));
}
Observer(hiddenElements, "show");
if(!navigator.onLine) {
  Icons.forEach((el) => {
    el.style.display = "none";
  })
}else{
  Icons.forEach((el)=>{
  el.parentElement.parentElement.classList.add("link-icon-spacing");
  })
}
setInterval(() => {
  if (angle == 360) {
    angle = 0;
  } else {
    angle++;
  }
  document.body.style.setProperty("--angle", angle + "deg");
});
