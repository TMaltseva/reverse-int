module.exports = function reverse (n) {
    let result = String(Math.abs(n)).split('').reverse().join('');
    if (result[0] === '0') {
        result = result.substring(1);
    };
    result = parseInt(result);
    return String(result);       
};

// console.log(reverse(6200));






