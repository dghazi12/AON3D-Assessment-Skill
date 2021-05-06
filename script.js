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

// Identifying which element I am referencing in the HTML for the cards
const main = document.getElementById("mainCards");

// Creating a div for the cards
const cardsContainer = document.createElement("div");

// Appending the element
main.appendChild(cardsContainer);

// Created objects of the data for the cards
function cards() {
  const cardData = [
    {
      title: "Documentation",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      buttonTitle: "READ DOCS",
      href: "https://www.aon3d.com/",
    },
    {
      title: "AON3D Academy",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      buttonTitle: "ACCESS COURSES",
      href: "https://www.aon3d.com/",
    },
    {
      title: "Online Store",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      buttonTitle: "PURCHASE ITEMS",
      href: "https://www.aon3d.com/",
    },
    {
      title: "Vendors",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      buttonTitle: "BUTTON 4",
      href: "https://www.aon3d.com/",
    },
    {
      title: "Suppliers",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      buttonTitle: "BUTTON 5",
      href: "https://www.aon3d.com/",
    },
    {
      title: "Title 6",
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      buttonTitle: "BUTTON 6",
      href: "https://www.aon3d.com/",
    },
  ];

  //Looping through the properties of the objects to get the necessary data for the Cards div and then appending
  cardData.forEach((info) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card card-body");

    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    const h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");
    h5.textContent = info.title;

    const p = document.createElement("p");
    p.setAttribute("class", "card-text");
    p.textContent = info.text;

    const a = document.createElement("a");
    a.setAttribute("class", "btn btn-primary");
    a.setAttribute("href", `${info.href}`);

    a.textContent = info.buttonTitle;

    cardsContainer.appendChild(card);
    card.appendChild(cardBody);
    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(a);
  });
}

cards();
