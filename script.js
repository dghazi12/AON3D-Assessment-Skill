// Code written here to create a slideshow for the background images
// Used jQuery here for simplicity in order to create the "slideshow" for the images
(function ($, interval, slides) {
  var i = 0;
  var handle = setInterval(function () {
    $("body").css("background-image", "url('" + slides[i] + "')");

    i++;

    if (i >= slides.length) {
      i = 0;
    }
  }, interval);
})(jQuery, 2000, [
  "./images/banner1.png",
  "./images/banner2.png",
  "./images/banner3.jpg",
]);

//===========================================================================================//
