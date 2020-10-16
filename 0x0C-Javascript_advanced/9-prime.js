function countPrimeNumbers() {
    let checkPrime = async number => {
       let ctr = 2;
       while (ctr < number) {
           if (number % ctr == 0) return false;
           ctr++;
        }
        return true;
    }
    let num_ps = [];
    let bs;
    let count = 3
    while (count < 101) {
        bs = checkPrime(count);
        if (bs) num_ps.push(count);
        count++;
    }
    return num_ps;
}

console.log(countPrimeNumbers());
