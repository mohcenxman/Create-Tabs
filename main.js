let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
// console.log(tabs);
let divs = document.querySelectorAll(".content div")
let divsArray = Array.from(divs);
// console.log(divs);

tabsArray.forEach((ele) => {
    ele.addEventListener("click", function(e) {
        // console.log(ele);
        tabsArray.forEach ((el) => {
            el.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        divsArray.forEach((div) => {
            div.style.display = "none";
        });
        // console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
    });
});
