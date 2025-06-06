<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tombol Join Saluran WA Modern Responsif</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <style>
        /* Base Styles & Centering */
        body {
            font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; /* Font modern */
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f8f9fa; /* Latar belakang lebih terang */
            padding: 20px;
            box-sizing: border-box;
            color: #333;
        }

        /* Container for the button */
        .button-wrapper {
            width: 100%;
            max-width: 350px; /* Batasi lebar maksimal tombol untuk tampilan desktop */
            text-align: center;
        }

        /* Modern Minimalist Button Styling */
        .whatsapp-join-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 14px 30px; /* Padding lebih proporsional */
            background-color: #25D366; /* Warna hijau WhatsApp */
            color: white;
            text-decoration: none;
            border-radius: 50px; /* Sangat melengkung untuk tampilan modern */
            font-size: 17px;
            font-weight: 600; /* Sedikit lebih tebal */
            letter-spacing: 0.5px; /* Spasi antar huruf */
            transition: all 0.3s ease; /* Transisi untuk semua properti */
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Bayangan lebih halus */
            cursor: pointer;
            white-space: nowrap; /* Mencegah teks patah baris */
            border: none; /* Hilangkan border default */
        }

        /* Hover & Active States */
        .whatsapp-join-button:hover {
            background-color: #1EBE5A; /* Warna hijau sedikit lebih gelap saat hover */
            transform: translateY(-3px); /* Efek naik ringan */
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Bayangan lebih besar */
        }

        .whatsapp-join-button:active {
            transform: translateY(0); /* Kembali ke posisi semula saat ditekan */
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); /* Bayangan mengecil */
            background-color: #1AA74F; /* Warna sedikit lebih gelap lagi */
        }

        /* Icon Styling */
        .whatsapp-join-button .icon {
            font-size: 20px; /* Ukuran ikon */
            margin-right: 12px; /* Jarak ikon dengan teks */
            flex-shrink: 0; /* Pastikan ikon tidak mengecil */
        }

        /* --- Responsive Adjustments (Media Queries) --- */

        /* Untuk layar lebih kecil (Ponsel: <= 767px) */
        @media (max-width: 767px) {
            .whatsapp-join-button {
                width: 100%; /* Tombol melebar penuh */
                font-size: 16px;
                padding: 16px 25px; /* Padding lebih besar untuk sentuhan */
                box-sizing: border-box;
            }

            .whatsapp-join-button .icon {
                font-size: 18px;
                margin-right: 10px;
            }
        }

        /* Untuk layar menengah (Tablet: 768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
            .whatsapp-join-button {
                font-size: 16.5px;
                padding: 15px 28px;
            }

            .whatsapp-join-button .icon {
                font-size: 19px;
                margin-right: 11px;
            }
        }

        /* Untuk layar besar (Desktop: >= 1024px) */
        @media (min-width: 1024px) {
            .whatsapp-join-button {
                /* Pengaturan default sudah optimal untuk desktop */
            }
        }
    </style>
</head>
<body>

    <div class="button-wrapper">
        <div class="whatsapp-join-button" id="joinWhatsappChannel">
            <i class="fab fa-whatsapp icon"></i>
            Join Saluran WhatsApp
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const joinButton = document.getElementById('joinWhatsappChannel');
            // GANTI DENGAN URL SALURAN WHATSAPP ANDA YANG SEBENARNYA
            const channelURL = 'https://whatsapp.com/channel/0029Va7b2f69yS4Q5w7t0X3F'; // Contoh URL. Temukan URL saluran Anda di pengaturan WhatsApp.

            if (joinButton) {
                joinButton.addEventListener('click', function() {
                    window.open(channelURL, '_blank');
                });
            }
        });
    </script>

</body>
</html>
                
