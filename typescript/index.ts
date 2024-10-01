import axios from 'axios'

axios.get()

const bool: boolean = true
const nb: (number | string)[] = [1, 2, 3, 4]
const array: number[] | string[] = []
const position: [number, number] = [10, 4]
let city: 'paris' | 'lyon' | 'marseille' = 'paris'
let age: number | undefined
const add = function(a: number, b: number): number {
    return a + b
}

const nb1 = add(1, 2)

interface User {
    name: string,
    age: number
}

const user: User = {
    name: 'ana',
    age: 42
}

// type MyType = number | null

// const val: MyType = user as string

const obj: User = {} as User


