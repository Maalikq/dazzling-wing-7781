





import { navbar, footer_main, end } from "../dazzling-wing-7781/components/navbar.js";
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