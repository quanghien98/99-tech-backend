// Method 1
function sum_to_n_iterative_a (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sum_to_n_iterative_b (n) {
    return (n * (n + 1)) / 2;
}

function sum_to_n_iterative_c (n) {
    if (n === 1) return 1;
    return n + sum_to_n_iterative_c(n-1)
}
