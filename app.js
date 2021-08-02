var dob = document.querySelector("#dob");
var luckyNo = document.querySelector("#luckyNo");
var btn = document.querySelector("#btn");
var result = document.querySelector(".result");
btn.addEventListener("click",clickHandler);

// const currentDate = new Date();
// dob.setAttribute("max",currentDate.toISOString().split('T')[0]);

function clickHandler(){
    var dobArray = dob.value.split('');
    var digit = 0;
    
    const currentDate = new Date();
    const inputDate = dob.value.split('-');
    
    if(inputDate[0] > currentDate.getFullYear()){
        document.documentElement.style.setProperty('--resultColor','black');
        result.textContent = "Birthdate should be prior to today";
        return;
    }
    if(inputDate[0] == currentDate.getFullYear()){
        if(inputDate[1] > (currentDate.getMonth()+1)){
            document.documentElement.style.setProperty('--resultColor','black');
            result.textContent = "Birthdate should be prior to today";
            return;
        }
        if(inputDate[1] == (currentDate.getMonth()+1)){
            if(inputDate[2] > currentDate.getDate()){
                document.documentElement.style.setProperty('--resultColor','black');
                result.textContent = "Birthdate should be prior to today";
                return;
            }
        }
    }

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
