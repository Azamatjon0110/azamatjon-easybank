var elSiteHeaderBtn = document.querySelector(".hero-btn");
var elHeader = document.querySelector(".site-header");

elSiteHeaderBtn.addEventListener("click",function(){
  elHeader.classList.toggle("site-header--open");
});