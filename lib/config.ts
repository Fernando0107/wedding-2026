export const siteConfig = {
  couple: {
    name1: "Carol Castillo",
    name2: "Juan Fernando González",
    shortName1: "Carol",
    shortName2: "Juan Fernando",
  },
  
  wedding: {
    date: new Date("2026-11-14T16:00:00"),
    dateString: "Sábado 14 de noviembre del 2026",
    day: "14",
    month: "Noviembre",
    year: "2026",
    ceremony: {
      name: "Iglesia Santa María Reina de la Familia, Cayala",
      address: "Ciudad Cayala, Zona 16",
      city: "Ciudad de Guatemala",
      time: "16:00",
      coordinates: {
        lat: 14.6114485,
        lng: -90.4857199,
      },
      googleMapsLink: "https://maps.google.com/?q=JG67%2BHPC+Blvr+Rafael+Landivar+Guatemala",
      wazeLink: "https://waze.com/ul/h9fxehun92",
    },
    reception: {
      name: "Real InterContinental Guatemala by IHG",
      address: "14 Calle 2-51, Zona 10",
      city: "Ciudad de Guatemala",
      time: "19:00",
      coordinates: {
        lat: 14.5983084,
        lng: -90.5143371,
      },
      googleMapsLink: "https://maps.google.com/?q=InterContinental+Real+Guatemala",
      wazeLink: "https://waze.com/ul/h9fxeh391m",
    },
    venue: {
      name: "Iglesia Santa María Reina de la Familia",
      address: "JG67+HPC, Blvr. Rafael Landivar",
      city: "Ciudad de Guatemala",
      coordinates: {
        lat: 14.6114485,
        lng: -90.4857199,
      },
      wazeLink: "https://waze.com/ul?ll=14.6114485,-90.4857199&navigate=yes",
      googleMapsLink: "https://maps.google.com/?q=JG67%2BHPC+Blvr+Rafael+Landivar+Guatemala",
    },
  },

  photos: {
    hero: "/puesta-anillo.jpg",
    story: [
      "/civil-1.jpg",
      "/civil-2.jpg",
      "/civil-3.jpg",
      "/civil-4.jpg",
      "/civil-5.jpg",
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
      title: "Nuestra Boda",
      subtitle: "Estás cordialmente invitado/a a celebrar con nosotros",
    },
    welcome: {
      message: "Hallé al que ama mi alma",
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
      title: "Programa",
      events: [
        {
          time: "16:00",
          title: "Misa",
          description: "Iglesia Santa María Reina de la Familia. Te pedimos llegar con anticipación.",
        },
        {
          time: "19:00",
          title: "Cóctel de Bienvenida",
          description: "Disfruta de un cóctel de bienvenida en el InterContinental Real Guatemala mientras esperamos a que todos los invitados lleguen.",
        },
        {
          time: "20:00",
          title: "Recepción",
          description: "Cena de gala.",
        },
        {
          time: "20:15",
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
      contactInfo: {
        intro: "Para reservar, contáctalos directamente mencionando la boda de Carol y Juan Fernando.",
        phone: "2413-4444",
        hours: [
          { days: "Lunes a Viernes", time: "08:00 am – 18:00 hrs" },
          { days: "Sábado y Domingo", time: "08:00 am – 12:00 pm" },
        ],
        emails: [
          { name: "Evelyn Sarmiento", address: "Evelyn.Sarmiento@R-HR.COM" },
          { name: "Reservas Inter Guatemala", address: "reservas.gua@R-HR.COM" },
          { name: "Reservaciones GUAHA", address: "reservaciones.gua02@R-HR.COM" },
          { name: "Reservaciones", address: "reservaciones.guaha@r-hr.com" },
        ],
        cc: "ventas3.guaha@r-hr.com",
      },
    },
    dressCode: {
      title: "Código de Vestimenta",
      description: "Etiqueta Formal",
    },
    codeOfConduct: {
      title: "Código de Conducta",
      description: "No se permite fumar, ni utilizar cigarros electrónicos.",
      additional: "Agradecemos tu comprensión, para poder cumplir con el reglamento del hotel y evitar inconvenientes.",
    },
    rsvp: {
      title: "Confirma tu Asistencia",
      description: "Por favor completa el siguiente formulario para confirmar tu asistencia.",
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
    summary: {
      title: "Detalles del Evento",
      ceremony: {
        label: "Misa",
        wazeButton: "Ir a la Iglesia",
      },
      reception: {
        label: "Fiesta",
        wazeButton: "Ir al Hotel",
      },
    },
    gifts: {
      title: "Lista de Regalos",
      description: "Tu presencia es el mayor regalo que podemos recibir. Sin embargo, si deseas obsequiarnos algo, te compartimos algunas opciones.",
      bankTransfer: {
        title: "Transferencia Bancaria",
        details: [
          { label: "Banco", value: "Banco Industrial" },
          { label: "Tipo Cuenta", value: "Ahorros" },
          { label: "No. de Cuenta", value: "5554458843" },
          { label: "A nombre de", value: "Carol Castillo" }
        ],
      },
      honeymoon: {
        title: "Lista de Regalos Cemaco",
        description: "Hemos preparado una lista de regalos en Cemaco con artículos especiales para nuestro nuevo hogar. Cualquier detalle que elijas será muy especial para nosotros.",
        link: "https://www.cemaco.com/list/BODAGONZALEZCASTILLO14112026",
        linkText: "Ver Lista de Regalos",
      },
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
