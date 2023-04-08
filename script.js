var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.opacity = "1";
  setTimeout(showSlides, 5000);
}



$(document).ready(function() {
    $.ajax({
      url: "https://api.github.com/users/tunahankaya16/repos",
      headers: {
        "Authorization": "Token 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"
      },
      success: function(data) {
        console.log(data);
        // Proje verilerini slider'a aktar
      }
    });
  });

 
  
  sliderDiv.innerHTML =
    '<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">' +
    '<div class="carousel-inner">' +
    slides +
    "</div>" +
    '<button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">' +
    '<span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
    '<span class="visually-hidden">Previous</span>' +
    "</button>" +
    '<button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">' +
    '<span class="carousel-control-next-icon" aria-hidden="true"></span>' +
    '<span class="visually-hidden">Next</span>' +
    "</button>" +
    "</div>";
  
  var myCarousel = document.querySelector("#myCarousel");
  var carousel = new bootstrap.Carousel(myCarousel);
  

  
