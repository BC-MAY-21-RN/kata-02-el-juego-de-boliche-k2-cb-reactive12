let array = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 0, 1, 7, 3, 6, 4, 10, 0, 2, 8]
let matrix = []
for (let i = 0; i < 20; i += 2) { matrix.push(array.slice(i, i + 2)) }
console.log(matrix)

// me devuelvo esto :
let suma = 0

for (let i = 0; i <= matrix.length - 1; i++) {
    if (((matrix[i][0] + matrix[i][1])) !== 10) {
        suma += ((matrix[i][0] + matrix[i][1]))
    }

    if (matrix[i][0] == 10) {
        (i === 9) ? (suma += 10) : (suma += (10 + (matrix[i + 1][0] + matrix[i + 1][1])))
    }


    if (((matrix[i][0] + matrix[i][1])) == 10 && matrix[i][0] !== 10) {
        //numero random           >>  <<
        (i === 9) ? (suma += (10 + (6))) : (suma += (10 + (matrix[i + 1][0])))

    }

    console.log("parcial", suma)

}
console.log("total", suma)