const Calculate = {
    factorial(baseNumber) {
        let factorial = 1;
        if (baseNumber === 0) {
          return factorial;
        }
        for (let i = baseNumber; i >= 1; i--) {
            factorial *= i;
        }
        return factorial;
    }
}

module.exports = Calculate;