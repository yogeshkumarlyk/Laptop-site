
let xhr2 = new XMLHttpRequest();
xhr2.open("GET","/carousel.json");
xhr2.send();
list3=[];


xhr2.onload = () => {
  cardata = JSON.parse(xhr2.responseText).carousel;

  if(cardata) {
      for(const {pic} of cardata) {
        const data = car.appendChild(document.createElement('div'));
        data.className='carousel-data';
        data.innerHTML=(`<img class="pic2" src="${pic}">`);
        list3.push(data);
      }
  }
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("carousel-data");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  } 
}
