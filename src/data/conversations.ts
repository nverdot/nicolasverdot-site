export interface ChatStep {
  kind: 'msg' | 'typing';
  name: string;
  text?: string;
  time?: string;
  mine?: boolean;
  reactOn?: number;
  reactEmoji?: string;
  reactCount?: number;
}

export interface Conversation {
  id: string;
  label: string;
  title: string;
  people: Record<string, string>;
  steps: ChatStep[];
}

export const conversations: Conversation[] = [
  {
    id: 'chat-decision',
    label: 'Sur la décision',
    title: 'Entre nous (sans le boss) 🙊',
    people: {
      Karim: '#e2727a',
      Marc: '#e3a651',
      Sophie: '#4fb0a5',
      Julie: '#5b8def',
    },
    steps: [
      { kind: 'typing', name: 'Karim', mine: true },
      { kind: 'msg', name: 'Karim', text: "Encore une réunion qui n'a servi à rien 🙃", time: '18:41', mine: true },
      { kind: 'typing', name: 'Marc' },
      { kind: 'msg', name: 'Marc', text: 'Grave. On a refait le même débat que la dernière fois', time: '18:42', reactOn: 0, reactEmoji: '😂🤣', reactCount: 3 },
      { kind: 'typing', name: 'Sophie' },
      { kind: 'msg', name: 'Sophie', text: "Perso j'ai arrêté d'y croire après le 3e atelier", time: '18:43' },
      { kind: 'typing', name: 'Julie' },
      { kind: 'msg', name: 'Julie', text: "On ressort avec un plan d'action... qu'on n'ouvrira jamais 😅", time: '18:44', reactOn: 2, reactEmoji: '👍👏', reactCount: 2 },
    ],
  },
  {
    id: 'chat-participation',
    label: 'Sur la participation',
    title: 'Le vrai debrief 🎭',
    people: {
      Claire: '#7d8fe3',
      Vincent: '#e3a651',
      Nadia: '#4fb0a5',
      Thibault: '#e2727a',
    },
    steps: [
      { kind: 'typing', name: 'Claire', mine: true },
      { kind: 'msg', name: 'Claire', text: "Encore un ice breaker de 20 min pour un atelier de 2h... 🙄", time: '14:02', mine: true },
      { kind: 'typing', name: 'Vincent' },
      { kind: 'msg', name: 'Vincent', text: "Et après on fait semblant de nous demander notre avis sur un truc déjà décidé", time: '14:03', reactOn: 0, reactEmoji: '🙄😑', reactCount: 4 },
      { kind: 'typing', name: 'Nadia' },
      { kind: 'msg', name: 'Nadia', text: "Perso j'ai arrêté de lever la main, à quoi bon", time: '14:05' },
      { kind: 'typing', name: 'Thibault' },
      { kind: 'msg', name: 'Thibault', text: "Ils vont même nous envoyer un questionnaire de satisfaction après 😂", time: '14:06', reactOn: 2, reactEmoji: '😂👏', reactCount: 2 },
    ],
  },
  {
    id: 'chat-charge',
    label: 'Sur la charge de travail',
    title: 'On tient le coup 😮‍💨',
    people: {
      Lucas: '#5b8def',
      Emma: '#e2727a',
      Baptiste: '#e3a651',
      Chloe: '#4fb0a5',
    },
    steps: [
      { kind: 'typing', name: 'Lucas', mine: true },
      { kind: 'msg', name: 'Lucas', text: "Nouvel objectif ambitieux... même budget que l'an dernier 🙃", time: '09:12', mine: true },
      { kind: 'typing', name: 'Emma' },
      { kind: 'msg', name: 'Emma', text: "Et 2 personnes en moins dans l'équipe depuis janvier", time: '09:13', reactOn: 0, reactEmoji: '😩😮‍💨', reactCount: 5 },
      { kind: 'typing', name: 'Baptiste' },
      { kind: 'msg', name: 'Baptiste', text: "On n'a même pas fini le sujet d'avant qu'on nous en refile un nouveau", time: '09:15' },
      { kind: 'typing', name: 'Chloe' },
      { kind: 'msg', name: 'Chloe', text: 'Faire plus avec moins... on connaît la chanson 🎶', time: '09:16', reactOn: 2, reactEmoji: '💯🔥', reactCount: 3 },
    ],
  },
];
