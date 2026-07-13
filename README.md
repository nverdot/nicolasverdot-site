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
