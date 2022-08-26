document.querySelector("#roundtrip").style.backgroundColor = "#b2d8dd";
document.querySelector("#oneway").style.backgroundColor = "white";
document.querySelector("#multicity").style.backgroundColor = "white";

document.querySelector("#oneway").addEventListener("click", function () {
  document.querySelector("#roundtrip").style.backgroundColor = "white";
  document.querySelector("#oneway").style.backgroundColor = "#b2d8dd";
  document.querySelector("#multicity").style.backgroundColor = "white";
});

document.querySelector("#multicity").addEventListener("click", function () {
  document.querySelector("#roundtrip").style.backgroundColor = "white";
  document.querySelector("#oneway").style.backgroundColor = "white";
  document.querySelector("#multicity").style.backgroundColor = "#b2d8dd";
});
document.querySelector("#roundtrip").addEventListener("click", function () {
  document.querySelector("#roundtrip").style.backgroundColor = "#b2d8dd";
  document.querySelector("#oneway").style.backgroundColor = "white";
  document.querySelector("#multicity").style.backgroundColor = "white";
});
// document.querySelector("#query").append(location_on);
