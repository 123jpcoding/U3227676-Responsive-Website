//JavaScript for toggle menu//
    var navLinks = document.getElementById("navLinks");
    function showMenu() {
        navLinks.style.right = "0";
    }
    function hideMenu() {
        navLinks.style.right = "-200px";
    }

//Slideshow//
const mySlider = document.querySelectorAll('.mySlider'),
dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoSlide() {
    counter += 1;
    slidefun(counter);
}

function plusSlides(n) {
    counter += n;
    slidefun(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer(){
clearInterval(timer);
timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
    let i;
    for(i = 0;i<mySlider.length;i++) {
        myslide[i].style.display = "none";
    }
    for(i = 0;1<dot.length;i++) {
        dot[i].classList.remove('active');
    }
    if(n > mySlider.length) {
        counter = 1;
    }
    if(n < 1) {
        counter = mySlide.length;
    }
    mySlider[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}