const navHam = document.querySelector("#navBtn");
const navExtend = document.querySelector(".extend-nav");
const navBar = document.getElementById("navbar");

navHam.addEventListener("click", () => {
    navHam.classList.toggle("navham-active");
    navExtend.classList.toggle("extend-active");
});

window.addEventListener("scroll", () => {
    if(window.scrollY > 0) {
        navBar.classList.add("active-navbar");
    } else {
        navBar.classList.remove("active-navbar");
    }
})

const imgLn = document.querySelectorAll(".img-slide");
const descSkill = document.querySelectorAll(".desc-skill");

let slideIndex = 0;

function next() {
    slideImg(slideIndex += 1);
}

function prev() {
    slideImg(slideIndex -= 1);
}

function slideImg() {
    
    if (slideIndex == 0) {
        document.getElementById("left-skill").style.opacity = "0";
        document.getElementById("left-skill").classList.add("pointer-events-none");
        slideIndex = 0;
    } else if(slideIndex == imgLn.length - 1) {
        document.getElementById("right-skill").style.opacity = "0";
        document.getElementById("right-skill").classList.add("pointer-events-none");
    } else {
        document.getElementById("left-skill").style.opacity = "1";
        document.getElementById("right-skill").style.opacity = "1";
        document.getElementById("right-skill").classList.remove("pointer-events-none");
        document.getElementById("left-skill").classList.remove("pointer-events-none");
    }
    console.log(slideIndex, imgLn.length)
    imgLn.forEach(img => {
        img.style.transform = `translateX(-${slideIndex * 100}%)`;
    })
    for(let j = 0; j < descSkill.length; j++) {
        descSkill[j].style.display = "none";
    }
    descSkill[slideIndex].style.display = "block";
}
    