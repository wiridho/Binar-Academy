function checkTypeNumber(givenNumber) {
    if (typeof (givenNumber) === 'number') {
        return (givenNumber % 2 === 0 ? 'genap' : 'ganjil')
    } else if (givenNumber === undefined) {
        return ('Where is the parameter?')
    } else {
        return ('Invalid Data Type')
    }
}

console.log(checkTypeNumber(10)) //Output: Genap
console.log(checkTypeNumber(3)) //Output: Ganjil
console.log(checkTypeNumber("3")) //Output: Invalid Data Type
console.log(checkTypeNumber({})) //Output: Invalid Data Type
console.log(checkTypeNumber([])) //Output: Invalid Data Type
console.log(checkTypeNumber()) //Output : Where is the parameter?