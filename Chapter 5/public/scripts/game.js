// Menangkap pilihan dari komputer
function getCompChoice() {
    const comp = Math.random();
    if (comp < (1 / 3)) return 'rock';
    if (comp >= (1 / 3) && comp < (2 / 3)) return 'paper';
    return 'scissor';
}

// Peraturan permainan
let result = null;

function getResult(comp, player) {
    if (player == comp) return result = 'DRAW';
    if (player == 'rock') return (comp == 'scissor') ? result = 'PLAYER 1 WIN' : result = 'COM WIN';
    if (player == 'paper') return (comp == 'rock') ? result = 'PLAYER 1 WIN' : result = 'COM WIN';
    if (player == 'scissor') return (comp == 'paper') ? result = 'PLAYER 1 WIN' : result = 'COM WIN';
}

/* DOM Selector */
const versus = document.querySelector('.versus h1');
const resultClass = document.querySelector('.versus div div');
const textResult = document.querySelector('.versus h5');
const compBox = document.querySelectorAll('.greyBox.compImage');
const playerBox = document.querySelectorAll('.greyBox.playerImage');

/* Memberi delay untuk membuat komputer seperti berpikir */
function wait() {
    const start = new Date().getTime();
    let i = 0;

    setInterval(function () {
        /* Jalankan fungsi dalam waktu 1 detik */
        if (new Date().getTime() - start >= 1000) {
            clearInterval;
            return;
        }

        /* Memberi kotak abu" pada gambar agar dapat mengetahui pilihan computer */
        compBox[i++].style.backgroundColor = '#c4c4c4';
        if (i == compBox.length) i = 0;

        /* Hilangkan kembali class result saat wait () */
        resultClass.classList.remove('result');

        /* Menampilkan kembali tulisan VS saat wait () */
        versus.style.color = 'rgb(189,48,46)';

    }, 50);

    setTimeout(function () {
        setInterval(function () {
            if (new Date().getTime() - start >= 1200) {
                clearInterval;
                return;
            }

            /* Handling agar Menyamarkan greyBox dengan bgColor supaya tidak semuanya memiliki greyBox berwarna abu */
            compBox[i++].style.backgroundColor = '#9c835f';
            if (i == compBox.length) i = 0;
        }, 50);
    }, 50);
}


// Menangkap pilihan pemain 
const player = document.querySelectorAll('.contentImage .player');
player.forEach(function (choice) {
    choice.addEventListener('click', function () {

        // Samarkan seluruh greyBox pada sisi player saat game dijalankan 
        for (let i = 0; i < playerBox.length; i++) {
            playerBox[i].style.backgroundColor = '#9c835f';
        }

        /* Eventlistener  dikerjakan apabila result masih dalam kondisi null */
        if (result === null) {

            // Menangkap pilihan komputer 
            const compChoice = getCompChoice();

            // Menangkap pilihan pemain 
            const playerChoice = choice.className.substr(7, 7);

            //Menjalankan Rules permainan untuk mendapatkan hasil 
            result = getResult(compChoice, playerChoice);

            // Berikan greyBox pada pilihan pemain
            if (playerChoice == 'rock') {
                playerBox[0].style.backgroundColor = '#c4c4c4';
            } else if (playerChoice == 'paper') {
                playerBox[1].style.backgroundColor = '#c4c4c4';
            } else {
                playerBox[2].style.backgroundColor = '#c4c4c4';
            }

            // Menjalankan fungsi wait agar komputer terlihat berpikir dahulu */
            wait();

            /* Jalankan seluruh perintah dibawah setelah fungsi wait selesai dijalankan */
            setTimeout(function () {
                /* Samarkan tulisan VS dengan background saat hasil ditampilkan */
                versus.style.color = '#9c835f';

                /* Tampilkan class result */
                resultClass.classList.add('result');

                /* Tampilkan hasil dalam class result (kotak hijau) */
                textResult.innerHTML = result;
                if (result == "DRAW") {
                    textResult.style.backgroundColor = '#225c0e';
                } else {
                    textResult.style.backgroundColor = '#4c9654';
                }

                /* Berikan greyBox pada comp choice */
                if (compChoice == 'rock') {
                    compBox[0].style.backgroundColor = '#c4c4c4';
                } else if (compChoice == 'paper') {
                    compBox[1].style.backgroundColor = '#c4c4c4';
                } else {
                    compBox[2].style.backgroundColor = '#c4c4c4';
                }
            }, 1200);
        } else {
            alert('Tekan Refresh jika ingin mengulang !');
        }
    });
});

// Mereset game dengan refresh
const reset = document.querySelector('.refresh');
reset.addEventListener('click', function () {
    //Menghapus tulisan hasil dalam result
    textResult.innerHTML = '';

    /* Hilangkan kembali class result */
    resultClass.classList.remove('result');

    //Menghilangkan greybox
    for (let i = 0; i < compBox.length; i++) {
        playerBox[i].style.backgroundColor = '#9c835f';
        compBox[i].style.backgroundColor = '#9c835f';
    }

    // Tampilkan kembali tulisan VS 
    versus.style.color = 'rgb(189,48,46)';

    // Mereset kembali result menjadi null agar dapat melakukan permainan kembali
    result = null;
});