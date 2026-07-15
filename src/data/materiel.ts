// Sélection de matériel Neuland recommandée par Nicolas, reprise de sa page
// "Guide du matériel facilitation graphique" (decoincesducrayon.com).
// Les URLs sont des liens affiliés Awin fournis tels quels : ne pas les
// réécrire ni les "nettoyer" — l'identifiant d'affilié (awinaffid=2824012)
// fait partie du lien. Un même produit peut appartenir à plusieurs kits :
// il est défini une seule fois ici puis référencé par kit.

export interface Product {
  name: string;
  desc: string;
  url: string;
}

export interface Kit {
  id: string;
  label: string;
  title: string;
  intro: string;
  products: Product[];
}

const p = {
  bulletproofNotebook: {
    name: 'BulletProof SpotOn Edition — Notebook',
    desc: 'Carnet élégant imprimé de façon neutre en carbone, avec couverture en cuir recyclé, coins arrondis, 256 pages en papier premium blanc optimisé avec grille de points gris, numéros de page imprimés.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/bulletproof-spoton-edition?_pos=3&_psq=note&_ss=e&_v=1.0',
  },
  myNotepad: {
    name: 'myNotepad — Writing block',
    desc: 'Bloc-notes en papier blanc au format A4 avec impression en demi-teintes gris clair.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/mynotepad?_pos=1&_sid=ff89ee3ce&_ss=r',
  },
  fineOneSketch: {
    name: 'Neuland FineOne® Sketch, smear-resistant — 0.5 mm',
    desc: "Encre anti-bavures : le marqueur durable en quatre épaisseurs de trait (0,1 / 0,3 / 0,5 / 0,7 mm) pour des visualisations créatives sur petits formats. Jouez avec les épaisseurs en choisissant plusieurs tailles, ou optez pour le 0,5 mm si vous n'en prenez qu'un seul.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/neuland-fineone-sketch-schwarz-verwischfest?variant=46778734805322',
  },
  refillSketch: {
    name: 'RefillOne Ink, black smear-resistant (1SK)',
    desc: "Le flacon de recharge d'encre noire à base d'eau développé pour les Neuland FineOne® Sketch. Résistante aux bavures — particulièrement utile pour repasser sur des textes ou des lignes noires avec des couleurs claires. Un flacon de 45 ml permet jusqu'à 45 recharges.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/nachfulltinte-refillone-schwarz-verwischfest-1sk?_pos=1&_psq=1SK&_ss=e&_v=1.0',
  },
  nibsSketch: {
    name: 'Pointes de rechange Neuland FineOne® Sketch',
    desc: 'Lot de 10 pointes de rechange pour le Neuland FineOne® Sketch, disponibles en épaisseurs de trait de 0,1, 0,3, 0,5 et 0,7 mm.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/ersatzspitzen-neuland-fineone%C2%AE-sketch?variant=46778734117194',
  },
  fineOneOutliner: {
    name: 'Neuland FineOne® Outliner, pointe ronde 1 mm',
    desc: "Le compagnon idéal pour les sketchnotes et lettrings sur petits formats. Trait régulier de 1 mm, contours noir profond : l'encre ne traverse pas le papier et ne bave pas, même lorsqu'on repasse par-dessus avec des couleurs claires.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/neuland-fineone%C2%AE-outliner-rundspitze-1-mm?_pos=2&_psq=outliner&_ss=e&_v=1.0',
  },
  refillOutliner: {
    name: 'RefillOne Ink, Outliner, permanent',
    desc: "Encre de recharge permanente noire à base d'eau 010, compatible avec tous les marqueurs Neuland Outliner.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/nachfulltinte-refillone-outliner-permanent?_pos=1&_sid=58232fd37&_ss=r',
  },
  nibsFineOneRound: {
    name: 'Pointes de rechange Neuland FineOne® rondes 1 mm',
    desc: 'Lot de 10 pointes de rechange pour Neuland FineOne®.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/ersatzspitzen-neuland-fineone%C2%AE-rundspitze-1-mm?_pos=1&_sid=e081e4183&_ss=r',
  },
  fineOneArtSet: {
    name: 'Neuland FineOne® Art, set de 5 couleurs (22)',
    desc: 'Un set de 5 feutres à pointe pinceau, parfait pour déposer de la couleur, avec la boîte pour recharger les marqueurs.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/neuland-fineone%C2%AE-5er-farbsets?variant=46778722320714',
  },
  refillArtSet: {
    name: 'RefillOne Ink, base aqueuse, sets de 5 couleurs',
    desc: "Lots d'encre de recharge pour les sets de marqueurs numéro 22.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/nachfulltinte-refillone-wasserbasis-5er-farbsets?variant=46778740080970',
  },
  nibsFineOneArt: {
    name: 'Pointes de rechange FineOne® Art, pinceau 0,5–5 mm',
    desc: 'Lot de 10 pointes de rechange pour Neuland FineOne® Art.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/ersatzspitzen-neuland-fineone%C2%AE-art-pinselspitze-0-5-5mm?_pos=1&_psq=Replacement+nibs+Neuland+FineOne%C2%AE+Art%2C+brush+nib+0%2C5-5+mm&_ss=e&_v=1.0',
  },
  nibinator: {
    name: 'Nibinator 2 — pince à pointes',
    desc: 'Remplacez les pointes Neuland en quelques secondes.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/collections/nachfuelltinte-schreibspitze/products/nibinator-1',
  },
  markerboxS: {
    name: 'Novario® Markerbox S',
    desc: "La plupart des marqueurs Neuland se stockent tête vers le bas — indispensable pour les préserver dans la durée. Boîte pratique pour ranger et transporter jusqu'à 30 marqueurs Neuland FineOne®.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/markerbox-s-novario%C2%AE',
  },
  flipchartPaper: {
    name: 'Papier FlipChart, lot de 5, blanc, recyclé, repères croix',
    desc: 'Cinq blocs de papier pour paperboard (20 feuilles/bloc) en papier recyclé blanc de haute qualité avec impression en repères croix. Certifié Ange Bleu, le label écologique de référence.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/collections/flipchartpapier/products/flipchart-block-weiss-recycling-mit-fadenkreuzen-5-blocks-gerollt',
  },
  paperQuiver: {
    name: 'FlipChart PaperQuiver',
    desc: "Parce qu'arriver en formation ou en atelier avec des feuilles de paperboard froissées, ça fait désordre… Le PaperQuiver est la solution idéale pour transporter vos feuilles de façon professionnelle et sans dommages.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/flipchart-papierkocher?pr_prod_strat=pinned&pr_rec_id=19083c025&pr_rec_pid=8424398029130&pr_ref_pid=8661689467210&pr_seq=uniform',
  },
  topChart: {
    name: 'TopChart — paperboard de table',
    desc: 'Un paperboard autoporteur de table en carton micro-ondulé de haute qualité. Inclut 2 blocs de papier Mini FlipChart avec repères en croix, chacun de 20 feuilles (45 × 67 cm).',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/topchart?_pos=1&_psq=topchart&_ss=e&_v=1.0',
  },
  miniFlipchart: {
    name: 'Papier Mini FlipChart, blanc, repères croix',
    desc: 'Bloc de recharge pour TopChart. Lot : 5 blocs.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/mini-flipchart-block-weiss-mit-fadenkreuzen?_pos=4&_sid=831238517&_ss=r',
  },
  rollerPoster: {
    name: 'Magnetic RollerPoster® V2',
    desc: "Créez vos supports sur mesure à la volée : il suffit d'insérer le rouleau de papier en haut et de le dérouler vers le bas — intelligent et facile.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/rollerposter%C2%AE-v2?_pos=1&_psq=roller&_ss=e&_v=1.0',
  },
  paperRoll50: {
    name: 'Rouleau de papier 50 cm',
    desc: 'Recharge de 25 mètres de papier en rouleau de 50 cm de large. Tout simplement parfait pour le RollerPoster®.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/papierrolle-50-cm?pr_prod_strat=pinned&pr_rec_id=d809588b3&pr_rec_pid=8424410874186&pr_ref_pid=14911916441983&pr_seq=uniform',
  },
  workshopCase: {
    name: 'Novario® WorkshopCase — vide',
    desc: 'La mallette idéale pour animer vos ateliers et formations. Je recommande de la prendre vide et de la composer selon vos besoins.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/workshopkoffer-novario%C2%AE-leer?_pos=4&_sid=1c61c9aa2&_ss=r',
  },
  boxSets: {
    name: 'Novario® Box Sets, noir',
    desc: 'Pour que chaque chose ait sa place dans la mallette, mais aussi pour distribuer facilement marqueurs, cartes, post-its et gommettes aux participants. Disponibles en différentes combinaisons.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/novario%C2%AE-boxen-sets-schwarz?variant=46778733330762',
  },
  noOneSixpack: {
    name: 'Neuland No.One® Outliner — Sixpack U5 Mix',
    desc: "Pour l'animateur : LE set de marqueurs indispensables, sans aucune bavure, sans que l'encre ne traverse le papier. Trois pointes — biseautée (2-6 mm) pour un lettrage lisible, pinceau (0,5-7 mm) pour le lettering, ronde (2-3 mm) polyvalente. Le packaging fait office de RefillBox : jusqu'à 22 recharges avec un flacon RefillOne.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/neuland-no-one%C2%AE-outliner-sixpack-u5-mix?_pos=8&_psq=outliner&_ss=e&_v=1.0',
  },
  noOneTenPack: {
    name: 'Neuland No.One® Outliner — pack de 10, pointe ronde',
    desc: "Pour les participants : un set dédié — je garde mon kit d'animateur pour moi et je répartis ces marqueurs dans les boîtes de rangement Novario®.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/neuland-no-one%C2%AE-outliner-verschiedene-schreibspitzen-10er-uni-farbsets?variant=56940496847231',
  },
  bigOneArtOutliner: {
    name: 'Neuland BigOne® Art Outliner, pinceau 2–15 mm',
    desc: 'Parfait pour les titres avec style. Outliner rechargeable à grande pointe pinceau.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/neuland-bigone%C2%AE-art-outliner-pinselspitze-2-15-mm?_pos=2&_psq=big+one+art&_ss=e&_v=1.0',
  },
  bigOneOutlinerWedge: {
    name: 'Neuland BigOne® Outliner, biseau 6–12 mm',
    desc: 'Parfait pour faire les contours avec style. Outliner rechargeable à grande pointe biseautée.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/neuland-bigone%C2%AE-outliner-verschiedene-schreibspitzen?_pos=2&_psq=big+one&_ss=e&_v=1.0',
  },
  bigOneArtSingle: {
    name: 'Neuland BigOne® Art, pinceau 2–15 mm — couleurs à l\'unité',
    desc: 'Le plus grand marqueur pinceau de la famille Neuland — extrêmement polyvalent avec sa maxi pointe pinceau. Parfait pour poser de grandes zones de couleur, créer des ombres et donner du relief à vos visuels.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/neuland-bigone%C2%AE-art-pinselspitze-2-15-mm-einzelfarben?variant=46778736312650',
  },
  bigOneArtFiveSet: {
    name: 'Neuland BigOne® Art, sets de 5 couleurs',
    desc: "Plus avantageux de commander les sets par 5 pour les grands marqueurs. Je recommande les pointes pinceau, plus polyvalentes que les pointes biseautées. Ne pas oublier les recharges correspondant au numéro du set. ⚠️ Je n'ai pas mis toutes les couleurs, à vous de faire votre choix ;)",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/neuland-bigone%C2%AE-art-5er-sets?_pos=1&_sid=d0547e793&_ss=r&variant=46778739229002',
  },
  nibsNoOneRound: {
    name: 'Pointes rondes de rechange 2–3 mm, No.One® Outliner',
    desc: 'Lot de 10 pointes rondes de rechange pour le Neuland No.One® Outliner.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/ersatz-rundspitzen-2-3-mm-neuland-no-one%C2%AE-outliner?pr_prod_strat=pinned&pr_rec_id=af49278bf&pr_rec_pid=8424400617802&pr_ref_pid=8424398422346&pr_seq=uniform',
  },
  nibsNoOneWedge: {
    name: 'Pointes biseautées de rechange 2–6 mm, No.One®',
    desc: 'Lot de 10 pointes biseautées de rechange pour le Neuland No.One®.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/ersatz-keilspitzen-2-6-mm-fur-neuland-no-one%C2%AE?_pos=2&_psq=nibs+wedge&_ss=e&_v=1.0',
  },
  nibsBigOneWedge: {
    name: 'Pointes biseautées de rechange 6–12 mm, BigOne®',
    desc: 'Lot de 10 pointes biseautées pour le Neuland BigOne®.',
    url: 'https://www.neuland.com/en/products/ersatz-keilspitzen-6-12-mm-fur-neuland-bigone%C2%AE?_pos=1&_psq=nibs+big+one&_ss=e&_v=1.0',
  },
  nibsNoOneBrush: {
    name: 'Pointes pinceau de rechange 0,5–7 mm, No.One® Art',
    desc: 'Lot de 10 pointes pinceau de rechange pour le Neuland No.One® Art et le Neuland No.One® Outliner.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/ersatz-pinselspitzen-0-5-7-mm-fur-neuland-no-one%C2%AE-art?_pos=1&_psq=nibs+art&_ss=e&_v=1.0',
  },
  nibsBigOneBrush: {
    name: 'Pointes pinceau de rechange 2–15 mm, BigOne® Art',
    desc: 'Lot de 10 pointes pinceau de recharge pour le Neuland BigOne® Art.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/ersatz-pinselspitzen-2-15-mm-fur-neuland-bigone%C2%AE-art?_pos=3&_psq=Replacement+brush&_ss=e&_v=1.0',
  },
  refill500: {
    name: 'RefillOne Ink — couleur 500',
    desc: "Recharge d'encre individuelle, couleur 500.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/nachfulltinte-refillone-wasserbasis-einzelfarben?variant=46778689225034',
  },
  refill303: {
    name: 'RefillOne Ink — couleur 303',
    desc: "Recharge d'encre individuelle, couleur 303.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/nachfulltinte-refillone-wasserbasis-einzelfarben?variant=46778688766282',
  },
  refill101: {
    name: 'RefillOne Ink — couleur 101',
    desc: "Recharge d'encre individuelle, couleur 101.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/nachfulltinte-refillone-wasserbasis-einzelfarben?variant=46778688241994',
  },
  refillFiveSet: {
    name: 'RefillOne Ink, base aqueuse — lot de 5 recharges',
    desc: 'Lot de recharges pour les sets de 5 marqueurs.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/nachfulltinte-refillone-wasserbasis-5er-farbsets?variant=46778739818826',
  },
  maskingTape: {
    name: 'Masking Tape',
    desc: 'Pour afficher les paperboards au mur sans abîmer la peinture.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/krepp-klebeband?_pos=3&_sid=c52d957b2&_ss=r',
  },
  nameBadges: {
    name: 'NameBadges Stickers — avec visage',
    desc: "Toujours mieux de savoir à qui l'on parle ! Des étiquettes spéciales textile pour inscrire son prénom — pratique pour les ateliers et formations.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/namensschilder-selbstklebend-mit-launi?_pos=3&_psq=name&_ss=e&_v=1.0',
  },
  stickItCards: {
    name: 'Cartes Stick-It rectangulaires, 300 feuilles, assorties',
    desc: '300 cartes Stick-It rectangulaires en papier recyclé, auto-adhésives, en set de couleurs assorties.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/rechteck-karten-stick-it-300-stuck-farbig-sortiert?_pos=1&_sid=8f225e823&_ss=r',
  },
  pinItCards: {
    name: 'Cartes Pin-It rectangulaires, 500 feuilles, couleurs unies',
    desc: 'À utiliser en combinaison avec un mur collant Sticky Wall pour des ateliers dynamiques et interactifs.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/rechteck-karten-pin-it-500-stuck-uni?variant=46778684473674',
  },
  bubbleCards: {
    name: 'Cartes Stick-It bulles, 300 feuilles, assorties',
    desc: "Une manière ludique de communiquer des idées et des retours au sein d'un groupe.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/collections/moderationskarten/products/workshopkarte-bubble-stick-it-300-stuck-farbig-sortiert',
  },
  votingDots: {
    name: 'VOTE! Voting Dots — rouleau',
    desc: '1000 gommettes autocollantes pour voter, en couleur unie.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/bewertungspunkte-20mm-rolle?_pos=1&_psq=vot&_ss=e&_v=1.0',
  },
  workshopCaseXL: {
    name: 'Novario® XL WorkshopCase — vide',
    desc: 'La mallette indispensable pour aller capter graphiquement des conférences et ateliers.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/workshopkoffer-novario%C2%AE-xl-leer',
  },
  miniSoftBag: {
    name: 'Novario® Mini-SoftBag — vide',
    desc: "Permet de répartir et d'organiser les marqueurs de différentes tailles directement dans la mallette.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/mini-softbag-novario%C2%AE-ohne-inhalt',
  },
  graphicWall: {
    name: 'GraphicWall V3',
    desc: 'Mobilité exceptionnelle et installation rapide : le GraphicWall professionnel offre une surface de travail en format paysage (1,2 × 2,4 m). Idéal pour capter une conférence ou une intervention de 30 min à 1h30 en temps réel.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/graphicwall-v3?_pos=1&_sid=7bf9030c1&_ss=r',
  },
  graphicWallXL: {
    name: 'GraphicWall V3 XL',
    desc: 'Parfait pour réaliser une fresque de synthèse ou capter plusieurs conférences de plus d’1h30 sur un même support.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/graphicwall-v3-xl',
  },
  graphicWallBags: {
    name: 'Set de sacs pour GraphicWall V3 / V3 XL',
    desc: 'Sac de transport pour le panneau pliable et sac rembourré de haute qualité pour les pieds du GraphicWall V3.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/taschen-set-fur-graphicwall-v3',
  },
  steelSheets: {
    name: 'Petites plaques acier auto-adhésives pour aimants',
    desc: "Feuilles d'acier auto-adhésives permettant de fixer des aimants sur des surfaces non magnétiques. Maintenez vos feuilles sur le GraphicWall grâce aux aimants — sans trous, sans scotch. Un rendu beaucoup plus professionnel.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/kleine-stahlbleche-selbstklebend-fur-magnete',
  },
  coneMagnets: {
    name: 'Aimants coniques Ø2 × 2,5 cm',
    desc: 'Super aimants.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/kegelmagnet-o2x2-5-cm-2er-set',
  },
  rollOffDevice: {
    name: 'Dévidoir V3 / V3 XL',
    desc: "Un indispensable pour installer facilement son rouleau de papier. Le dévidoir s'installe sur les versions V3 et V3 XL.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/abrollvorrichtung-v3-v3-xl',
  },
  paperRollV3: {
    name: 'Rouleau de papier V3 / V3 XL, blanc',
    desc: '25 mètres de papier spécial blanc brillant pour Neuland GraphicWall V3/V3 XL, 1,20 m de large.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/papierrolle-v3-v3-xl-weiss',
  },
  accessoriesBag: {
    name: 'Sac pour accessoires GraphicWall',
    desc: 'Sac rembourré pour ranger le rouleau de papier ou un dévidoir — indispensable pour transporter et protéger votre matériel. Il en faut à minima 2 ;)',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/tasche-fur-graphicwall-zubehor',
  },
  fatOne: {
    name: 'FatOne — marqueur vide, 50 mm',
    desc: 'À recharger selon vos besoins — pratique pour réaliser de très grands aplats de couleur.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued= https://www.neuland.com/en/products/fatone-50mm',
  },
  panPastel: {
    name: 'PanPastel® Chalk',
    desc: 'À appliquer comme un fard à joues. Idéal pour créer de la profondeur et du relief dans vos visuels.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued= http://www.neuland.com/en/products/panpastel%C2%AE?variant=46778698105162',
  },
  sofftSponges: {
    name: 'Sofft® Sponges — forme ronde',
    desc: "Éponge d'application pour PanPastel.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued= http://www.neuland.com/en/products/sofft%C2%AE-schwamme-rund',
  },
  classicPin: {
    name: 'ClassicPin MC Pinboard',
    desc: "Support amovible parfait pour capter une table ronde ou une conférence de 30 à 60 min. Ou encore à utiliser lors d'un atelier.",
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/pinnwand-classicpin-mc?variant=46778718585162',
  },
  pinboardBag: {
    name: 'Sac universel pour pinboards MC et FlipCharts portables',
    desc: 'Sac de rangement pour pinboard.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/universaltasche-fur-pinnwande-mc-und-tragbare-flipcharts',
  },
  pinboardPaper: {
    name: 'Papier Pinboard blanc — uni',
    desc: 'Papier pour pinboard.',
    url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/pinnwand-papier-reinweiss',
  },
} satisfies Record<string, Product>;

