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

## État — 29 septembre 2026

- **Branche `ia-utile`** (pas encore en ligne) : nouvelle page [/accompagnement-ia-pme/](src/pages/accompagnement-ia-pme.astro), le parcours « IA utile » en 5 étapes pour les PME de 30 à 50 personnes des Alpes-Maritimes, reliée depuis le menu, le pied de page, l'accueil, /offres/, /seminaires-alpes-maritimes/ et /intelligence-collective-augmentee/.
- Mise en ligne : après validation de l'aperçu, fusionner `ia-utile` dans `main` (le push sur `main` déploie), puis vérifier sur nicolasverdot.com.

### Prochaines étapes SEO IA
- Déclarer la nouvelle page dans la Search Console (inspection d'URL → demander l'indexation).
- Écrire 3 à 5 articles de blog qui renvoient vers la page (ex. « Charte IA en entreprise : par où commencer », « AI Act article 4 : ce que doit faire une PME », « Cas d'usage IA dans une PME de services »).
- Après les deux PME pilotes : publier deux études de cas IA avec chiffres et verbatims validés.
