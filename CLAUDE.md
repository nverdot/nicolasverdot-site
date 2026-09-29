# Site nicolasverdot.com (BY Nicolas Verdot)

Site Astro de ma marque B2B : séminaires, facilitation, coaching, formations IA, cas clients, articles. **Vouvoiement.** Pas de contenu « se décoincer du crayon » ici : c'est le terrain de decoincesducrayon.com.

## Commandes

```bash
npm run dev      # aperçu local sur http://localhost:4321
npm run build
```

## Mise en ligne : un push publie

`.github/workflows/deploy.yml` construit le site et l'envoie par FTP chez **LWS** à chaque push sur `main`. **Pousser, c'est publier.**

- Petite correction : commite, pousse, puis vérifie sur https://www.nicolasverdot.com.
- Nouvelle page, refonte, changement de navigation : travaille sur une branche, montre-moi l'aperçu local, et attends mon OK avant de fusionner dans `main`.
- Le DNS est chez LWS, pas chez Cloudflare.
- Le push passe par l'alias SSH `github.com-nicolasverdot-site`.

## Règles

- **Le référencement d'abord** : c'est un critère de chaque décision. Une page nationale solide vaut mieux que des pages par ville quasi identiques. Chaque page a ses métadonnées et son schema.org. Ne jamais changer l'adresse d'une page sans redirection 301.
- **Marges** : tout `var(--space-N)` utilisé doit exister dans `src/styles/tokens.css` (l'échelle saute des crans). Après une modification CSS :
  - compare les jetons utilisés dans `src/` avec ceux définis ;
  - vérifie les marges calculées dans le navigateur ;
  - vérifie qu'il n'y a aucun débordement horizontal à 375 px.
- Grilles : utilise `minmax(0, 1fr)` plutôt que `1fr` quand le contenu ne se coupe pas.
- Articles : suivre le plan éditorial dans `docs/plan-editorial.md`.
