function getSplitName(personName) {
    if (typeof personName === 'string') {
        let names = personName.split(' ');
        if (names.length === 1) {
            console.log({ firstname: names[0], middlenames: null, lastname: null });
        } else if (names.length === 2) {
            console.log({ firstname: names[0], middlenames: null, lastname: names[names.length - 1] });
        } else if (names.length === 3) {
            console.log({ firstname: names[0], middlenames: names.slice(1, 2).join(' '), lastname: names[names.length - 1] });
        } else {
            console.log("This function is only for 3 characters name")
        }
    } else {
        console.log("Error ")
    }
}

getSplitName('Wiridho Partuaon Tambunan')
getSplitName('Dwi Kuncoro')
getSplitName('Dwi')
getSplitName('Dwi Kuncoro Sukma Darma')
getSplitName(0) //Error : Paramater yang diberikan harus string