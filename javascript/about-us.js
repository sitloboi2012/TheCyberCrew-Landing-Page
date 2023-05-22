function overlayShow() {
    let popup = document.getElementById("overlay")
    let opacity = document.getElementById("container")
    console.log(popup);
    console.log(opacity);
    popup.classList.add("open-popup");
    opacity.classList.add("overlay-container");
}

function overlayHide() {
    let popup = document.getElementById("overlay")
    let opacity = document.getElementById("container")
    popup.classList.remove("open-popup");
    opacity.classList.remove("overlay-container");
}