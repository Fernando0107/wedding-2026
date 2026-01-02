export const siteConfig = {
  couple: {
    name1: "Carol Castillo Córdova",
    name2: "Juan Fernando González Díaz",
    shortName1: "Carol",
    shortName2: "Juan Fernando",
  },
  
  wedding: {
    date: new Date("2026-11-14T00:00:00"),
    dateString: "14 de noviembre de 2026",
    day: "14",
    month: "Noviembre",
    year: "2026",
    venue: {
      name: "[Nombre del lugar]",
      address: "[Dirección completa del evento]",
      city: "[Ciudad]",
      coordinates: {
        lat: 0,
        lng: 0,
      },
      wazeLink: "https://waze.com/ul?ll=0,0&navigate=yes",
      googleMapsLink: "https://maps.google.com/?q=0,0",
    },
  },

  photos: {
    hero: "/placeholders/hero.svg",
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
    rsvp: "/placeholders/rsvp.svg",
    footer: "/placeholders/footer.svg",
  },

  content: {
    hero: {
      title: "Save the Date",
      subtitle: "Celebra con nosotros",
    },
    story: {
      title: "Nuestra Historia",
      text: "Dos caminos que se encontraron y decidieron caminar juntos. Una historia de amor que comenzó con una mirada, creció con cada risa compartida, y hoy florece en el compromiso de una vida juntos. Este es el inicio de nuestra nueva aventura, y queremos que seas parte de ella.",
    },
    gallery: {
      title: "Momentos Especiales",
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
          title: "Ceremonia",
          description: "La ceremonia comenzará puntualmente",
        },
        {
          time: "17:30",
          title: "Cocktail",
          description: "Disfrutaremos de un cóctel de bienvenida",
        },
        {
          time: "19:00",
          title: "Cena",
          description: "Cena y celebración",
        },
        {
          time: "21:00",
          title: "Baile",
          description: "¡A bailar toda la noche!",
        },
      ],
    },
    directions: {
      title: "Cómo Llegar",
      description: "Encuentra fácilmente nuestro lugar de celebración",
    },
    waze: {
      title: "Navega con Waze",
      description: "Abre la dirección directamente en Waze para llegar sin contratiempos",
      buttonText: "Abrir en Waze",
    },
    dressCode: {
      title: "Código de Vestimenta",
      description: "Formal / Elegante",
      details: "Te sugerimos vestir de manera formal y elegante para nuestra celebración. Los caballeros pueden optar por traje o smoking, y las damas por vestido largo o cocktail.",
    },
    codeOfConduct: {
      title: "Celebración Íntima",
      description: "Nuestra boda será una celebración solo para adultos. Agradecemos tu comprensión.",
      additional: "Por favor, confirma tu asistencia antes del 1 de octubre de 2026.",
    },
    rsvp: {
      title: "Confirma tu Asistencia",
      description: "Por favor completa el siguiente formulario para confirmar tu asistencia",
      deadline: "Confirma antes del 1 de octubre de 2026",
      fields: {
        name: {
          label: "Nombre completo",
          placeholder: "Tu nombre",
          error: "Por favor ingresa tu nombre",
        },
        email: {
          label: "Correo electrónico",
          placeholder: "tu@email.com",
          error: "Por favor ingresa un email válido",
        },
        confirmation: {
          label: "¿Confirmas tu asistencia?",
          options: {
            yes: "Sí, asistiré",
            no: "No podré asistir",
            maybe: "Aún no estoy seguro/a",
          },
        },
        guests: {
          label: "Número de acompañantes",
          placeholder: "0",
        },
        allergies: {
          label: "Alergias o restricciones alimentarias",
          placeholder: "Opcional",
        },
        message: {
          label: "Mensaje para los novios",
          placeholder: "Escribe un mensaje especial (opcional)",
        },
      },
      submitButton: "Enviar confirmación",
      successMessage: "¡Gracias por confirmar tu asistencia!",
      errorMessage: "Hubo un error al enviar el formulario. Por favor intenta de nuevo.",
    },
    calendar: {
      title: "Agregar al Calendario",
      description: "No olvides nuestra fecha, agrégala a tu calendario",
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
          question: "¿Habrá transporte?",
          answer: "Estamos evaluando opciones de transporte. Te mantendremos informado/a.",
        },
        {
          question: "¿Puedo llevar acompañante?",
          answer: "Por favor verifica tu invitación. Si incluye un +1, eres bienvenido/a a traer un acompañante.",
        },
        {
          question: "¿Cuál es el horario de la celebración?",
          answer: "La ceremonia comenzará a las 16:00 hrs. La celebración continuará hasta las 2:00 AM aproximadamente.",
        },
        {
          question: "¿Hay estacionamiento disponible?",
          answer: "Sí, el lugar cuenta con estacionamiento gratuito para los invitados.",
        },
        {
          question: "¿Habrá opciones vegetarianas o veganas?",
          answer: "Sí, habrá opciones para diferentes preferencias alimentarias. Por favor indícalo en el formulario RSVP.",
        },
      ],
    },
    footer: {
      message: "Con amor,",
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

