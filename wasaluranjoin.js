<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tombol Join Saluran dengan Play Button</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f0f2f5;
            padding: 20px;
            box-sizing: border-box;
        }

        .channel-button-container {
            width: 100%;
            max-width: 400px;
            text-align: center;
        }

        .channel-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 12px 25px;
            background-color: #007BFF; /* Mengubah warna latar belakang agar tidak lagi hijau WhatsApp */
            color: white;
            text-decoration: none;
            border-radius: 30px;
            font-size: 18px;
            font-weight: bold;
            transition: background-color 0.3s ease, transform 0.2s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            white-space: nowrap;
        }

        .channel-button:hover {
            background-color: #0056b3; /* Warna sedikit lebih gelap saat hover */
            transform: translateY(-2px);
        }

        .channel-button:active {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        /* Gaya untuk ikon Font Awesome */
        .channel-button .icon {
            margin-right: 10px;
            vertical-align: middle;
            font-size: 24px; /* Ukuran ikon */
            flex-shrink: 0;
        }

        /* --- Media Queries untuk Responsivitas --- */
        @media (max-width: 767px) {
            .channel-button {
                width: 100%;
                font-size: 16px;
                padding: 15px 20px;
                box-sizing: border-box;
            }

            .channel-button .icon {
                font-size: 22px;
                margin-right: 8px;
            }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
            .channel-button {
                font-size: 17px;
                padding: 14px 28px;
            }

            .channel-button .icon {
                font-size: 23px;
                margin-right: 9px;
            }
        }
    </style>
</head>
<body>

    <div class="channel-button-container">
        <div class="channel-button" id="joinChannelButton">
            <i class="fas fa-play icon"></i>
            Gabung Saluran
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const joinButton = document.getElementById('joinChannelButton');
            // GANTI DENGAN URL SALURAN ANDA YANG SEBENARNYA
            const channelURL = 'https://link-ke-saluran-anda.com'; // Contoh URL
            // Ini bisa berupa link ke saluran WhatsApp, Telegram, YouTube, atau lainnya.

            if (joinButton) {
                joinButton.addEventListener('click', function() {
                    window.open(channelURL, '_blank');
                });
            }
        });
    </script>

</body>
</html>
                
