interface UserModel {
    username: string
    email: string
    age: number
    isActive: boolean
}

const userList: UserModel[] = [{
    username: 'test',
    email: 'dzadzd',
    age: 15,
    isActive: true
}]

function displayUsers(array: UserModel[]): void {
   for (let user of array) {
        console.log(user)
   }
}

displayUsers(userList)