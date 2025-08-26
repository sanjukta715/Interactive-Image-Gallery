const mainImage = document.getElementById("displayedImage");

const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumb => {
  thumb.addEventListener("click", function() {

    mainImage.src = this.src;
  });
});
