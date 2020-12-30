window.onload = function () {
  $(".cont-btn").click(function () {
    $(".main-pt").hide();
    $(".intro").fadeOut(1000);
    setTimeout(function() {
      $(".main-pt").removeClass("d-none");
      $(".main-pt").fadeIn(1000,checkOverflow);
    }, 1000);
  });

  var windowChange = _.debounce(checkOverflow,50);

  $(window).on("resize",windowChange);

  //remove shading if body overflow
  function checkOverflow() {
    if ($("body").prop('scrollHeight') > $("body").height()) {
      $("body").css("box-shadow", "none")
    } else {
      $("body").css("box-shadow", "inset 0 0 5rem rgba(0, 0, 0, 0.5)")
    }
  }
 
};