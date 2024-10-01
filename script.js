let input = document.getElementById('inputbox');
function appendNumber(num){
    input.value += num;
};
function appendOperator(op){
    input.value += op;
};
function allClear(){
    input.value = '';
};
function delChar(){
    input.value = input.value.slice(0,-1)
}
function appendDecimal(){
    if(!input.value.includes('.')){
        input.value += '.';
    }
};
function calculate(){
    const result = eval(input.value);
    input.value = result;
};
function pi(){
    input.value += Math.PI;
};
function appendCube(){
    input.value = input.value * input.value * input.value;
};
function appendSquare(){
    input.value = input.value*input.value;
};
function root(){
    input.value = Math.sqrt(input.value);
};
function sin(){
    input.value = Math.sin(input.value);
};
function cos(){
    input.value = Math.cos(input.value);
};
function log(){
    input.value = Math.log(input.value);
};
function factorial(){
    let i =1;
    let num = input.value;
    let f = 1;
    for(i=1; i<=num; i++){
        f = f*i
    }
    input.value = f;
};




