var dob = document.querySelector("#dob");
var luckyNo = document.querySelector("#luckyNo");
var btn = document.querySelector("#btn");
var result = document.querySelector(".result");
btn.addEventListener("click",clickHandler);



function clickHandler(){
    var dobArray = [];
    var digit = 0;
    
    dobArray = dob.value.toString().split('');
    dobArray.map(item => {
        if(item!="-"){
            digit = parseInt(digit)+parseInt(item); 
        }
       
    })
    if(digit%luckyNo.value == 0 && dobArray.length == 10){
        result.textContent = "Your birthday is LUCKY";
        document.documentElement.style.setProperty('--resultColor','green');
    }else if(luckyNo.value && dobArray.length == 10){
        document.documentElement.style.setProperty('--resultColor','orangered');
        result.textContent = "Your birthday is NOT LUCKY";
    }else {
        document.documentElement.style.setProperty('--resultColor','black');
        result.textContent = "All fields are required";
   
    }
}
