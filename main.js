const txt =
document.querySelector(".text");
const textInitialHeight = txt.clientHeight;
const overflow = document.querySelector(".overflow");
const btn = document.querySelector(".toggle");

btn.addEventListener("click", initToggle);

function initToggle(e){
    txt.style.maxHeight =
    e.target.dataset.state === "more"
    ? `${txt.scrollHeight}px`
    : `${txt.textInitialHeight}px`;

    e.target.setAttritubete(
        "data-state",
        e.target.dataset.state === "more" ? "less" : "more"
    );

    e.target.innerHTML =
    e.target.dataset.state === "more" ? "Show more" : "Show Less"

    overflow.setAttribute (
    "data-state",
    e.target.dataset.state === "more" ? "visible" : "hidden"
    )
 }
