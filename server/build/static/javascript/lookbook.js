//    we will use a container to place our blocks.
//     fetch the element by id and store it in a variable.
var container = document.getElementById("articleContainer");

function block(mClass, html) {
  //extra html you want to store.
  return '<div class="' + mClass + '">' + html + "</div>";
}
var articleHtml = `
  <div class = "article2">
    <div class="slideshow-container">
      <div class="articleImageWindow">
          <img class = "suitImage" src = "../media/photos/bulanTestImage.JPG">
      </div>
      <div class="articleImageWindow">
        <img class = "suitImage" src = "../media/photos/bulanTestImage2.JPG">
      </div>
      <div class="articleImageWindow">
        <img class = "suitImage" src = "../media/photos/bulanTestImage3.JPG">
      </div>
      <a class="prev" onclick="plusSlides(-1,'article2')">&#10094;</a>
      <a class="next" onclick="plusSlides(1,'article2')">&#10095;</a>
    </div>

  

    <div class=" contact-form">
      <br>
      <p class="suitName">Suite Name</p>
      <p class="suitDesc">
        At Bulan we love both prêt and couture.<br>
        If you whish to contact us for any queries feel free to reach out.
        We shall respond as early as possible.
      </p>
      <form action="../html2/contact.html" method="get">
      <div class = "Enquire">
        <input type="submit" value="Enquire Now" class="btn" />
      </div>
      <br>
    </div>
  </div>

`;

//    code that loops and makes the blocks.
//    first part: creates var i
//    second:     condition, if 'i' is still smaller than three, then loop.
//    third part: increment i by 1;

var slideIndex = 1;
var articleNo = "article1";
showSlides(slideIndex, articleNo);
function plusSlides(n, articleNo) {
  showSlides((slideIndex += n), articleNo);
}
function currentSlide(n) {
  showSlides((slideIndex = n), articleNo);
}
function showSlides(n, articleNo) {
  var i;
  console.log("n", n);
  console.log("article No ", articleNo);
  var slides = document
    .getElementsByClassName(articleNo)[0]
    .getElementsByClassName("articleImageWindow");
  // var dots = document.getElementsByClassName("dot");

  console.log("slides length", slides.length);

  if (n > slides.length) {
    console.log(n);
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }

  // dots[slideIndex - 1].className += " active";
}
for (var i = 0; i < 1; i++) {
  //   // append the result of function 'block()' to the innerHTML
  //   // of the container.
  container.innerHTML += block("article", articleHtml);
  showSlides(1, "article2");

  // console.log(container);
}


