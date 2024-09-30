function user() {
    const name = 'ana'

    function enable() {
        console.log(name)
    } // closure

    enable()
}

user()