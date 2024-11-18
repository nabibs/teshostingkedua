// script.js
document.getElementById("changeMessage").addEventListener("click", function() {
    const messages = [
        "Semoga kebahagiaan selalu menemanimu, sayang! ❤️",
        "Terima kasih sudah menjadi bagian terbaik dalam hidupku! 🎉",
        "Selamat ulang tahun! Semoga setiap harimu penuh cinta dan tawa! 🥰",
        "Pesan ku: Makasih sayang Udah temanin aku mau 2 tahun berjalan, maafin aku banyak salahnya dari omongan maupun perbuatan dan masih banyak kurangnya untuk kamu, juga kadang sukak ngeselin... Semoga bertambahnya umur juga bisa bertambah juga rezekinyaaaa, diberikan kesehatan dan panjang umurrr, trus makin cantikkkk, nurut sama orang tuaa, kakaknya, ya pokonya jadilah versi terbaik mu dari umur 19tahun iniiiii, WOOOP YOUUUU SAYANGGGGG HAPPY SWEET NINETEEN AWOKAOWKOAKWOOAKWKA yahahaahahahahaha TUA"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.querySelector(".message").textContent = randomMessage;
});

document.getElementById("confettiButton").addEventListener("click", function() {
    document.getElementById("confetti").style.display = "block";
    createConfetti();
});

document.getElementById("moneyButton").addEventListener("click", function() {
    openMoneyTab();
});

function openMoneyTab() {
    const qrisImageUrl = 'pic/1.jpg';

    const moneyWindow = window.open("", "_blank", "width=500,height=600");

    if (moneyWindow) {
        moneyWindow.document.write(`
            <html lang="id">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Hadiah Uang - QRIS</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        padding: 20px;
                        background-color: #fce4ec;
                    }
                    h1 {
                        color: #ff4081;
                        font-size: 2.5em;
                        margin-bottom: 20px;
                    }
                    .qris-image {
                        width: 250px;
                        margin: 20px 0;
                    }
                    .message {
                        font-size: 1.5em;
                        color: #555;
                    }
                </style>
            </head>
            <body>
                <h1>Selamat Ulang Tahun, Sayang!</h1>
                <p class="message"><a href="https://wa.me/6281388446508?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20produk%21" 
       class="whatsapp-button" 
       target="_blank">
        KLIK INI UNTUK PALAK NABIBBBBBBBB
    </a>         
            </body>
            </html>
        `);
    } else {
        alert('Tab baru diblokir. Harap aktifkan pop-up pada browser kamu.');
    }
}

function createConfetti() {
    const confettiContainer = document.getElementById("confetti");
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("span");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confettiContainer.appendChild(confetti);
    }
}