// modal functionality
$(document).ready(function () {
  $(".small-image").click(function () {
    var path = $(this).attr("src");
    $("#large_image").attr("src", path);

    $("#modal").fadeIn();
  });

  $("#close_btn").click(function () {
    $("#modal").slideUp();
  });
});
