const translations = {
    en: {
        subtitle: "Join us for our wedding celebration",
        "date-location-title": "Date & Location",
        date: "Date: July 18, 2025",
        location: "Location: Rose Garden Venue, 123 Wedding Lane, City, Country",
        "dress-code-title": "Dress Code",
        "dress-code-text": "Formal Attire - please wear pastel colors if possible.",
        "hotels-title": "Recommended Hotels",
        hotel1: "Rose Hotel - 2 min walk from venue",
        hotel2: "Garden Suites - 5 min drive",
        hotel3: "City Center Inn - 10 min drive",
        "rsvp-title": "RSVP",
        "rsvp-text": "Please email your RSVP to <a href=\"mailto:wedding@example.com\">wedding@example.com</a> by June 15, 2025.",
        "footer-text": "We can’t wait to celebrate with you! 💕"
    },
    es: {
        subtitle: "Únete a nuestra celebración de boda",
        "date-location-title": "Fecha y Lugar",
        date: "Fecha: 18 de julio de 2025",
        location: "Lugar: Rose Garden Venue, 123 Wedding Lane, Ciudad, País",
        "dress-code-title": "Código de vestimenta",
        "dress-code-text": "Traje formal - por favor usa colores pastel si es posible.",
        "hotels-title": "Hoteles recomendados",
        hotel1: "Hotel Rose - a 2 min caminando del lugar",
        hotel2: "Garden Suites - a 5 min en coche",
        hotel3: "City Center Inn - a 10 min en coche",
        "rsvp-title": "Confirmación de asistencia",
        "rsvp-text": "Por favor envía tu confirmación a <a href=\"mailto:wedding@example.com\">wedding@example.com</a> antes del 15 de junio de 2025.",
        "footer-text": "¡Estamos emocionados de celebrar contigo! 💕"
    },
    ru: {
        subtitle: "Присоединяйтесь к нашему свадебному торжеству",
        "date-location-title": "Дата и место",
        date: "Дата: 18 июля 2025 года",
        location: "Место: Rose Garden Venue, 123 Wedding Lane, Город, Страна",
        "dress-code-title": "Дресс-код",
        "dress-code-text": "Официальная одежда - пожалуйста, по возможности пастельные цвета.",
        "hotels-title": "Рекомендуемые отели",
        hotel1: "Rose Hotel - 2 мин пешком от места проведения",
        hotel2: "Garden Suites - 5 мин на машине",
        hotel3: "City Center Inn - 10 мин на машине",
        "rsvp-title": "Подтверждение участия",
        "rsvp-text": "Пожалуйста, отправьте подтверждение на <a href=\"mailto:wedding@example.com\">wedding@example.com</a> до 15 июня 2025 года.",
        "footer-text": "Мы с нетерпением ждем празднования с вами! 💕"
    },
    de: {
        subtitle: "Feiere mit uns unsere Hochzeit",
        "date-location-title": "Datum & Ort",
        date: "Datum: 18. Juli 2025",
        location: "Ort: Rose Garden Venue, 123 Wedding Lane, Stadt, Land",
        "dress-code-title": "Dresscode",
        "dress-code-text": "Formelle Kleidung - bitte nach Möglichkeit Pastellfarben tragen.",
        "hotels-title": "Empfohlene Hotels",
        hotel1: "Rose Hotel - 2 Min. zu Fuß vom Veranstaltungsort",
        hotel2: "Garden Suites - 5 Min. mit dem Auto",
        hotel3: "City Center Inn - 10 Min. mit dem Auto",
        "rsvp-title": "Rückmeldung (RSVP)",
        "rsvp-text": "Bitte sende deine Rückmeldung an <a href=\"mailto:wedding@example.com\">wedding@example.com</a> bis zum 15. Juni 2025.",
        "footer-text": "Wir können es kaum erwarten, mit dir zu feiern! 💕"
    }
};

$(function() {
    console.log('Wedding page loaded');
    $('#language-selector').on('change', function(e) {
        console.log('Language changed to:', this.value);

        const lang = e.target.value;
        const selected = translations[lang];
        for (const id in selected) {
            const el = document.getElementById(id);
            if (el) {
                if (id === 'rsvp-text') {
                    el.innerHTML = selected[id];
                } else {
                    el.textContent = selected[id];
                }
            }
        }
    })
    $('#language-selector').change(); // Trigger change to set initial language

})