var slideIndex = 0;
var slideTimer;
showSlides();


function showSlides(){
    let i;
    let places = document.querySelectorAll('.places');
    let cityNames = document.querySelectorAll('a')
    slideTimer = setTimeout(showSlides, 5000);

    for(i = 0; i < places.length; i++){
        places[i].style.display = "none";
        cityNames[i].className = ' ';
    }

    slideIndex++;

    if(slideIndex > places.length){slideIndex = 1};
    places[slideIndex-1].style.display = "block";
    cityNames[slideIndex-1].className = "active";

    slideTimer;
}

function showLocation(n){
    showSlides(slideIndex = n);
    clearInterval(slideTimer);
}
