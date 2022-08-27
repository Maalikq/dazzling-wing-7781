

   let searchButton = async (query) => {

let myQuery = document.getElementById("query").value;
let url = `http://orbitz-ujjawal-api.herokuapp.com/hotel/?search=${query}`;

let res = await fetch(url);
let data = await res.json();
console.log(data)
let package = localStorage.setItem("package", JSON.stringify(data));
window.location.href = "package1.html";

}
