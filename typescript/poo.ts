enum Role {
    Admin = 'admin',
    Member = 'member'
}

interface UserInterface {
    getName?(): string
    role?: Role
}

class User implements UserInterface {
    role: Role = Role.Member

    constructor(private name: string, private age: number) { }

    getName(): string {
        return this.name
    }
}

const user = new User('ana', 42)
user.role