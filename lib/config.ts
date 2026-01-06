export const siteConfig = {
  couple: {
    name1: "Carol Castillo",
    name2: "Juan Fernando González",
    shortName1: "Carol",
    shortName2: "Juan Fernando",
  },
  
  wedding: {
    date: new Date("2026-11-14T16:00:00"),
    dateString: "Sábado 14 de noviembre de 2026",
    day: "14",
    month: "Noviembre",
    year: "2026",
    ceremony: {
      name: "Iglesia Santa María Reina de la Familia, Cayala",
      address: "Ciudad Cayala, Zona 16",
      city: "Ciudad de Guatemala",
      time: "16:00",
      coordinates: {
        lat: 14.5897,
        lng: -90.5197,
      },
      googleMapsLink: "https://maps.google.com/?q=JG67%2BHPC+Blvr+Rafael+Landivar+Guatemala",
      wazeLink: "https://waze.com/ul/h9fxehun92",
    },
    reception: {
      name: "Real InterContinental Guatemala by IHG",
      address: "14 Calle 2-51, Zona 10",
      city: "Ciudad de Guatemala",
      time: "19:30",
      coordinates: {
        lat: 14.5958,
        lng: -90.5069,
      },
      googleMapsLink: "https://maps.google.com/?q=InterContinental+Real+Guatemala",
      wazeLink: "https://waze.com/ul/h9fxeh391m",
    },
    venue: {
      name: "Iglesia Santa María Reina de la Familia",
      address: "JG67+HPC, Blvr. Rafael Landivar",
      city: "Ciudad de Guatemala",
      coordinates: {
        lat: 14.5897,
        lng: -90.5197,
      },
      wazeLink: "https://waze.com/ul?ll=14.5897,-90.5197&navigate=yes",
      googleMapsLink: "https://maps.google.com/?q=JG67%2BHPC+Blvr+Rafael+Landivar+Guatemala",
    },
  },

  photos: {
    hero: "/puesta-anillo.jpg",
    story: [
      "/placeholders/story-1.svg",
      "/placeholders/story-2.svg",
    ],
    gallery: [
      "/placeholders/gallery-1.svg",
      "/placeholders/gallery-2.svg",
      "/placeholders/gallery-3.svg",
      "/placeholders/gallery-4.svg",
      "/placeholders/gallery-5.svg",
      "/placeholders/gallery-6.svg",
    ],
    rsvp: "/will-you-marry-me.jpg",
    footer: "/placeholders/footer.svg",
  },

  content: {
    hero: {
      title: "Save the Date",
      subtitle: "Estás cordialmente invitado/a a celebrar con nosotros",
    },
    welcome: {
      message: "Tu presencia es el regalo más valioso que podemos recibir en este día tan especial.",
    },
    story: {
      title: "Nuestra Historia",
      text: "Dos almas que se encontraron en el momento perfecto. Lo que comenzó como una mirada, floreció en risas compartidas, sueños entrelazados y un amor que crece cada día. Después de años construyendo recuerdos inolvidables juntos, hoy nos preparamos para dar el paso más importante: unir nuestras vidas para siempre. Y queremos que tú seas parte de este nuevo capítulo.",
    },
    gallery: {
      title: "Momentos que Atesoramos",
    },
    countdown: {
      title: "Cuenta Regresiva",
      labels: {
        days: "Días",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos",
      },
    },
    program: {
      title: "Programa del Día",
      events: [
        {
          time: "16:00",
          title: "Misa",
          description: "Iglesia Santa María Reina de la Familia. Te pedimos llegar con anticipación.",
        },
        {
          time: "19:30",
          title: "Recepción",
          description: "Cena de gala con servicio a la mesa y barra libre.",
        },
        {
          time: "20:00",
          title: "Primer Baile y brindis",
          description: "Acompáñanos en nuestro primer baile como esposos y brindemos por nuestra unión.",
        },
        {
          time: "21:00",
          title: "Cena",
          description: "Disfruta de una cena a la mesa junto a nosotros.",
        },
        {
          time: "22:00",
          title: "¡A Bailar!",
          description: "La fiesta continúa hasta la 1:00 de la mañana. ¡No te lo pierdas!",
        },
      ],
    },
    directions: {
      title: "Cómo Llegar",
      description: "Nuestra celebración tendrá dos ubicaciones",
      ceremony: {
        title: "Misa",
        description: "La ceremonia religiosa se llevará a cabo en la hermosa Iglesia Santa María Reina de la Familia.",
      },
      reception: {
        title: "Recepción y Cena",
        description: "La recepción y cena de gala será en el elegante Real InterContinental Guatemala.",
      },
    },
    waze: {
      title: "Navega con Waze",
      description: "Abre la dirección directamente en Waze para llegar sin contratiempos",
      buttonText: "Abrir en Waze",
      ceremonyButton: "Ir a la Iglesia",
      receptionButton: "Ir al Hotel",
    },
    accommodation: {
      title: "Hospedaje",
      description: "Para aquellos invitados que deseen quedarse en el hotel, pueden hospedarse en el Real InterContinental Guatemala. Nuestros invitados tienen acceso a una tarifa especial por nuestra boda.",
      hotelName: "Real InterContinental Guatemala by IHG",
      rates: {
        withoutBreakfast: {
          title: "Noche sin Desayuno",
          price: "$129",
          taxes: "+ 22% de impuestos",
          description: "Habitación sencilla o doble por evento",
        },
        withBreakfast: {
          title: "Noche con Desayuno",
          price: "$149",
          taxes: "+ 22% de impuestos",
          description: "Habitación sencilla o doble con desayuno incluido por evento",
        },
      },
      contactInfo: "Para reservar, por favor contacta directamente al hotel mencionando la boda de Carol y Juan Fernando.",
    },
    dressCode: {
      title: "Código de Vestimenta",
      description: "Etiqueta Formal",
      details: "Caballeros: Traje oscuro o smoking. Damas: Vestido largo o de cocktail elegante. Los colores neutros, pasteles y tonos joya son bienvenidos. Por favor evitar el color blanco, reservado para la novia.",
    },
    codeOfConduct: {
      title: "Código de Conducta",
      description: "No fumar cigarros ni cigarros electrónicos.",
      additional: "Agradecemos tu comprensión. Por favor, confirma tu asistencia antes del 15 de octubre de 2026.",
    },
    rsvp: {
      title: "Confirma tu Asistencia",
      description: "Tu presencia es el mejor regalo que podemos recibir. Por favor completa el siguiente formulario para confirmar tu asistencia.",
      deadline: "Fecha límite: 15 de octubre de 2026",
      fields: {
        name: {
          label: "Nombre completo",
          placeholder: "Tu nombre completo",
          error: "Por favor ingresa tu nombre",
        },
        email: {
          label: "Correo electrónico",
          placeholder: "tu@email.com",
          error: "Por favor ingresa un email válido",
        },
        confirmation: {
          label: "¿Nos acompañarás?",
          options: {
            si: "¡Sí, con mucho gusto!",
            no: "Lamentablemente no podré asistir",
            "tal-vez": "Aún estoy confirmando",
          },
        },
        guests: {
          label: "Número de acompañantes",
          placeholder: "0",
        },
        allergies: {
          label: "Alergias o restricciones alimentarias",
          placeholder: "Especifica si tienes alguna restricción (opcional)",
        },
        message: {
          label: "Mensaje para los novios",
          placeholder: "Escríbenos unas palabras especiales (opcional)",
        },
      },
      submitButton: "Confirmar Asistencia",
      successMessage: "¡Gracias por confirmar! Estamos muy emocionados de celebrar contigo.",
      errorMessage: "Hubo un error al enviar el formulario. Por favor intenta de nuevo.",
    },
    calendar: {
      title: "Agregar al Calendario",
      description: "No olvides nuestra fecha especial. Agrégala a tu calendario favorito.",
      buttons: {
        google: "Google Calendar",
        ical: "Apple Calendar",
        outlook: "Outlook",
      },
    },
    faq: {
      title: "Preguntas Frecuentes",
      questions: [
        {
          question: "¿Habrá transporte entre la iglesia y el hotel?",
          answer: "Sí, habrá transporte disponible desde la Iglesia Santa María Reina de la Familia hacia el InterContinental Real Guatemala después de la ceremonia. El transporte partirá aproximadamente a las 17:30.",
        },
        {
          question: "¿Puedo llevar acompañante?",
          answer: "Por favor verifica tu invitación. Si tu nombre indica +1, eres bienvenido/a a traer un acompañante. Si tienes dudas, no dudes en contactarnos.",
        },
        {
          question: "¿Cuál es el horario completo de la celebración?",
          answer: "La ceremonia religiosa inicia puntualmente a las 16:00 hrs en la Iglesia Santa María Reina de la Familia. La recepción comenzará a las 18:00 hrs en el InterContinental Real Guatemala y la fiesta continuará hasta las 3:00 AM.",
        },
        {
          question: "¿Hay estacionamiento disponible?",
          answer: "Sí, tanto la iglesia como el hotel cuentan con estacionamiento para invitados. El estacionamiento del InterContinental tiene capacidad amplia y estará disponible toda la noche.",
        },
        {
          question: "¿Habrá opciones para dietas especiales?",
          answer: "Por supuesto. Tendremos opciones vegetarianas, veganas y sin gluten. Por favor indícalo en el formulario de RSVP para que podamos atenderte correctamente.",
        },
        {
          question: "¿Puedo tomar fotos durante la ceremonia?",
          answer: "Te pedimos que durante la ceremonia religiosa dejes la fotografía en manos de nuestros fotógrafos profesionales. En la recepción, ¡toma todas las fotos que quieras y compártelas con nosotros!",
        },
      ],
    },
    footer: {
      message: "Con todo nuestro amor,",
      names: "Carol & Juan Fernando",
    },
  },

  colors: {
    dustyRose: "#d4a5a5",
    mauve: "#c9a4a4",
    rosewood: "#8b5a5a",
    softBerry: "#b87f7f",
    mulberry: "#7a4a4a",
    oldRose: "#c08787",
    blush: "#f9e9e9",
    vintagePink: "#f5d9d9",
    dustyBlush: "#f7e5e5",
  },

  animation: {
    duration: {
      fast: 0.2,
      normal: 0.4,
      slow: 0.6,
    },
    easing: {
      smooth: [0.6, 0.05, 0.01, 0.9],
      gentle: [0.25, 0.1, 0.25, 1],
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
