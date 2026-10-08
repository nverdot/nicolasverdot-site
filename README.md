# nicolasverdot-site

Site Astro pour BY Nicolas Verdot (nicolasverdot.com) — coaching, formation et facilitation d'ateliers sur la Côte d'Azur.

## Développement local

```bash
npm install
npm run dev
```

## À personnaliser avant mise en ligne

- [src/data/site.ts](src/data/site.ts) : email, téléphone, adresse, clé Web3Forms.
- `public/og-image.svg` : à remplacer idéalement par une image 1200x630 (JPG/PNG) pour une meilleure compatibilité avec les réseaux sociaux.
- `public/favicon.svg` : favicon provisoire.

## Formulaire de contact (Web3Forms)

Le formulaire de [src/components/ContactForm.astro](src/components/ContactForm.astro) envoie les données à Web3Forms.
Crée une clé gratuite sur https://web3forms.com et colle-la dans `src/data/site.ts` (`web3formsAccessKey`).

## Déploiement automatique (GitHub Actions → FTP LWS)

Le workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) build le site et le déploie en FTP
à chaque push sur `main`, via [SamKirkland/FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action).

Dans les paramètres du repo GitHub (**Settings → Secrets and variables → Actions**), ajoute ces secrets :

| Secret            | Valeur                                                  |
| ------------------ | -------------------------------------------------------- |
| `FTP_SERVER`       | Adresse du serveur FTP LWS (ex: `ftp.tonnomdedomaine.fr`) |
| `FTP_USERNAME`      | Identifiant FTP LWS                                      |
| `FTP_PASSWORD`      | Mot de passe FTP LWS                                     |
| `FTP_SERVER_DIR`    | Dossier distant cible (ex: `/httpdocs/` ou `/www/`)       |

Ne jamais committer ces identifiants dans le code — ils ne sont utilisés que via ces secrets chiffrés.

## État — 8 octobre 2026

