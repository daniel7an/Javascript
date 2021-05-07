function Factorial(number){
    let factorial_sum = 1;
    for(let i = 1; i <= number; i++){
        factorial_sum = factorial_sum * i;
    }
    return factorial_sum;
}

console.log(Factorial(4));