export interface CityContent {
  slug: string;
  name: string;
  intro: string;
  body: string[];
}

export const CITIES: CityContent[] = [
  {
    slug: 'nice',
    name: 'Nice',
    intro:
      "Coaching, formation et facilitation d'ateliers à Nice, pour les dirigeants, équipes et organisations du bassin niçois.",
    body: [
      "Basé sur la Côte d'Azur, j'interviens régulièrement à Nice auprès de dirigeants, managers et équipes qui souhaitent avancer sur des enjeux de leadership, de communication ou d'organisation collective.",
      "Les séances de coaching individuel peuvent se dérouler en présentiel à Nice ou à distance, selon vos préférences. Les formations et ateliers de facilitation s'organisent directement dans vos locaux ou dans un lieu adapté à Nice et ses environs.",
    ],
  },
  {
    slug: 'cannes',
    name: 'Cannes',
    intro:
      "Coaching, formation et facilitation d'ateliers à Cannes, pour accompagner vos équipes et vos projets collectifs.",
    body: [
      "J'accompagne à Cannes des professionnels et des équipes dans des démarches de coaching individuel, de formation ou d'ateliers collaboratifs, adaptées aux enjeux spécifiques de chaque organisation.",
      "Que ce soit pour un accompagnement ponctuel ou un programme sur plusieurs mois, les interventions à Cannes se font en présentiel dans vos locaux ou à distance.",
    ],
  },
  {
    slug: 'antibes',
    name: 'Antibes',
    intro:
      "Coaching, formation et facilitation d'ateliers à Antibes, au plus près des équipes et des dirigeants du secteur.",
    body: [
      "À Antibes, j'interviens auprès de dirigeants et d'équipes pour des accompagnements en coaching individuel, des formations sur mesure ou l'animation d'ateliers collectifs.",
      "Chaque intervention est construite avec vous en fonction de vos objectifs, du format le plus adapté et de votre calendrier.",
    ],
  },
  {
    slug: 'monaco',
    name: 'Monaco',
    intro:
      "Coaching, formation et facilitation d'ateliers à Monaco, pour dirigeants et équipes exigeants.",
    body: [
      "J'accompagne à Monaco des dirigeants et des équipes dans des contextes professionnels exigeants, avec des formats de coaching individuel, de formation et de facilitation d'ateliers adaptés à la Principauté.",
      "Les interventions peuvent se dérouler directement dans vos locaux à Monaco, ou à distance selon les besoins.",
    ],
  },
];
