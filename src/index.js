module.exports = function reverse (n) {
    let m = Math.abs(n);
    return m.toString().split("").reverse().reduce((result, element) => result.concat(element));
  
}
