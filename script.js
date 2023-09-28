$(document).ready(function () {
  $("i").click(function () {
    $("ul").toggleClass("ul-show");
    $("section").toggleClass("slide-image");
  });
  $("li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