- **Branche `seminaires`** (pas en ligne, en attente de validation). Elle part de `positionnement-ia` : la fusionner dans `main` met en ligne les deux chantiers d'un coup.
  - **Proposition de valeur commune** aux séminaires et à l'IA, sur l'accueil : « Une direction qui tranche. Des équipes qui s'en emparent. Sur un projet, une stratégie ou l'IA. » Deux boutons, deux portes. Une section « séminaires » avant les trois portes IA.
  - [/seminaires-entreprise/](src/pages/seminaires-entreprise.astro) : page d'entrée. Elle remplace `/offres/deleguer-animation/` (301 dans `public/.htaccess`, filet de secours dans `astro.config.mjs`). Trois situations, questions fréquentes.
  - [/seminaire-kick-off/](src/pages/seminaire-kick-off.astro), [/seminaire-codir/](src/pages/seminaire-codir.astro), [/seminaire-sophia-antipolis/](src/pages/seminaire-sophia-antipolis.astro) : trois pages bâties sur [src/components/PageSeminaire.astro](src/components/PageSeminaire.astro).
  - [/seminaires-alpes-maritimes/](src/pages/seminaires-alpes-maritimes.astro) : nouveau titre, un paragraphe par bassin (Nice, Sophia, Antibes et Villeneuve-Loubet, Carros, Cannes, Grasse, Monaco, région). Pas de page par ville, sauf Sophia.
  - [/blog/](src/pages/blog/index.astro) : vrai sommaire des articles par thème (la page disait « arrive bientôt »). Chaque article renvoie vers la page d'offre de son thème. 52 liens d'articles qui passaient par d'anciennes adresses pointent sur les adresses finales.
  - Nouvel article : kick-off de projet (n° 36 du plan éditorial).
  - **Plus aucune illustration générée en fond.** Les en-têtes sont typographiques ; une vraie photo de mission (fresque, atelier, capture en direct) se pose à côté du texte quand elle existe : accueil, séminaires, kick-off, CODIR, Sophia, 06, capture graphique, facilitation graphique. Pas d'autoportrait en en-tête : le site s'adresse à des directeurs. Les quinze illustrations ont été supprimées de `src/assets` (récupérables dans git).
  - **Calculatrice « Combien coûte vraiment votre séminaire ? »** sur /seminaires-entreprise/ ([src/components/CoutSeminaire.astro](src/components/CoutSeminaire.astro)) : jour J, préparation en interne, lieu et repas, déplacements. L'animation n'y est pas chiffrée. Pour ajouter un type d'atelier : une ligne dans [src/data/tempsCollectifs.ts](src/data/tempsCollectifs.ts).
  - Deux situations ajoutées sur la page séminaires : atelier feuille de route (cas Urssaf / Acoss) et co-préparation avec un animateur interne (PwC).
  - Menu : « Séminaires » remplace « Accueil » (le logo ramène à l'accueil).
  - Aperçu local : `npm run dev -- --port 4331` (configuration « seminaires » dans `.claude/launch.json`).

### À confirmer par Nicolas avant fusion (séminaires)
- La proposition de valeur de l'accueil.
- Les prix : aucun n'est affiché sur les pages séminaires. Les fourchettes du document ChatGPT (3 200 à 11 000 € HT) sont des hypothèses, non publiées.
- Phrases qui engagent sa pratique : confidentialité des entretiens avant un CODIR (« je restitue des thèmes, pas des noms »), point d'étape quelques semaines après, format « kick-off commercial et convention ».
- Calculatrice : les valeurs de départ (500 € par jour et par personne, 120 € de lieu et repas, jours de préparation par type d'atelier) sont des exemples à valider ou à corriger.
- PwC : la phrase « j'ai co-préparé, sans animer moi-même » est tout ce que dit le site. À compléter (sujet, format) si le client l'autorise.
- Cas FIBOIS : le texte alternatif de la photo dit « Nicolas Verdot réalisant la capture graphique », alors que la photo montre une autre personne au feutre. À corriger dans `src/content/caseStudies/fibois.md`.
- SessionLab : aucun connecteur disponible dans Claude. Pour nourrir les pages avec le détail des interventions, exporter les sessions (PDF ou Word) dans le dossier du projet.
- Preuves : aucun cas client de CODIR en entreprise. La page CODIR montre Urssaf / Acoss et JCI Monaco. Un vrai cas et un témoignage changeraient la page.
- Les situations décrites sur les pages sont des cas de figure, pas des citations de clients.

### Prochaines étapes SEO séminaires
- Fiche Google Business Profile (Nice, zone desservie : Alpes-Maritimes) : à créer ou à compléter, avec le lien vers /seminaires-alpes-maritimes/.
- Après mise en ligne : redemander l'indexation de l'accueil, des cinq pages séminaires et du blog dans la Search Console.
- Articles à écrire : « Team building ou séminaire de travail » (n° 38), « Choisir un lieu de séminaire » (n° 37, avec de vrais lieux des Alpes-Maritimes), « Séminaire CODIR : quels thèmes ».
- Une page en anglais pour les équipes internationales de Sophia Antipolis et de Monaco.
- `www.nicolasverdot.com` et `nicolasverdot.com` répondent tous les deux sans redirection : à unifier chez LWS.

## État — 7 octobre 2026 (branche IA)


- **Branche `positionnement-ia`** (pas en ligne, en attente de validation) : l'accompagnement IA passe au premier plan, vu depuis le dirigeant (« il faut qu'on fasse de l'IA, mais par où commencer ? »).
  - [/accompagnement-ia-pme/](src/pages/accompagnement-ia-pme.astro) : trois portes achetables séparément — Atelier de décision IA (nouveau), Cartographie IA utile, Sprint Usage IA puis Cap IA 90. Le Premier pas IA (1 500 € HT) et l'Atelier métier deviennent « deux formats pour les équipes ». Nouvelles sections : signaux, cinq questions, « Vous avez une DSI ? Tant mieux », qui fait quoi. L'adresse et les ancres ne changent pas.
  - Accueil : nouveau hero IA, section « trois portes » sous le hero, nouveau titre et nouvelle description.
  - Menu : « Stratégie IA » en deuxième position. Pied de page et renvois (/offres/, séminaires 06, intelligence collective augmentée) mis à jour.
  - La fiche d'étape est sortie dans [src/components/FicheEtape.astro](src/components/FicheEtape.astro).
- Mise en ligne : après validation de l'aperçu local, fusionner `positionnement-ia` dans `main` (le push déploie), puis vérifier sur nicolasverdot.com.

- **Livre blanc « Le dirigeant et l'IA »** (version de travail 1, pas en ligne) : [livre-blanc-dirigeant/livre-blanc.html](livre-blanc-dirigeant/livre-blanc.html), un seul fichier, même mise en page que « Le facilitateur et l'IA ». PDF : `livre-blanc-dirigeant/faire-pdf.sh`. Page privée : https://claude.ai/artifact/GcL5su9VvHZcKS1qUJtSAp
  - Onze chapitres : la phrase « il faut qu'on fasse de l'IA », comme le mail, l'évolution des IA et l'arrivée des agents (page sans numéro), ce qui se passe déjà chez vous, quatre peurs, quatre faux départs, cinq questions, quatre étapes, ne perdre personne, l'emploi, rester maître de ses données (souveraineté, trois couleurs, six questions au fournisseur), qui fait quoi et le pour et le contre d'une charte, hypothèses.
  - Chaque trou est un cadre en pointillés rouges. Reste à faire : relecture de Nicolas (surtout le chapitre 8 sur l'emploi), un vécu à ajouter, le chiffre Bpifrance à relire dans le rapport complet, l'article 4, le Cloud Act et le chapitre données à faire relire par un juriste, un exemple réel d'agent à ajouter, l'invitation finale, puis la page de téléchargement sur le site.

### À confirmer par Nicolas avant fusion
- Durée de l'Atelier de décision IA : aucune n'est affichée (« calée avec vous ») tant qu'elle n'est pas fixée. Son nom reste à confirmer. Les autres durées (3 semaines, 6 semaines, 90 jours, 2 heures, 1 journée) sont inchangées.
- Prix : rien de nouveau n'est affiché. Hypothèses de travail non publiées : atelier 2–3 k€, cartographie 8–12 k€, passage à l'action 15–30 k€.
- La cible « PME de 30 à 50 personnes » a été élargie à « PME » sur cette page.
- Nouveau titre de l'accueil (effet sur le référencement « facilitateur »).
- Sort des pages facilitation graphique (/facilitation-graphique/, /offres/capture-graphique/, /materiel/) : non touchées.

### Prochaines étapes SEO IA
- Redemander l'indexation de /accompagnement-ia-pme/ et de l'accueil dans la Search Console après mise en ligne.
- Écrire 3 à 5 articles de blog qui renvoient vers la page (ex. « Charte IA en entreprise : par où commencer », « AI Act article 4 : ce que doit faire une PME », « Cas d'usage IA dans une PME de services »).
- Après les deux PME pilotes : publier deux études de cas IA avec chiffres et verbatims validés.
