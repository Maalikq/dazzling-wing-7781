

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
// console.log(navbar);

    let searchBtn = async (query) => {

        let myQuery = document.getElementById("query").value;
        let url = `http://orbitz-ujjawal-api.herokuapp.com/hotel/?search=${query}`;

        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        let HotelData = localStorage.setItem("hotelData", JSON.stringify(data));
        window.location.href = "hotel.html";

    }
