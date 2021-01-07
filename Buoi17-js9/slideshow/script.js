let thumbs = document.querySelectorAll(".thumb-img");
let main = document.getElementById("big-img");
thumbs.forEach((img) => {
  img.onclick = function () {
    main.src = this.src;
  };
});
