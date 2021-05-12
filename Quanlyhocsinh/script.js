var editform = document.getElementById("editform")
var edit = document.getElementById("edit")
var close = document.getElementById("close-btn")

edit.onclick = function () {
    editform.style.display = "block"
}

close.onclick = function () {
    editform.style.display = "none";
}