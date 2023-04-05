const editTrigger = document.querySelectorAll(".trigger-toast");
console.log(editTrigger);
editTrigger.forEach(function(trigger) {
    trigger.addEventListener('click', () => {
        showToast();
    });
});

const drawerTriggerOpen = document.getElementById("hover-and-link");
const drawerTriggerClose = document.getElementById("trigger-close-drawer");
const drawer = document.getElementById("drawer");
drawerTriggerOpen.addEventListener('click', () => {
    drawer.setAttribute("data-isShown","yes");
});
drawerTriggerClose.addEventListener('click', () => {
    drawer.setAttribute("data-isShown","no");
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
