let form= document.querySelector("form");
let userData= JSON.parse(localStorage.getItem("USERS"))|| [];
console.log(userData);
// form.addEventListener("submit", function (e)
function chk(event){
    console.log(userData);
    event.preventDefault();
   
    let data={
        email:form.email.value,
        password: form.password.value,
        
    }
        if(checkSignin(data.email,data.password) ===true){
            localStorage.setItem("sign in",JSON.stringify(data));
            alert("sign in sucessful");
            window.location.href="index.html"
        

    }else{
        alert("Data not Found!")
    }
}
function checkSignin(email,password){
    let filter= userData.filter(function(element){
        return element.email === email && element.password === password;
    })
    // if acct exist return output
    if(filter.length > 0){
    return true;
  }
  else{
    return false;
  }
}