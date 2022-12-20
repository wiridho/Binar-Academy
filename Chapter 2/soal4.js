function isValidPassword(givenPassword) {
    let regularExpression = /^(?=.*\d)(?=.*[A-Z])[a-zA-Z\d]{8,}$/;

    if (givenPassword == undefined) {
        return "ERROR : Password can't be empty"
    }

    if (typeof (givenPassword) == 'string') {
        if (regularExpression.test(givenPassword)) {
            return true
        } else {
            return false
        }
    } else {
        return "Error: Password cannot be number"
    }
}

console.log(isValidPassword('Meong2021')) //True :  Memenuhi semua requirement
console.log(isValidPassword('@eong2021')) //False : Tidak ada huruf besar
console.log(isValidPassword('Meong2')) // False : Password kurang dari 8 karakter
console.log(isValidPassword(0)) //False : Password berupa number
console.log(isValidPassword()) //False : Tidak ada password kosong, dan parameter yang diberikan tidak boleh kosong