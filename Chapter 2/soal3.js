function checkEmail(email) {

    const validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const secValidRegex = /^(\w+)@/;
    let res = ''

    if (email == undefined) {
        res = "ERROR : Email can't be empty"
        return res
    }

    if (typeof email === 'string') {
        if (secValidRegex.test(email)) {
            return (validRegex.test(email) ? 'Valid' : 'Invalid')
        } else {
            res = 'Incorrect email pattern'
        }
        return res;
    } else {
        res = 'ERROR : Email must be string'
    }
    return res
}

console.log(checkEmail('apranta@gmail.co.id')) //Output: Valid
console.log(checkEmail('apranta@gmail.com')) //Output: Valid
console.log(checkEmail('apranta@gmail')) // Output: Invalid
console.log(checkEmail('apranta')) // Error: Tidak ada (@)
console.log(checkEmail(000)) //Error : Karena email harus dalam bentuk string
console.log(checkEmail()) // // Error : Karena parameter kosong