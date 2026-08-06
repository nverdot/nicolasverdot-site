const ICONS: Record<string, string> = {
  'Lieu': '📍',
  'Format': '🗓️',
  'Partenaire': '🤝',
  'Intervention': '🛠️',
  'Public': '👥',
  'Objectif': '🎯',
  'Organisation': '🏢',
  'Commanditaire': '🧑‍💼',
  'Enjeux': '⚡',
  'Finalité': '🏁',
  'Équipe': '🧑‍🤝‍🧑',
  'Approche': '🧭',
  'Sujet': '💬',
  'Séminaires': '🎤',
};

const DEFAULT_ICON = '🔹';

export function factsheetIcon(label: string): string {
  return ICONS[label] ?? DEFAULT_ICON;
}
