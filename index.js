window.onload = function () {
  $(".cont-btn").click(function () {
    $(".main-pt").hide();
    $(".intro").fadeOut(1000);
    setTimeout(function() {
      $(".main-pt").removeClass("d-none");
      $(".main-pt").fadeIn(1000);
    }, 1000);
  });

  $(".dl-btn").click(function () {

  })
};