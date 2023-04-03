const editTrigger = document.querySelectorAll(".edit");
console.log(editTrigger);
editTrigger.forEach(function(trigger) {
    trigger.addEventListener('click', () => {
        showToast();
    });
});




const toastContainer = document.getElementById("toast-layer");
const hideToast = () => {toastContainer.setAttribute("data-isShown","no")};
let toastTimer;
toastContainer.addEventListener('click', event => {
    hideToastManually();
});

function showToast() {
    toastContainer.setAttribute("data-isShown","yes");
    toastTimer = setTimeout(hideToast,3000);
}
function hideToastManually() {
    toastContainer.setAttribute("data-isShown","no");
    clearTimeout(toastTimer);
}
