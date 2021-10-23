function menuPage() {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav-links");
  
    menu.addEventListener('click',() => {
      nav.classList.toggle("navActive")
      menu.classList.toggle('toggle');
    })
  };
  
  

  //our-services-card use event listener on click change class of our-services-content to display:none;
  //then use it again to toggle the before-after container
  //the image container must be have a position:absolute property to not mess up positioning
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



  menuPage();
  revealImage();