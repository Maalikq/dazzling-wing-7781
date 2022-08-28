

  let id;
  function debouncing(func, delay) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(function () {
      func;
    }, delay);
  }
 let searchBtn = async () => {
  try{

    let myQuery = document.getElementById("query").value;
    let url = `http://orbitz-ujjawal-api.herokuapp.com/hotel/?search=${myQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    let HotelData = localStorage.setItem("hotelData", JSON.stringify(data));
  
    document.getElementById("search-main-btn").addEventListener("click",function(){
      
      window.location.href = "hotel.html";
    })
  }catch(error){
    console.log(error)
  }
  
}

