function primo(m) {
    let divisores = 0;
    for (let j = 3; j <= 384; j++) {
        if (m % j === 0) {
            divisores += 1;
        }
    }
    if (divisores <= 2) {
        return [true, 'es primo'];
    } else {
        return [false, 'no es primo'];
    }
}

console.log(primo(100));  // [false, 'no es primo']
console.log(primo(7));  // [true, 'es primo']
console.log(primo(16)); // [false, 'no es primo']
console.log(primo(47)); // [true, 'es primo']

