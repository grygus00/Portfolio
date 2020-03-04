// var smille = bodymovin.loadAnimation({
//   container: document.getElementById("smilley"),
//   render: "svg",
//   loop: true,
//   autoplay: true,
//   animationData: "WebAnim/SmileWeb.json",
// });



$(window)
  .scroll(function() {
    // selectors
    var $window = $(window),
      $body = $("body"),
      $panel = $(".colorfull");

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + $window.height() / 3;

    $panel.each(function() {
      var $this = $(this);

      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if (
        $this.position().top <= scroll &&
        $this.position().top + $this.height() > scroll
      ) {
        // Remove all classes on body with color-
        $body.removeClass(function(index, css) {
          return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
        });

        // Add class of currently active div
        $body.addClass("color-" + $(this).data("color"));
      }
    });
  })
  .scroll();

// ------------------------------SCROLL ARROWS------------------------------ //

$(document).ready(function() {
  ///////////////////////////////////
  $("#click0").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#first").offset().top
      },
      2000
    );
  });
  ///////////////////////////////////
  $("#click1").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#headd").offset().top
      },
      2000
    );
  });
  ///////////////////////////////////
  $("#click2").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#second").offset().top
      },
      2000
    );
  });
  ///////////////////////////////////
  $("#click3").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#first").offset().top
      },
      2000
    );
  });
  ///////////////////////////////////
  $("#click4").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#third").offset().top
      },
      2000
    );
  });
  ///////////////////////////////////
  $("#click5").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#second").offset().top
      },
      2000
    );
  });
  ///////////////////////////////////
});
