const result = document.getElementById("result");

function display(num){
    result.value+=num
}

function allclear(){
    result.value=""

}

function back(){
    result.value=result.value.slice(0,-1)
}

function equalto(){
    try {
            result.value=eval(result.value)

    } catch  {
        result.value="error"
        setTimeout(() => {
          result.value=""  
        }, 1000);
    }


}