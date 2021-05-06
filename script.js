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

// Identifying which element I am referencing in the HTML for the API image gallery
const app = document.getElementById("root");

// Creating a div for the cards and adding the style class
const container = document.createElement("div");
container.setAttribute("class", "api");

// Appending the element
app.appendChild(container);

// API Get request to fetch all the data
// Set a limit to only get 12 images
var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://jsonplaceholder.typicode.com/photos/?_limit=12",
  true
);

// Looping through the API to gather all the necessary data to render
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
  if (request.status >= 200 && request.status < 400) {
    data.forEach((album) => {
      const card = document.createElement("div");
      const titleContainer = document.createElement("div");
      card.setAttribute("class", "card");

      const h4 = document.createElement("h4");
      h4.textContent = album.title;

      const img = document.createElement("img");
      img.src = album.thumbnailUrl;

      container.appendChild(card);
      card.appendChild(titleContainer);
      card.appendChild(h4);
      card.appendChild(img);
    });
  } else {
    const errorMessage = document.createElement("workingggggg");
    errorMessage.textContent = ` it's not working!`;
    app.appendChild(errorMessage);
  }
};

request.send();
