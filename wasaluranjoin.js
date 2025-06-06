<style>
    .whatsapp-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 12px 25px;
        background-color: #25D366; /* Warna hijau WhatsApp */
        color: white;
        text-decoration: none;
        border-radius: 30px;
        font-size: 18px;
        font-weight: bold;
        transition: background-color 0.3s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        cursor: pointer; /* Menambahkan indikator klik */
    }

    .whatsapp-button:hover {
        background-color: #1DA851; /* Warna hijau sedikit lebih gelap saat hover */
    }

    .whatsapp-button img {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        vertical-align: middle;
    }
</style>

<div class="whatsapp-button" id="joinWhatsappChannel">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon">
    Join Saluran WhatsApp
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const whatsappButton = document.getElementById('joinWhatsappChannel');
        const channelURL = 'URL_SALURAN_WHATSAPP_ANDA'; // Ganti dengan URL saluran WhatsApp Anda

        if (whatsappButton) {
            whatsappButton.addEventListener('click', function() {
                window.open(channelURL, '_blank');
            });
        }
    });
</script>
  
