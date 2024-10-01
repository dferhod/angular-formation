import { arrayUsers } from './exo3.js'


/*
const ul = document.getElementById('list')
const btn = document.getElementById('btn')

function render(user) {
    const li = document.createElement('li')
    li.textContent = user.name
    ul.appendChild(li)
}

for (let user of arrayUsers) {
    render(user)
}

btn.addEventListener('click', () => {
    const newUser = {
        name: 'ana',
        id: 1
    }
    arrayUsers.push(newUser)
    render(newUser)
})
    */

// XSS
const h1 = document.querySelector('h1')
const [,tag] = location.search.split('=')
h1.innerHTML = `Vous recherchez <strong>${tag}</strong>`
console.log(h1.innerHTML)