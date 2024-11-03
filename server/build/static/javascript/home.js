window.onload = function () {
  var hashParams = window.location.hash.substr(1).split("&"); // substr(1) to remove the `#`
  for (var i = 0; i < hashParams.length; i++) {
    var p = hashParams[i].split("=");
    console.log("param");
    console.log(p);
    if (decodeURIComponent(p[1]) == "true") {
      console.log("reached codition ");
      window.alert("Response Saved successfully");
    }
  }
};
