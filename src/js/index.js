//hamburger
const burgerBtn = document.querySelector(".hamburger");
const crossBtn = document.querySelector(".cross");
const navBar = document.querySelector(".nav-list");
burgerBtn.addEventListener("click", function (event) {
       navBar.classList.toggle("nav-list-toggle");
})



//our services js
const servicesUl = document.querySelector(".services-description-ul");
const servicesHeaders = document.querySelector(".services-headers");


servicesHeaders.addEventListener("click", function (event) {
    const targetHeaders = event.target;
    const targetParagraph = targetHeaders.dataset.filter;
    targetHeaders.closest("ul").querySelector(".active").classList.remove("active");
    [...servicesUl.children].forEach(item => {
        item.classList.remove("services-active");
        if (item.id === targetParagraph) {
            item.classList.add("services-active");
            targetHeaders.classList.add("active");
        }

    })

});

//amazing work js
const amazingWorkList = document.querySelector(".amazing-work-list");
const loadMoreBtn = document.getElementById("loadMore");
const imagesUl = document.querySelector(".amazing-work-images");
const loadingImg = document.querySelector("#loading");
const hiddenDiv = document.querySelector(".invisible");
let pressedTab = "all";
let counter = 0;
const newImagesLi = [
    ` <li class="images-li" data-filter="gdesign">
    <img class="aw-image" src="./dist/image/amazing-work2/graphic-design/graphic-design1.jpg" alt="">
    <div class="img-inside-div">
        <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
        <p class="creative-design">CREATIVE DESIGN</p>
        <p class="subtitle">Web Design</p>
    </div>
</li>`,
    ` <li class="images-li" data-filter="gdesign">
<img class="aw-image" src="./dist/image/amazing-work2/graphic-design/graphic-design4.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="gdesign">
<img class="aw-image" src="./dist/image/amazing-work2/graphic-design/graphic-design5.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="gdesign">
<img class="aw-image" src="./dist/image/amazing-work2/graphic-design/graphic-design7.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="gdesign">
<img class="aw-image" src="./dist/image/amazing-work2/graphic-design/graphic-design8.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="gdesign">
<img class="aw-image" src="./dist/image/amazing-work2/graphic-design/graphic-design9.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="gdesign">
<img class="aw-image" src="./dist/image/amazing-work2/graphic-design/graphic-design10.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="gdesign">
<img class="aw-image" src="./dist/image/amazing-work2/graphic-design/graphic-design12.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="lpages">
<img class="aw-image" src="./dist/image/amazing-work2/landing-page/landing-page1.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="lpages">
<img class="aw-image" src="./dist/image/amazing-work2/landing-page/landing-page3.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="lpages">
<img class="aw-image" src="./dist/image/amazing-work2/landing-page/landing-page4.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="lpages">
<img class="aw-image" src="./dist/image/amazing-work2/landing-page/landing-page5.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="lpages">
<img class="aw-image" src="./dist/image/amazing-work2/landing-page/landing-page7.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="wdesign">
<img class="aw-image" src="./dist/image/amazing-work2/web-design/web-design1.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="wdesign">
<img class="aw-image" src="./dist/image/amazing-work2/web-design/web-design2.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="wdesign">
<img class="aw-image" src="./dist/image/amazing-work2/web-design/web-design4.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="wdesign">
<img class="aw-image" src="./dist/image/amazing-work2/web-design/web-design5.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="wdesign">
<img class="aw-image" src="./dist/image/amazing-work2/web-design/web-design6.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="wpress">
<img class="aw-image" src="./dist/image/amazing-work2/wordpress/wordpress1.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="wpress">
<img class="aw-image" src="./dist/image/amazing-work2/wordpress/wordpress3.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="wpress">
<img class="aw-image" src="./dist/image/amazing-work2/wordpress/wordpress4.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="wpress">
<img class="aw-image" src="./dist/image/amazing-work2/wordpress/wordpress6.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="wpress">
<img class="aw-image" src="./dist/image/amazing-work2/wordpress/wordpress7.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`,
    ` <li class="images-li" data-filter="wpress">
<img class="aw-image" src="./dist/image/amazing-work2/wordpress/wordpress9.jpg" alt="">
<div class="img-inside-div">
    <img class="img-div" src="./dist/image/logo/icon.svg" alt="">
    <p class="creative-design">CREATIVE DESIGN</p>
    <p class="subtitle">Web Design</p>
</div>
</li>`
];

