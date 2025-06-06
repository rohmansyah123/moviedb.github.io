<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tombol Join Saluran WhatsApp Responsif</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f0f2f5;
            padding: 20px; /* Tambahkan padding agar tidak terlalu mepet di layar kecil */
            box-sizing: border-box; /* Pastikan padding tidak menambah lebar total */
        }

        .whatsapp-button-container {
            width: 100%; /* Lebar kontainer default 100% */
            max-width: 400px; /* Batasi lebar maksimal di desktop */
            text-align: center; /* Pastikan tombol di tengah jika ukurannya lebih kecil dari kontainer */
        }

        .whatsapp-button {
            display: inline-flex; /* Gunakan inline-flex agar ukurannya menyesuaikan konten */
            align-items: center;
            justify-content: center;
            padding: 12px 25px;
            background-color: #25D366; /* Warna hijau WhatsApp */
            color: white;
            text-decoration: none;
            border-radius: 30px;
            font-size: 18px;
            font-weight: bold;
            transition: background-color 0.3s ease, transform 0.2s ease; /* Tambah transisi untuk transform */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            white-space: nowrap; /* Mencegah teks patah baris */
        }

        .whatsapp-button:hover {
            background-color: #1DA851; /* Warna hijau sedikit lebih gelap saat hover */
            transform: translateY(-2px); /* Efek sedikit naik saat hover */
        }

        .whatsapp-button:active {
            transform: translateY(0); /* Kembali ke posisi semula saat ditekan */
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Bayangan sedikit mengecil saat ditekan */
        }

        .whatsapp-button img {
            width: 24px;
            height: 24px;
            margin-right: 10px;
            vertical-align: middle;
            flex-shrink: 0; /* Pastikan ikon tidak mengecil */
        }

        /* --- Media Queries untuk Responsivitas --- */

        /* Untuk layar yang lebih kecil (misalnya, ponsel di bawah 768px) */
        @media (max-width: 767px) {
            .whatsapp-button {
                width: 100%; /* Tombol akan melebar sepenuh kontainer */
                font-size: 16px; /* Ukuran font lebih kecil */
                padding: 15px 20px; /* Padding sedikit lebih besar */
                box-sizing: border-box; /* Pastikan padding tidak menambah lebar total */
            }

            .whatsapp-button img {
                width: 22px;
                height: 22px;
                margin-right: 8px;
            }
        }

        /* Untuk layar menengah (misalnya, tablet antara 768px dan 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
            .whatsapp-button {
                font-size: 17px;
                padding: 14px 28px;
            }

            .whatsapp-button img {
                width: 23px;
                height: 23px;
                margin-right: 9px;
            }
        }

        /* Untuk layar desktop dan yang lebih besar (di atas 1024px) */
        @media (min-width: 1024px) {
            .whatsapp-button {
                /* Pengaturan default sudah cukup baik untuk desktop */
            }
        }
    </style>
</head>
<body>

    <div class="whatsapp-button-container">
        <div class="whatsapp-button" id="joinWhatsappChannel">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon">
            Join Saluran WhatsApp
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const whatsappButton = document.getElementById('joinWhatsappChannel');
            // GANTI DENGAN URL SALURAN WHATSAPP ANDA YANG SEBENARNYA
            const channelURL = 'https://whatsapp.com/channel/0029Va7b2f69yS4Q5w7t0X3F'; // Contoh URL
            // Anda bisa mendapatkan URL saluran dari aplikasi WhatsApp Anda.

            if (whatsappButton) {
                whatsappButton.addEventListener('click', function() {
                    window.open(channelURL, '_blank');
                });
            }
        });
    </script>

</body>
</html>
            
