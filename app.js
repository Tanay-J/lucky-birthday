var dob = document.querySelector("#dob");
var luckyNo = document.querySelector("#luckyNo");
var btn = document.querySelector("#btn");
var result = document.querySelector(".result");
btn.addEventListener("click",clickHandler);



function clickHandler(){
    var dobArray = dob.value.toString().split('');
    var digit = 0;
    var resultColor = getComputedStyle(document.body).getPropertyValue('--resultColor');
    
    dobArray.map(item => {
        if(item!="/"){
            digit = parseInt(digit)+parseInt(item); 
        }
       
    })
    console.log(dobArray)
    if(digit%luckyNo.value == 0 && dobArray.length == 10){
        result.textContent = "Your birthday is LUCKY";
        document.documentElement.style.setProperty('--resultColor','green');
    }else if(isNaN(digit%luckyNo.value) || dobArray.length != 10){
        document.documentElement.style.setProperty('--resultColor','black');
        result.textContent = "Input incorrect";
    }
    else{
        document.documentElement.style.setProperty('--resultColor','orangered');
        result.textContent = "Your birthday is NOT LUCKY";
    }
}
