let button = document.querySelector(".button");
let alert = document.querySelector(".alert");
function showAlert(){
    let text = document.createElement("div");
    text.id = "text";
    text.innerHTML = "Đây là cái alert";
    alert.append(text);
    setTimeout(() => {
        document.getElementById("text").remove();
    }, 2000)
}
