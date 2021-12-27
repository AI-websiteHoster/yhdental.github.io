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
  window.scrollTo({
    top: 700,
    left:0,
    behavior: 'smooth'
  });
}

function scrollToTeam(){
  var locationHtmlEl = document.getElementsByClassName("ourLocation");
  window.scrollTo({
    top: 1300,
    left:0,
    behavior: 'smooth'
  });
}

function scrollToServices(){
  var locationHtmlEl = document.getElementsByClassName("ourLocation");
  window.scrollTo({
    top: 1800,
    left:0,
    behavior: 'smooth'
  });
}

function revealImage(){
  const servicesCard = document.querySelectorAll(".our-services-card");
  var servicesCardContent = document.querySelectorAll(".our-services-card-content");
  var servicesCardImage = document.querySelectorAll(".our-services-image-containerHidden");

  for(let i=0; i<servicesCard.length; i++){
    servicesCard[i].addEventListener('click',()=> {
      servicesCardContent[i].classList.toggle('our-services-card-noContent')
      servicesCardImage[i].classList.toggle('our-services-image-containerHidden')
      servicesCardImage[i].classList.toggle('our-services-image-container')
    })
  }
}

revealImage()







