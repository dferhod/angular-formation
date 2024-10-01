function identite<T, V>(arg: T): V {
    return arg as any
}

const val = identite<string, number>('42')
val.toLowerCase()