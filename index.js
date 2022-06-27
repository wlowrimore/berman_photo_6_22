$(document).ready(function () {
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "./assets/images/eclipse.jpg",
    "./assets/images/bw_country-guy.jpg",
    "./assets/images/studio.jpg",
    "./assets/images/kiss-cover.jpg",
    "./assets/images/r_b.jpg",
    "./assets/images/courtyard.jpg",
    "./assets/images/Gadd.jpg",
    "./assets/images/hotel-suite.jpg",
    "./assets/images/Peart.jpg",
    "./assets/images/synergy.jpg",
    "./assets/images/zztop.jpg",
    "./assets/images/jbeck.jpg",
    "./assets/images/nash-night.jpg",
    "./assets/images/fishbone-cover.jpg",
    "./assets/images/arch.jpg",
    "./assets/images/modern-drummer.jpg",
    "./assets/images/hotel-room.jpg",
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
