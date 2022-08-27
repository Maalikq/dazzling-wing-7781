
// function onsubmit(){}
let form= document.querySelector("form");
let userData=JSON.parse(localStorage.getItem("USERS")) || [];
form.addEventListener("submit", function(event){
    event.preventDefault();
   
    let data={
        fname:document.getElementById("name").value,
        lname:document.getElementById("name1").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
    }

    let U_email=document.getElementById("email").value;
  
    console.log(userData)
   
    let flag=true;
    for(let i=0; i<userData.length; i++){
        if(userData[i].email==U_email){
            //    createnew acct here
            flag=false;
            console.log(data.email,userData[i].email)
            }
            // else{
            //     // console.log(userData)
               
            // }
        }
            if(flag==false){
                alert("Account already exist");
            }else{
                console.log("abcd");
                userData.push(data);
                localStorage.setItem("USERS", JSON.stringify(userData));
                alert("sign up succesfull");
                window.location.href="signin.html";
            }
       
    
   
})
// function checkEmails(email){
//   let filtered= userData.filter(function(element){
//     return email ===element.email;
//   })
// //   if here already accnt here 
//   if(filtered.length > 0){
//     return false;
//   }
//   else{
//     return true;
//   }
// }