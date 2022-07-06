$(document).ready(function () {
  var galleryQuote = $(".quote-cont").find("p").first();
  let quotes = [
    "first quote",
    "second quote",
    "third quote",
    "fourth quote",
    "fifth quote",
  ];

  let count = 0;

  setInterval(function () {
    let index = count++ % quotes.length;
    galleryQuote.fadeOut(800, function () {
      $(this).html(quotes[index]);
      $(this).fadeIn(800);
    });
  }, 5000);
  console.log(quotes);
});
