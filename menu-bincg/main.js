const accordionItemHeaders = document.querySelectorAll(".accordion-drop");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("accordion-active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("accordion-active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
let isSticky = false;

function toggleSticky() {
    if (window.scrollY > headerHeight && !isSticky) {
        header.classList.add("sticky");
        isSticky = true;
    } else if (window.scrollY <= headerHeight && isSticky) {
        header.classList.remove("sticky");
        isSticky = false;
    }
}

// Listen for scroll events and toggle sticky class
window.addEventListener("scroll", toggleSticky);

