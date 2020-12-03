var slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let places = document.querySelectorAll('.places');
    console.log(places)
    for(i = 0; i < places.length; i++){
        places[i].style.display = "none";
    }

    slideIndex++;

    if(slideIndex > places.length){slideIndex = 1};
    places[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000);
}