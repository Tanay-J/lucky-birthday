var dob = document.querySelector("#dob");
var luckyNo = document.querySelector("#luckyNo");
var btn = document.querySelector("#btn");
var result = document.querySelector(".result");
btn.addEventListener("click",clickHandler);



function clickHandler(){
    var dobArray = dob.value.toString().split('');
    var digit = 0;
    dobArray.map(item => {
        if(item!="/"){
            digit = parseInt(digit)+parseInt(item); 
        }
       
    })
    console.log(dobArray)
    if(digit%luckyNo.value == 0 && dobArray.length == 10){
        result.textContent = "Your birthday is LUCKY";
        // result.style.backgroundImage = "url('/images/lucky.svg')";
    }else if(isNaN(digit%luckyNo.value) || dobArray.length != 10){
        result.textContent = "Input incorrect";

    }
    else{
        result.textContent = "Your birthday is NOT LUCKY";
        result.style.backgroundImage = "url('/images/unlucky.svg')";
    }
}
