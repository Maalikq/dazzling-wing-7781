<<<<<<< HEAD
=======

import { navbar, footer_main, end } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML = navbar();
console.log(navbar());

document.getElementById("footer_1").innerHTML = footer_main();
document.getElementById("footer_end").innerHTML = end();

document.getElementById("dropbtn").addEventListener("click", () => {
  document.getElementById("myDropdown").classList.toggle("show");
});


window.onclick = function (event) {
  if (!event.target.matches("#dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};







>>>>>>> main
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