export const bikabloKit: Product = {
  name: 'Kit d’icônes Bikablo',
  desc: "En manque d'inspiration ? Je recommande principalement ce kit de chez Bikablo.",
  url: 'https://www.awin1.com/cread.php?awinmid=123762&awinaffid=2824012&campaign=Website&ued=https://www.neuland.com/en/products/bikablo%C2%AE-icons',
};

export const kits: Kit[] = [
  {
    id: 'sketchnote',
    label: 'Sketchnote',
    title: 'Boîte à outils — Sketchnote',
    intro: 'Pour la prise de notes visuelle sur petits formats : carnets, marqueurs fins, recharges et rangement.',
    products: [
      p.bulletproofNotebook,
      p.myNotepad,
      p.fineOneSketch,
      p.refillSketch,
      p.nibsSketch,
      p.fineOneOutliner,
      p.refillOutliner,
      p.nibsFineOneRound,
      p.fineOneArtSet,
      p.refillArtSet,
      p.nibsFineOneArt,
      p.nibinator,
      p.markerboxS,
    ],
  },
  {
    id: 'formation-atelier',
    label: 'Formation / Atelier',
    title: 'Boîte à outils — Formation & Atelier',
    intro: "Pour animer : supports grand format, marqueurs animateur et participants, cartes d'atelier, votes et logistique.",
    products: [
      p.flipchartPaper,
      p.paperQuiver,
      p.topChart,
      p.miniFlipchart,
      p.rollerPoster,
      p.paperRoll50,
      p.workshopCase,
      p.boxSets,
      p.noOneSixpack,
      p.noOneTenPack,
      p.fineOneOutliner,
      p.bigOneArtOutliner,
      p.bigOneOutlinerWedge,
      p.bigOneArtSingle,
      p.nibsNoOneRound,
      p.nibsNoOneWedge,
      p.nibsBigOneWedge,
      p.nibsNoOneBrush,
      p.nibsBigOneBrush,
      p.nibsFineOneRound,
      p.nibinator,
      p.refillOutliner,
      p.refill500,
      p.refill303,
      p.refill101,
      p.maskingTape,
      p.nameBadges,
      p.stickItCards,
      p.pinItCards,
      p.bubbleCards,
      p.votingDots,
    ],
  },
  {
    id: 'capture-graphique',
    label: 'Capture graphique',
    title: 'Boîte à outils — Capture graphique',
    intro: 'Pour capter en direct : murs graphiques, grands marqueurs, pastels, mallette XL et tout le transport.',
    products: [
      p.workshopCaseXL,
      p.miniSoftBag,
      p.boxSets,
      p.graphicWall,
      p.graphicWallXL,
      p.graphicWallBags,
      p.rollOffDevice,
      p.paperRollV3,
      p.accessoriesBag,
      p.steelSheets,
      p.coneMagnets,
      p.noOneSixpack,
      p.fineOneOutliner,
      p.bigOneArtOutliner,
      p.bigOneOutlinerWedge,
      p.bigOneArtSingle,
      p.bigOneArtFiveSet,
      p.fatOne,
      p.panPastel,
      p.sofftSponges,
      p.nibsNoOneRound,
      p.nibsNoOneWedge,
      p.nibsBigOneWedge,
      p.nibsNoOneBrush,
      p.nibsBigOneBrush,
      p.nibinator,
      p.refillOutliner,
      p.refill303,
      p.refillFiveSet,
      p.maskingTape,
      p.classicPin,
      p.pinboardBag,
      p.pinboardPaper,
    ],
  },
];
