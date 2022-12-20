const dataPenjualanNovel = [
	{
		idProduct: 'BOOK002421',
		namaProduk: 'Pulang - Pergi',
		penulis: 'Tere Liye',
		hargaBeli: 60000,
		hargaJual: 86000,
		totalTerjual: 150,
		sisaStok: 17,
	},
	{
		idProduct: 'BOOK002351',
		namaProduk: 'Selamat Tinggal',
		penulis: 'Tere Liye',
		hargaBeli: 75000,
		hargaJual: 103000,
		totalTerjual: 171,
		sisaStok: 20,
	},
	{
		idProduct: 'BOOK002941',
		namaProduk: 'Garis Waktu',
		penulis: 'Fiersa Besari',
		hargaBeli: 67000,
		hargaJual: 99000,
		totalTerjual: 213,
		sisaStok: 5,
	},
	{
		idProduct: 'BOOK002941',
		namaProduk: 'Laskar Pelangi',
		penulis: 'Andrea Hirata',
		hargaBeli: 55000,
		hargaJual: 68000,
		totalTerjual: 20,
		sisaStok: 56,
	},
];

function getInfoPenjualan(dataPenjualan) {
	let modal = 0;
	let hasilJual = 0;
	let terjual = 0;
	let bukuTerlaris;
	let penulisBuku;

	for (let i = 0; i < dataPenjualan.length; i++) {
		modal += dataPenjualan[i].hargaBeli * (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok);
		hasilJual += (dataPenjualan[i].hargaJual * dataPenjualan[i].totalTerjual)

		//Mencari Produk buku terlaris
		if (dataPenjualan[i].totalTerjual > terjual) {
			terjual = dataPenjualan[i].totalTerjual
			bukuTerlaris = dataPenjualan[i].namaProduk
			penulisBuku = dataPenjualan[i].penulis
		}
	}

	keuntungan = hasilJual - modal 	// Mencari Keuntungan 

	persentase = ((keuntungan / modal) * 100).toFixed(2); //Mencari Persentase Keuntungan 

	//Function format Rupiah
	const rupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR"
		}).format(number);
	}

	return {
		totalModal: `Rp.${modal.toLocaleString('id-ID')}`,
		totalKeuntungan: `Rp.${keuntungan.toLocaleString('id-ID')}`,
		persentaseKeuntungan: `${persentase} %`,
		produkBukuTerlaris: `${bukuTerlaris}`,
		penulisTerlaris: `${penulisBuku}`
	}
}

console.log(getInfoPenjualan(dataPenjualanNovel))