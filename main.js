window.onload = function(){
    var slideIndex=1;
    showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex+=n);
}

function currentSlides(n){
    showSlides(slideIndex=n)
}

function showSlides(n){
    var i;
    var slides=document.getElementsByClassName("mySlide");
    var dots=document.getElementsByClassName("dot")
    if (n>slides.length){slideIndex=1}
    if (n<1){slideIndex=slides.length}
    for (i=0;i<slides.length; i++)
        slides[i].getElementsByClassName.display="none"

    for (i=0, i<dots.length; i++;)
        dot[i].className=dot[i].className.replace("active","");

    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className="active";}
}