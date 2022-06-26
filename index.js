$(document).ready(function () {
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "./assets/images/Jaco-1.jpg",
    "./assets/images/trainer-1.jpg",
    "./assets/images/trainer-2.jpg",
    "./assets/images/trainer-3.jpg",
  ];

  var i = 0;
  setInterval(function () {
    i = (i + 1) % images.length;
    galleryImage.fadeOut(750, function () {
      $(this).attr("src", images[i]);
      $(this).fadeIn(750);
    });
  }, 5000);
});
