let input = document.getElementById(`result`)
function appendInput(Value){
    input.value += Value;
}

function Calculate(){
    try{
        input.value = eval(input.value)
    }catch(error){
        input.value = 'Error';
    }
}

function clearResult(){
    input.value = '';
}