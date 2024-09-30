class User {
    name = 'ana'
    _age = 18

    constructor(role = 'member') {
        this.role = role
    }
    
    getAvatar() {
        const fn = () => {
            return '/images/' + this.name + '.jpg'
        }
        return fn()
    }

    setName(name = 'default') {
        this.name = name
    }

    get age() {
        return this._age
    }

    set age(val) {
        if (val > 0 && val <= 99) {
            this._age = val
        }
    }
}

class Admin extends User {
    constructor() {
        super('admin')
    }

    setName() {
      //  super.setName()
        throw 'No !'
    }
}

const user = new Admin()

user.age = 23456789
console.log(user.age)
