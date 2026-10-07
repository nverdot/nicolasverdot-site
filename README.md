# nicolasverdot-site

Site Astro pour BY Nicolas Verdot (nicolasverdot.com) — coaching, formation et facilitation d'ateliers sur la Côte d'Azur.

## Développement local

```bash
npm install
npm run dev
```

## À personnaliser avant mise en ligne

- [src/data/site.ts](src/data/site.ts) : email, téléphone, adresse, clé Web3Forms.
- [src/data/cities.ts](src/data/cities.ts) : contenu des pages locales (Nice, Cannes, Antibes, Monaco).
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

## État — 7 octobre 2026

- **Branche `positionnement-ia`** (pas en ligne, en attente de validation) : l'accompagnement IA passe au premier plan, vu depuis le dirigeant (« il faut qu'on fasse de l'IA, mais par où commencer ? »).
  - [/accompagnement-ia-pme/](src/pages/accompagnement-ia-pme.astro) : trois portes achetables séparément — Atelier de décision IA (nouveau), Cartographie IA utile, Sprint Usage IA puis Cap IA 90. Le Premier pas IA (1 500 € HT) et l'Atelier métier deviennent « deux formats pour les équipes ». Nouvelles sections : signaux, cinq questions, « Vous avez une DSI ? Tant mieux », qui fait quoi. L'adresse et les ancres ne changent pas.
  - Accueil : nouveau hero IA, section « trois portes » sous le hero, nouveau titre et nouvelle description.
  - Menu : « Stratégie IA » en deuxième position. Pied de page et renvois (/offres/, séminaires 06, intelligence collective augmentée) mis à jour.
  - La fiche d'étape est sortie dans [src/components/FicheEtape.astro](src/components/FicheEtape.astro).
- Mise en ligne : après validation de l'aperçu local, fusionner `positionnement-ia` dans `main` (le push déploie), puis vérifier sur nicolasverdot.com.

- **Livre blanc « Le dirigeant et l'IA »** (version de travail 1, pas en ligne) : [livre-blanc-dirigeant/livre-blanc.html](livre-blanc-dirigeant/livre-blanc.html), un seul fichier, même mise en page que « Le facilitateur et l'IA ». PDF : `livre-blanc-dirigeant/faire-pdf.sh`. Page privée : https://claude.ai/artifact/GcL5su9VvHZcKS1qUJtSAp
  - Dix chapitres : la phrase « il faut qu'on fasse de l'IA », comme le mail, ce qui se passe déjà chez vous, trois peurs, quatre faux départs, cinq questions, quatre étapes, ne perdre personne, l'emploi, qui fait quoi, hypothèses.
  - Chaque trou est un cadre en pointillés rouges. Reste à faire : relecture de Nicolas (surtout le chapitre 8 sur l'emploi), un vécu à ajouter, le chiffre Bpifrance à relire dans le rapport complet, l'article 4 à faire relire par un juriste, l'invitation finale, puis la page de téléchargement sur le site.

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
