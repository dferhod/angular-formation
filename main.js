const age = 18
let name = 'ana' // "ana"
const lastName = 'martin'
const fullName  = name + ' ' + lastName

const isActive = true

if (isActive) {
    name = 'ben'
}
else {
    console.log('sinon')
}

console.log(name)



let nb = 42
const decimal = 42.13
// +, -, *, /

const nb3 = 3 ** 2
const modulo = 5 % 3

nb++
nb += 2

const title = 'Mon App'
let template = `<h1>
    ${title}
</h1>`

console.log(template)

// function add(nb1, nb2) {
//     return nb1 + nb2
// }

// console.log(add(1, 2))

let add = function(nb1, nb2) {
    return nb1 + nb2
}

console.log(add(1, 2))

/// --- array

const cities = ['Lyon', 'Paris']
console.log(cities[0])

cities[0] = 'Marseille'

console.log(cities.length)

for (let i=0 ; i < cities.length ; i++) {
    console.log(cities[i])
}

for (let city of cities) {
    console.log(city)
}


const arrayNb = [1, 2, 3, 4]
const fn = function(nb) {
    return nb <= 2
}
const arrayFilter = arrayNb.filter(fn)
console.log(arrayFilter)

const arrayTransform = arrayNb.map(function(nb) {
    return nb * 2
})
console.log(arrayTransform)

// -- object

const user = {
    name: 'ana',
    age: 42,
    'font-size': '50px',
    // enable: function() {
    //     console.log('enabled')
    // }
    enable() {
        console.log('enabled')
    },
    foo() {

    },
    cities: ['Lyon']
}

console.log(user.name)
user.name = 'ben'
// const keyName = 'age'
// user[keyName] = 50

user['font-size'] = '42px'

user.enable()
user.foo()

for (let key in user) {
    console.log(user[key])
}