amazingWorkList.addEventListener("click", function (event) {
    const aworkList = event.target;
    const tabElements = aworkList.id;
    pressedTab = tabElements;
    aworkList.closest("ul").querySelector(".selected").classList.remove("selected");
    aworkList.classList.add("selected");
    let imagesLi = [...document.getElementsByClassName("images-li")];
    imagesLi.forEach(item => {
        const dataFilter = item.dataset.filter;
        item.setAttribute("hidden", true);
        if (tabElements === dataFilter) {
            item.removeAttribute("hidden");
        } else if (tabElements === "all") {
            item.removeAttribute("hidden");
        }
    });

})

loadMoreBtn.addEventListener("click", function (event) {
    let sliced = [];
    hiddenDiv.classList.remove("invisible");
    setTimeout(() => {
        if (counter < 1) {
            sliced = newImagesLi.slice(0, 12);
            counter++;
        } else {
            sliced = newImagesLi.slice(12);
            loadMoreBtn.remove();
        }

        sliced.forEach(item => {
            imagesUl.insertAdjacentHTML("beforeend", item);

        });
        const images = [...document.querySelectorAll(".images-li")];
        images.forEach(item => {
            const data = item.dataset.filter;
            if (pressedTab === "all") {
                return;
            } else if (data !== pressedTab) {
                item.setAttribute("hidden", true);
            }
        })

        hiddenDiv.classList.add("invisible");
    }, 3000)

})

/* Testimonial section*/
const arrowRight = document.getElementById("arrow-right");
const arrowLeft = document.getElementById("arrow-left");
const userGroup = document.querySelector(".user-group");
const usersMainUl = document.querySelector(".users-test");
let next = 3000;
let start = createInterval();
let index = 0; //length of caroussel start

arrowRight.addEventListener("click", (event) => changeSlide(event))
arrowLeft.addEventListener("click", (event) => changeSlide(event))
userGroup.addEventListener("click", (event) => changeSlide(event))

function changeSlide(event) {
    const slider = usersMainUl.children;
    const activeUser = userGroup.children;
    if (event) {
        const pressedTarget = event.currentTarget;
        clearInterval(start);
        if (pressedTarget === arrowRight) {
            slider[index].hidden = "true";
            activeUser[index].children[0].classList.remove("active-user");
            index++;
            if (index === slider.length) {
                index = 0;
            }
            slider[index].removeAttribute("hidden");
            activeUser[index].children[0].classList.add("active-user");
        } else if (pressedTarget === arrowLeft) {
            slider[index].hidden = "true";
            activeUser[index].children[0].classList.remove("active-user");

            if (index === 0) {
                index = slider.length;
            }
            index--;
            slider[index].removeAttribute("hidden");
            activeUser[index].children[0].classList.add("active-user");
        } else if (pressedTarget === userGroup) {
            if (event.target === userGroup) {
                return;
            }
            slider[index].hidden = "true";
            activeUser[index].children[0].classList.remove("active-user");
            index = event.target.dataset.filter;
            slider[index].removeAttribute("hidden");
            activeUser[index].children[0].classList.add("active-user");

        }
        start = createInterval();
    } else {
        slider[index].hidden = "true";
        activeUser[index].children[0].classList.remove("active-user");
        index++;
        if (index === slider.length) {
            index = 0;
        }
        slider[index].removeAttribute("hidden");
        activeUser[index].children[0].classList.add("active-user");
    }


}

function createInterval() {
    return setInterval(() => {
        changeSlide();
    }, 3000)
}
userGroup.addEventListener("mouseover", function (event) {
    clearInterval(start);
    console.log(event.target);
})
userGroup.addEventListener("mouseleave", function (event) {
    start = createInterval();
})




