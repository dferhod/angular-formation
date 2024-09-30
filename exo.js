function oddOrEven(nb) {
    return nb % 2 == 0 ? 'even' : 'odd'
}

//oddOrEven(10)

function minValueOfArray(array) {
    if (array.length == 0) {
        throw new Error('Tableau vide')
    }
    let min = array[0]
    for (let i = 1 ; i < array.length ; i++) {
        if (array[i] < min) min = array[i]
    }
    return min
}

// function minValueOfArray(array) {
//     return array.sort()[0]
// }

try {
    minValueOfArray([56, 78, 25, 89])
}
catch (err) {
    console.log(err)
}