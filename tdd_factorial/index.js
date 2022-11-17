const Calculate = {
    factorial(baseNumber) {
        let factorial = 1;
        for (let i = baseNumber; i >= 1; i--) {
            factorial *= i;
        }
        return factorial;
    }
}

module.exports = Calculate;