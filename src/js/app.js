
// * Button
const tabTitleButtons = document.querySelectorAll(".tabs-title");
const tabContents = document.querySelectorAll(".tabs__content");

tabTitleButtons.forEach((tabbutton, index) => {

    tabbutton.addEventListener("click", (e) => {
        tabContents.forEach(content => content.classList.remove("tabs__content--active")); 

        tabTitleButtons.forEach((button) => button.classList.remove("tabs__title--active"));

        e.target.classList.add("tabs__title--active"); 
        tabContents[index].classList.add("tabs__content--active");
    });
})

// * Dropdown 

const dropdownToggle = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownToggle.addEventListener("click", () => {
    dropdownContent.classList.toggle('show');
})

const menuToggle = document.querySelector(".dropdown__menu--btn");
const menuContent = document.querySelector(".menu-content");

menuToggle.addEventListener("click", () => {
    menuContent.classList.toggle('show');
})