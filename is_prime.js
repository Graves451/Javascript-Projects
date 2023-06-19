function is_prime(num){
    for(let x = 2; x < num; x++){
        if(num % x == 0){
            return false;
        }
    }
    return true;
}

console.log(is_prime(21));