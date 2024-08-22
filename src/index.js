module.exports = function reverse (n) {
    return String(parseInt(String(Math.abs(n)).split('').reverse().join('')));
};

// console.log(reverse(6200));






