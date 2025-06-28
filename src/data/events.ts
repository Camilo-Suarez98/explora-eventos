import type { Event } from '../types/eventTypes';

export const mockEvents: Event[] = [
  {
    id: 1,
    title: "Conferencia Tech 2025",
    description: "Una conferencia virtual sobre las últimas tendencias en tecnología y desarrollo web.",
    imageUrl: "./events/conf-tech.jpg",
    date: "2025-07-15",
    type: "virtual"
  },
  {
    id: 2,
    title: "Festival de Música en Vivo",
    description: "Un festival de música en vivo con artistas locales e internacionales.",
    imageUrl: "./events/festival-musica.avif",
    date: "2025-08-05",
    type: "presencial",
    location: "Parque Central"
  },
  {
    id: 3,
    title: "Taller de Programación",
    description: "Un taller práctico de programación en Python para principiantes.",
    imageUrl: "./events/taller-programacion.jpg",
    date: "2025-07-20",
    type: "hibrido",
    location: "Sala de Conferencias"
  },
  {
    id: 4,
    title: "Webinar de Marketing Digital",
    description: "Aprende las últimas estrategias de marketing digital en este webinar gratuito.",
    imageUrl: "./events/webinar.jpg",
    date: "2025-07-30",
    type: "virtual"
  },
  {
    id: 5,
    title: "Exposición de Arte Moderno",
    description: "Una exhibición única de artistas contemporáneos en el Museo de Arte.",
    imageUrl: "./events/exposicion-arte.jpg",
    date: "2025-08-10",
    type: "presencial",
    location: "Museo de Arte Moderno"
  },
  {
    id: 6,
    title: "Seminario de Emprendimiento",
    description: "Descubre cómo iniciar tu propio negocio con expertos en emprendimiento.",
    imageUrl: "./events/seminario-emprendimiento.jpg",
    date: "2025-08-25",
    type: "hibrido",
    location: "Auditorio Principal"
  }
];
