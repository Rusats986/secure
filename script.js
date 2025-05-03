document.addEventListener('DOMContentLoaded', () => {

    // AOS анимацияларын инициализациялау
    AOS.init({
        duration: 800, // Анимация ұзақтығы (миллисекунд)
        once: true // Анимация тек бір рет ойнатылады
    });

    // Мобильді менюді қосу/өшіру
    const menuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('header nav');

    if (menuButton && nav) {
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('active'); // 'active' класын қосу/алу
        });
    }

    // Белсенді бетті навигацияда белгілеу
    const navLinks = document.querySelectorAll('header nav a');
    const currentPath = window.location.pathname.split('/').pop(); // Ағымдағы файл аты

    navLinks.forEach(link => {
        // Егер сілтеме адресі ағымдағы бетке сәйкес келсе немесе басты бет болса ('index.html' немесе '/')
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Басқа сілтемелерден active класын алу
        }
    });


    // Интерактивті карта логикасы
    const mapPoints = document.querySelectorAll('.map-point');
    const infoBox = document.getElementById('map-info-box');

    if (mapPoints.length > 0 && infoBox) {
        const countryInfo = {
            "АҚШ": "Әлемдегі ең көп жұмыс істеп тұрған ядролық реакторларға ие (90+). Электр энергиясының ~20% өндіреді.",
            "Франция": "Электр энергиясының үлкен бөлігін (~70%) ядролық энергетикадан алады. Технологиялық көшбасшылардың бірі.",
            "Қытай": "Ядролық энергетиканы белсенді дамытып жатқан ел. Жаңа реакторлар саны бойынша алда.",
            "Ресей": "Ядролық технологиялардың пионері. Әртүрлі типтегі реакторлар, соның ішінде мұзжарғыштарға арналған реакторлар бар.",
            "Жапония": "Фукусима апатынан кейін көптеген реакторлар тоқтатылды, бірақ кейбірі қайта іске қосылуда.",
            "Канада": "Негізінен CANDU типті (ауыр сулы) реакторларды пайдаланады.",
            "Қазақстан": "Әлемдегі ең ірі уран өндіруші. Бұрын Ақтауда БН-350 реакторы жұмыс істеген (қазір тоқтатылған), зерттеу реакторлары бар."
            // Басқа елдер туралы ақпаратты осы жерге қосыңыз
        };

        mapPoints.forEach(point => {
            point.addEventListener('click', () => {
                const countryName = point.getAttribute('data-country');
                infoBox.textContent = countryInfo[countryName] || `${countryName} туралы ақпарат табылмады.`;
            });
        });
    }

});