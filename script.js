document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById('theme-toggle-btn');
    const greetButton = document.getElementById('greet-btn');
    const greetingMessage = document.getElementById('greeting-message');
    const body = document.body;
    let isDarkMode = true; 
    const LIGHT_BACKGROUND = '#f0f0f0';
    const LIGHT_TEXT_PRIMARY = '#121212';
    const LIGHT_TEXT_SECONDARY = '#333333';
    const LIGHT_ACCENT_BG = '#ffffff';
    const LIGHT_ACCENT_TEXT = '#005666'; 
    const backgroundElements = document.querySelectorAll('header, nav, section, #interactive-area, .experience-grid .grid-item, footer');
    const accentTextElements = document.querySelectorAll('h1, h2, h3, h4, nav a, .social-links a');
    const paragraphElements = document.querySelectorAll('p, .role, .contact-info');
    function toggleTheme() {
        console.log("Tombol 'Ubah Warna Tema' diklik. Status tema diubah.");
        
        if (isDarkMode) {
            body.style.backgroundColor = LIGHT_BACKGROUND;
            body.style.color = LIGHT_TEXT_PRIMARY;
            backgroundElements.forEach(el => {
                el.style.backgroundColor = LIGHT_ACCENT_BG; 
                if (el.classList.contains('grid-item')) {
                    el.style.borderLeft = '3px solid ' + LIGHT_ACCENT_TEXT;
                }
            });
            accentTextElements.forEach(el => {
                 el.style.color = LIGHT_ACCENT_TEXT; 
            });

            paragraphElements.forEach(el => {
                el.style.color = LIGHT_TEXT_SECONDARY; 
            });

            themeButton.textContent = 'Ubah ke Dark Mode';
            isDarkMode = false;

        } else {
            body.style.backgroundColor = '';
            body.style.color = '';
            [...backgroundElements, ...accentTextElements, ...paragraphElements].forEach(el => {
                el.style.backgroundColor = ''; 
                el.style.color = '';
                if (el.classList.contains('grid-item')) {
                    el.style.borderLeft = '';
                }
            });
            themeButton.textContent = 'Ubah ke Light Mode';
            isDarkMode = true;
        }
    }

    themeButton.addEventListener('click', toggleTheme);
    function greetUser() {

        console.log("Tombol 'Sapa Saya' diklik. Meminta input nama.");

        let visitorName = prompt("Hai! Siapa nama Anda?");

        if (visitorName) {

            visitorName = visitorName.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;"); 
  
            const greeting = `Halo, **${visitorName}**! Terima kasih sudah mengunjungi Profil saya.`;

            greetingMessage.innerHTML = greeting.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

            console.log(`[SAPAAAN BERHASIL]: Teks sapaan ditampilkan.`);
            
        } else {

            greetingMessage.innerHTML = "*Selamat datang, Pengunjung Rahasia!*";
             console.log("[SAPAAAN DIBATALKAN]: Pengunjung membatalkan input nama.");
        }
    }
    
    greetButton.addEventListener('click', greetUser);
});
