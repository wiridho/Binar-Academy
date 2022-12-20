
let angka = [9, 8, 7, 7, 10, 10, 2, 1, 8, 7, 8, 11]


function getAngkaTerbesarKedua(angka) {
    let removedupl = new Set(angka); //Mengubah menjadi set dan berbentuk object
    let arrayNumber = Array.from(removedupl).sort(function (a, b) { //konversi ke array lalu mensorting angka
        return b - a;
    })
    return arrayNumber[1]; //mengambil angka terbesar kedua
}

console.log(getAngkaTerbesarKedua(angka));