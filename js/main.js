(function(doc) {
  "use strict";

  var candies = [
    { title: '', src: 'bolo1.jpeg' },
    { title: '', src: 'bolo2.jpeg' },
    { title: '', src: 'bolo3.jpeg' },
    { title: '', src: 'bolo4.jpeg' },
    { title: '', src: 'bolo5.jpeg' },
    { title: '', src: 'bolo6.jpeg' },
    { title: '', src: 'bolo7.jpeg' },
    { title: '', src: 'bolo8.jpeg' },
    { title: '', src: 'bolo9.jpeg' },
    { title: '', src: 'bolo10.jpeg' },
    { title: '', src: 'bolo11.jpeg' },
    { title: '', src: 'bolo12.jpeg' },
    { title: '', src: 'bolo13.jpeg' },
    { title: '', src: 'bolo14.jpeg' },
    { title: '', src: 'bolo15.jpeg' },
    { title: '', src: 'bolo16.jpeg' },
    { title: '', src: 'bolo17.jpeg' },
    { title: '', src: 'bolo18.jpeg' },
  ];

  function init() {
    var imageContainer = doc.getElementById("image-container");

    for (var c in candies) {
      if (candies.hasOwnProperty(c)) {
        imageContainer.appendChild(makeImageGrid(candies[c]["src"]));
      }
    }
  }

  function makeImageGrid(src) {
    var outerDiv = doc.createElement("div");
    outerDiv.setAttribute("class", "col-lg-3 col-md-4 col-xs-6 item");

    var anchor = doc.createElement("a");
    anchor.setAttribute("class", "d-block mb-4 h-100");

    var img = doc.createElement("img");
    img.setAttribute("class", "img-fluid img-thumbnail");
    img.setAttribute("src", "image/" + src);

    outerDiv.appendChild(anchor);
    anchor.appendChild(img);

    return outerDiv;
  }

  init();
})(document);
