// Dom elements
let navbar = document.getElementById("nav");
let btn = document.getElementById("btnHamDiv");
let imagesnode = document.getElementsByClassName("navbutton");
let images = Array.from(imagesnode);
let ham = document.getElementById("btn");

// Navbar

btn.addEventListener("click", function () {
    navbar.classList.toggle("navopen");
    imagesfunction ();
    navopen ();
});
    
function imagesfunction () {
    if (images[0].classList.contains("navbutton")){
    images.forEach(el => el.classList.remove("navbutton"));
    images.forEach(el => el.classList.add("imagesopen"));
} else {
    images.forEach(el => el.classList.add("navbutton"));
    images.forEach(el => el.classList.remove("imagesopen"));
}
};

function navopen () {
     if (navbar.classList.contains("navopen")){
        ham.src="close.png";
    } else {
    ham.src="ham.png";
}};

// mouse scroll & grid show up

let mouse = document.getElementById("mouse");
let grid = document.getElementById("grid");
let projects = document.getElementById("projects");
let projectContent = document.getElementById("main-3-bubble");
let projectButton = document.getElementById("project-button");

window.addEventListener("scroll", function(){
scrollmouse();
gridfunction();
projectfunction();
});

function scrollmouse (){
    if (window.pageYOffset > 170){
 mouse.classList.remove("mouse-shown");   
 mouse.classList.add("mouse-hide");    
} else if (window.pageYOffset < 170){
    mouse.classList.remove("mouse-hide");
    mouse.classList.add("mouse-shown"); 
}};

function gridfunction (){
    if (window.pageYOffset > (grid.getBoundingClientRect().top)){
    grid.classList.add("grid-transform");      
    document.getElementById("about-me").classList.remove("transform-h1-before");
    document.getElementById("about-me").classList.add("transform-h1");
}};

function projectfunction (){
    if (window.pageYOffset > (projects.getBoundingClientRect().top)){   
    projects.classList.remove("transform-projects-before");
    projects.classList.add("transform-projects");
    projectContent.classList.add("transform-y");
}};

// Scroll with projectbutton

function smoothScroll (duration){
    let targetPosition = projects.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

function animation(currentTime){
    if(startTime===null)
    startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
}

    function ease(t, b, c, d) {
    	t /= d/2;
	    if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
    	t--;
    	return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
};

requestAnimationFrame(animation);
}

projectButton.addEventListener("click", function (){
    smoothScroll(2000);
});
