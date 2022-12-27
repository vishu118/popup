
const tohide = document.querySelector(".tohide");
const cancel = document.querySelector(".cancel");
const accept = document.querySelector(".accept");


cancel.addEventListener("click", () => {
tohide.style.display="block"
});

accept.addEventListener("click", () => {
    tohide.style.display="none"
 
});
