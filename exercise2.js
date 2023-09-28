let number1 = +prompt("введите число до 1000")

if(number1 < 1000){
    function isPrime(number){
        for (let i = 2; i < number; i++){
            if (number % i === 0) return false;
        }
        return number !== 1;
    }
    isPrime(number=number1);
    console.log(number);
    console.log(isPrime(number));

} else{
    alert('слишком большое число');
}
if( (isPrime(number)) == 'true'){
    console.log(number + 'простое число');

} else {
    console.log(number + 'составное число');
}
