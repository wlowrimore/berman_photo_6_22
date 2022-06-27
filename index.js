$(document).ready(function () {
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "./assets/images/bw_country-guy.jpg",
    "./assets/images/Gadd.jpg",
    "./assets/images/r_b.jpg",
    "./assets/images/drummer-hair.jpg",
    "./assets/images/Peart.jpg"
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
