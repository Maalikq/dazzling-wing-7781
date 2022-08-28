
    document.querySelector("form").addEventListener("submit", formData)

    // let formArr =[]


    function formData(event) {
        event.preventDefault();
        

        let formObj={
            name: document.getElementById("name").value,    
        cardNumber:document.getElementById("cardNumber").value,
        cvv:document.getElementById("cvv").value
        }
        
        console.log(formObj);
        if (formObj.name == "") {
            
            alert("Please enter name!");
        }else if(formObj.cardNumber==""){
            alert("Please enter cardNumber!");
        }else if(formObj.cvv==""){
            alert("Please enter valid cvv!");
        }

        if(formObj.cardNumber=="12345678" && formObj.cvv =="123"){
            window.location.href="./otp.html"
        }else{
            alert("error");

        }

        // formArr.push(formObj)
        // localStorage.setItem("formArr",JSON.stringify(formArr))
     }
   