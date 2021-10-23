var slideIndex = 0;

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1
  }    
  
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); // Change image every 4 seconds
};

showSlides();

function menuPage() {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");

  menu.addEventListener('click',() => {
    nav.classList.toggle("navActive")
    menu.classList.toggle('toggle');
  })
};

menuPage();

function scrollToLocation(){
  var locationHtmlEl = document.getElementsByClassName("ourLocation");
  window.scrollBy({
    top: 900,
    left:0,
    behavior: 'smooth'
  });
  
}






