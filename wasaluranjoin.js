// whatsappButton.js

(function() {
    /**
     * Fungsi untuk membuat dan menambahkan tombol "Join Saluran WhatsApp"
     * yang minimalis, modern, dan responsif secara dinamis.
     *
     * @param {string} targetElementId ID dari elemen HTML tempat tombol akan ditambahkan.
     * @param {string} whatsappChannelURL URL saluran WhatsApp yang sebenarnya.
     */
    function createWhatsAppJoinButton(targetElementId, whatsappChannelURL) {
        const targetElement = document.getElementById(targetElementId);

        if (!targetElement) {
            console.error(`Error: Elemen dengan ID "${targetElementId}" tidak ditemukan. Pastikan ID target sudah benar di HTML Anda.`);
            return;
        }

        // 1. Sisipkan Font Awesome CSS (jika belum ada)
        // Ini diperlukan untuk ikon WhatsApp.
        if (!document.querySelector('link[href*="font-awesome.min.css"]')) {
            const faLink = document.createElement('link');
            faLink.rel = 'stylesheet';
            faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
            faLink.integrity = 'sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="';
            faLink.crossOrigin = 'anonymous';
            faLink.referrerPolicy = 'no-referrer';
            document.head.appendChild(faLink);
        }

        // 2. Sisipkan custom CSS untuk tombol (minimalis & responsif)
        // CSS ini mendefinisikan tampilan dan responsivitas tombol.
        const style = document.createElement('style');
        style.textContent = `
            /* Font Impor (jika belum ada di CSS utama Anda) */
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

            /* Kontainer tombol */
            .whatsapp-button-container-dynamic {
                display: flex;
                justify-content: center; /* Pusatkan tombol secara horizontal */
                width: 100%;
                max-width: 350px; /* Batasi lebar maksimal untuk desktop */
                margin: 0 auto; /* Otomatis pusatkan kontainer jika lebarnya kurang dari 100% */
                padding: 10px; /* Sedikit padding agar tidak terlalu mepet */
                box-sizing: border-box;
            }

            /* Gaya tombol utama */
            .whatsapp-button-dynamic {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 14px 30px;
                background-color: #25D366; /* Warna hijau WhatsApp */
                color: white;
                text-decoration: none;
                border-radius: 50px; /* Bentuk pill */
                font-family: 'Inter', sans-serif;
                font-size: 17px;
                font-weight: 600;
                letter-spacing: 0.5px;
                transition: all 0.3s ease;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Bayangan lembut */
                cursor: pointer;
                white-space: nowrap; /* Cegah teks patah baris */
                border: none;
                flex-grow: 1; /* Biarkan tombol tumbuh dalam kontainer */
                max-width: 100%; /* Pastikan tidak melebihi lebar kontainer */
            }

            .whatsapp-button-dynamic:hover {
                background-color: #1EBE5A;
                transform: translateY(-2px); /* Efek naik sedikit */
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Bayangan sedikit lebih besar */
            }

            .whatsapp-button-dynamic:active {
                transform: translateY(0);
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
                background-color: #1AA74F;
            }

            /* Gaya ikon */
            .whatsapp-button-dynamic .icon {
                font-size: 20px;
                margin-right: 12px;
                flex-shrink: 0;
            }

            /* --- Media Queries untuk Responsivitas --- */
            @media (max-width: 767px) {
                .whatsapp-button-container-dynamic {
                    padding: 10px;
                }
                .whatsapp-button-dynamic {
                    font-size: 16px;
                    padding: 15px 25px;
                    width: 100%;
                }
                .whatsapp-button-dynamic .icon {
                    font-size: 18px;
                    margin-right: 10px;
                }
            }

            @media (min-width: 768px) and (max-width: 1023px) {
                .whatsapp-button-dynamic {
                    font-size: 16.5px;
                    padding: 14px 28px;
                }
                .whatsapp-button-dynamic .icon {
                    font-size: 19px;
                    margin-right: 11px;
                }
            }
        `;
        document.head.appendChild(style);

        // 3. Buat elemen kontainer (wrapper) untuk tombol
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'whatsapp-button-container-dynamic';

        // 4. Buat elemen tombol utama
        const whatsappButton = document.createElement('div');
        whatsappButton.className = 'whatsapp-button-dynamic';

        // 5. Buat elemen ikon Font Awesome
        const icon = document.createElement('i');
        icon.className = 'fab fa-whatsapp icon'; // Ikon WhatsApp

        // 6. Buat node teks untuk tombol
        const buttonText = document.createTextNode('Join Saluran WhatsApp');

        // 7. Gabungkan semua elemen ke dalam struktur DOM
        whatsappButton.appendChild(icon);
        whatsappButton.appendChild(buttonText);
        buttonContainer.appendChild(whatsappButton);

        // 8. Tambahkan kontainer tombol ke elemen target di HTML
        targetElement.appendChild(buttonContainer);

        // 9. Tambahkan event listener untuk fungsi klik
        whatsappButton.addEventListener('click', function() {
            window.open(whatsappChannelURL, '_blank'); // Buka link di tab baru
        });
    }

    // --- Ekspor Fungsi Agar Bisa Dipanggil Secara Global ---
    // Cara ini memungkinkan Anda memanggil fungsi createWhatsAppJoinButton dari HTML
    // atau dari file JS lain.
    window.createWhatsAppJoinButton = createWhatsAppJoinButton;

})(); // Immediately Invoked Function Expression (IIFE) untuk mencegah polusi global scope

// --- Contoh Penggunaan di HTML ---
/*
Anda hanya perlu menambahkan satu baris ini di HTML Anda (sebaiknya sebelum </body> penutup):

<div id="tempat-tombol-wa-anda"></div>
<script src="whatsappButton.js"></script>
<script>
    // Pastikan DOM sudah dimuat sebelum memanggil fungsi
    document.addEventListener('DOMContentLoaded', function() {
        const myChannelLink = 'https://whatsapp.com/channel/0029Va7b2f69yS4Q5w7t0X3F'; // Ganti dengan URL Saluran WA Anda
        createWhatsAppJoinButton('tempat-tombol-wa-anda', myChannelLink);
    });
</script>
*/
