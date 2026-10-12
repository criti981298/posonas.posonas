
export interface Evento {
  slug: string;
  titulo: string;
  categoria: string;
  fecha: string;
  descripcion: string;
  descripcionCompleta: string;
  lugar: string;
  horario: string;
}

export const eventos: Evento[] = [
  {
    slug: "encuentro-comunitario",
    titulo: "Encuentro comunitario",
    categoria: "Convivencia",
    fecha: "24 OCT 2026",
    descripcion:
      "Un espacio de encuentro para compartir experiencias y crear nuevas conexiones.",
    descripcionCompleta:
      "Un encuentro pensado para fomentar la convivencia, el respeto y la creación de nuevas conexiones dentro de nuestra comunidad. Un espacio donde cada persona pueda expresarse libremente.",
    lugar: "Ubicación por confirmar",
    horario: "Horario por confirmar"
  },
  {
    slug: "noche-arte-queer",
    titulo: "Noche de arte queer",
    categoria: "Arte y cultura",
    fecha: "31 OCT 2026",
    descripcion:
      "Una celebración de la creatividad y las distintas expresiones artísticas.",
    descripcionCompleta:
      "Una experiencia dedicada a explorar el arte, la creatividad y las diferentes expresiones culturales de la comunidad LGBTQ+. Un espacio para descubrir nuevas perspectivas.",
    lugar: "Ubicación por confirmar",
    horario: "Horario por confirmar"
  },
  {
    slug: "circulo-conversacion",
    titulo: "Círculo de conversación",
    categoria: "Comunidad",
    fecha: "07 NOV 2026",
    descripcion:
      "Un espacio de diálogo respetuoso, escucha y participación comunitaria.",
    descripcionCompleta:
      "Un espacio de conversación donde las personas puedan compartir ideas, experiencias y reflexiones en un ambiente de respeto, escucha y confianza.",
    lugar: "Ubicación por confirmar",
    horario: "Horario por confirmar"
  }
];
