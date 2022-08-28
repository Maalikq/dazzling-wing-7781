function append(){
    let container=document.getElementById("main_container");
    container.innerHTML=null;
    let hotelDataLs=JSON.parse(localStorage.getItem("hotelData"))||[];
    hotelDataLs.forEach(function(el){
        let box=document.createElement('div');
        box.setAttribute('id','boxId')

        let img_bag=document.createElement('div');
        img_bag.setAttribute('id','img_bag');

        let hotel_title=document.createElement("div");
        hotel_title.setAttribute('id',"hotel_title");
       
        let btn1= document.createElement('button');
        btn1.setAttribute('id','btn1id');
        btn1.innerText= "Book Now"
        btn1.addEventListener("click", function(){
                
          alert("Booking Successful")
      })
        
        
        let price=document.createElement('div');
        price.setAttribute('id','priceid');

        let review=document.createElement('div');
        review.setAttribute('id','reviewid');

        let rating=document.createElement('h4');
        rating.setAttribute('id','ratingid');
        rating.innerText=`${el.rating}/10`;

        let reviews=document.createElement('p');
        reviews.innerText=`(${el.reviews} reviews) `;

        let price1=document.createElement('h2');
        price1.innerText=`$${el.price} Per Traveler`;
        

        let image=document.createElement('img');
        image.src=el.url;

        let hotelName=document.createElement('h2');
        hotelName.innerText=el.hotel;

        let city=document.createElement('p');
        city.innerText=el.city;


        review.append(rating,reviews);
        price.append(price1,btn1);


        img_bag.append(image);
        hotel_title.append(hotelName,city,review);
        box.append(img_bag,hotel_title,price,btn1);

       
        container.append(box);
        
    })
   
}
append();



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
const options = {
method: 'GET',
headers: {
    'X-RapidAPI-Key': 'd0e9da574amsh371f0b9afc4f8c2p112077jsnf144134873bf',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
}
};

fetch('https://hotels4.p.rapidapi.com/locations/v2/search?query=new%20york&locale=en_US&currency=USD', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));

