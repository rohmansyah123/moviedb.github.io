/**
 * Fungsi untuk membuat dan menambahkan tombol "Join Saluran WhatsApp" yang modern, minimalis, dan responsif.
 *
 * @param {string} targetElementId ID dari elemen HTML tempat tombol akan ditambahkan.
 * @param {string} whatsappChannelURL URL saluran WhatsApp yang sebenarnya.
 */
function createWhatsAppJoinButton(targetElementId, whatsappChannelURL) {
    const targetElement = document.getElementById(targetElementId);

    if (!targetElement) {
        console.error(`Elemen dengan ID "${targetElementId}" tidak ditemukan.`);
        return;
    }

    // 1. Buat elemen <style> untuk CSS
    const style = document.createElement('style');
    style.textContent = `
        /* Font modern */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

        /* Base Styles & Centering (as a reference for context, normally these would be in your main CSS) */
        body {
            font-family: 'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background-color: #f8f9fa;
            padding: 20px;
            box-sizing: border-box;
            color: #333;
        }

        /* Container for the button */
        .button-wrapper {
            width: 100%;
            max-width: 350px;
            text-align: center;
            /* Flexbox atau Grid untuk menempatkan tombol di tengah jika diperlukan */
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* Modern Minimalist Button Styling */
        .whatsapp-join-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 14px 30px;
            background-color: #25D366; /* Warna hijau WhatsApp */
            color: white;
            text-decoration: none;
            border-radius: 50px;
            font-size: 17px;
            font-weight: 600;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
            cursor: pointer;
            white-space: nowrap;
            border: none;
        }

        /* Hover & Active States */
        .whatsapp-join-button:hover {
            background-color: #1EBE5A;
            transform: translateY(-3px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .whatsapp-join-button:active {
            transform: translateY(0);
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
            background-color: #1AA74F;
        }

        /* Icon Styling */
        .whatsapp-join-button .icon {
            font-size: 20px;
            margin-right: 12px;
            flex-shrink: 0;
        }

        /* --- Responsive Adjustments (Media Queries) --- */

        /* Untuk layar lebih kecil (Ponsel: <= 767px) */
        @media (max-width: 767px) {
            .whatsapp-join-button {
                width: 100%;
                font-size: 16px;
                padding: 16px 25px;
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
    `;
    document.head.appendChild(style);

    // 2. Tambahkan Font Awesome (jika belum ada)
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';
        link.integrity = 'sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="';
        link.crossOrigin = 'anonymous';
        link.referrerPolicy = 'no-referrer';
        document.head.appendChild(link);
    }

    // 3. Buat elemen <div> pembungkus (button-wrapper)
    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'button-wrapper';

    // 4. Buat elemen <div> tombol (whatsapp-join-button)
    const whatsappButton = document.createElement('div');
    whatsappButton.className = 'whatsapp-join-button';
    whatsappButton.id = 'dynamicWhatsappChannelButton'; // Beri ID unik jika perlu

    // 5. Buat elemen <i> untuk ikon Font Awesome
    const icon = document.createElement('i');
    icon.className = 'fab fa-whatsapp icon'; // Kelas Font Awesome untuk ikon WhatsApp

    // 6. Buat teks tombol
    const buttonText = document.createTextNode('Join Saluran WhatsApp');

    // 7. Gabungkan elemen-elemen
    whatsappButton.appendChild(icon);
    whatsappButton.appendChild(buttonText);
    buttonWrapper.appendChild(whatsappButton);

    // 8. Tambahkan wrapper ke target elemen di HTML
    targetElement.appendChild(buttonWrapper);

    // 9. Tambahkan event listener ke tombol
    whatsappButton.addEventListener('click', function() {
        window.open(whatsappChannelURL, '_blank');
    });
}

// --- Cara Menggunakan Fungsi Ini ---
// Pastikan elemen dengan ID 'yourContainerId' ada di HTML Anda, misalnya: <div id="yourContainerId"></div>

// Contoh pemanggilan fungsi setelah DOM dimuat:
document.addEventListener('DOMContentLoaded', function() {
    const myWhatsappLink = 'https://whatsapp.com/channel/0029Va7b2f69yS4Q5w7t0X3F'; // Ganti dengan URL saluran Anda
    createWhatsAppJoinButton('whatsapp-button-spot', myWhatsappLink);
});
