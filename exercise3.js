function number(funcback) {
    funcback();

    return function(){
    console.log('x')
    }
}

function number2() {
    console.log('x+y')
    
}

const resultFuncback = number(number2);
resultFuncback();
