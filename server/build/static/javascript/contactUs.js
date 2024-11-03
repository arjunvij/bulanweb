console.log(`reached contactUp`);

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  console.log(`focus  `);

  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  console.log(`blur  `);
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

window.onload = function () {
  var hashParams = window.location.hash.substr(1).split("&"); // substr(1) to remove the `#`
  console.log(hashParams);
  if (!(hashParams.length == 1 && hashParams[0] == "")) {
    for (var i = 0; i < hashParams.length; i++) {
      var p = hashParams[i].split("=");
      console.log("par");
      console.log(p);
      var m = document.getElementById("message");
      console.log(m);
      m.focus();
      // if()
      document.getElementById(p[0]).value = decodeURIComponent(p[1]);
    }
  }
};

// let custom_button = document.querySelector(".btn");
// let alertBox = document.getElementById("customAlertBox");
// let alert_Message_container = document.getElementById("alertMessage");
// let close_img = document.querySelector(".close");

// custom_button.addEventListener("click", function () {
//   alert_Message_container.innerHTML = "You clicked the button";
//   alertBox.style.display = "block";
// });

// close_img.addEventListener("click", function () {
//   alertBox.style.display = "none";
// });
