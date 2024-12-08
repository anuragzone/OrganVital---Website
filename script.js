const body = document.querySelector("body"),
nav = document.querySelector("nav"),
modeToggle = document.querySelector(".dark-light"),
searchToggle = document.querySelector(".searchToggle"),
sidebarOpen = document.querySelector(".sidebarOpen"),
siderbarClose = document.querySelector(".siderbarClose");

let getMode = localStorage.getItem("mode");
    if (getMode && getMode === "dark-mode") {
        body.classList.add("dark");
    }

//js codde to toggle dark and light mode
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");
//js code to keep user selected mode even after refreshing refreshh
    if(!body.classList.contains("dark")){
        localStorage.setItem("mode", "light-mode")
    }else{
        localStorage.setItem("mode", "dark-mode")
    }
});
//js code to animate images
// let random = Math.floor(Math.random() * quoteTexts.length);
const quoteimage = document.getElementById('quoteimg');
const quoteImages = ['components/kidney.png','components/heart.png','components/liver.png'];

const quoteText = document.querySelector('.quote-para');
const quoteTexts = [
    '<p>Organ Donors Give</p><p>Life When</p><p class="red">They\'re Gone!!</p><p class="writer"></p>',
    '<p>Organ Donors Give </p><p>the Gift of Life</p><p class="red">to Others!</p><p class="writer"></p>',
    '<p>Be a Hero,</p><p>Donate Organs</p><p class="red">and Save Lives!</p><p class="writer"></p>'
];

let intervalId;
function startInterval() {
    intervalId = setInterval(function() {
        let random = Math.floor(Math.random() * quoteTexts.length);
        quoteText.innerHTML = quoteTexts[random];
        quoteimage.src = quoteImages[random];
    }, 800);
}
function stopInterval() {
    clearInterval(intervalId);
}

// Start the interval when the page loads
startInterval();

// Stop the interval on hover
quoteText.addEventListener('mouseenter', stopInterval);
quoteimage.addEventListener('mouseenter', stopInterval);

// Restart the interval when not hovering
quoteText.addEventListener('mouseleave', startInterval);
quoteimage.addEventListener('mouseleave', startInterval);


//js codde to toggle dark and light mode
searchToggle.addEventListener("click", () => {
    
    searchToggle.classList.toggle("active");
});



sidebarOpen.addEventListener("click", () => {
    nav.classList.add("active");
});

// Close sidebar
siderbarClose.addEventListener("click", () => {
    nav.classList.remove("active");
});


// Close sidebar when clicking outside
body.addEventListener("click", e => {
    let clickedElement = e.target;

    if (!clickedElement.classList.contains("sidebarOpen") && !clickedElement.classList.contains("menu")) {
        nav.classList.remove("active");
    }
})



var acc = document.getElementsByClassName("accordion");
var i;
for (i=0; i < acc.length; i++){
    acc[i].addEventListener("click" , function() {
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var pannel = this.nextElementSibling;
        if (pannel.style.display === "block") {
            pannel.style.display = "none";
        }else{
            pannel.style.display = "block";

        }
    })
}
/////login page
const contactWrapper = document.querySelector('.contact-wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
registerLink.onclick = () => {
    contactWrapper.classList.add('active');

}



loginLink.onclick = () => {
    contactWrapper.classList.remove('active');
}