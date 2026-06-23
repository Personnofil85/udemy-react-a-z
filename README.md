# Udemy React de A à Z - Projets

Ce dépôt contient l'ensemble des projets réalisés durant la formation React. Chaque projet est indépendant et déployé sur GitHub Pages.

## 🚀 Projets en ligne

Voici la liste des projets déjà déployés :

- [4. Projet To-do liste](https://personnofil85.github.io/udemy-react-a-z/4.Projet-To-do-list/)
- [7. React Router](https://personnofil85.github.io/udemy-react-a-z/7.React-router/)
- [8. API de Contexte](https://personnofil85.github.io/udemy-react-a-z/8.Api-de-contexte/)
- [9. React Redux](https://personnofil85.github.io/udemy-react-a-z/9.React-Redux/)
- [10. Boxy Project](https://personnofil85.github.io/udemy-react-a-z/10.Boxy-project/)

---

## 🛠 Procédure de déploiement

Chaque projet utilise `vite` pour le build et `gh-pages` pour le déploiement. Pour maintenir l'accès à tous les projets sur un seul domaine GitHub Pages, chaque application est déployée dans un sous-répertoire spécifique de la branche `gh-pages`.

### Étapes à suivre pour déployer un projet :

1. **Configuration du chemin de base (Base Path) :**
   Dans le fichier `vite.config.js` du projet, assurez-vous que la propriété `base` correspond au chemin de l'URL finale :
   ```javascript
   // Exemple pour le projet 4
   export default defineConfig({
     base: "/udemy-react-a-z/Nom-du-Projet/",
     // ...
   })
   ```

2. **Scripts de déploiement :**
   Dans le `package.json` de chaque projet, les scripts suivants sont configurés :
   ```json
   "scripts": {
     "build": "vite build",
     "deploy": "gh-pages -d dist -e Nom-du-Projet"
   }
   ```
   *Note : L'option `-e` (ou `--dest`) de `gh-pages` est cruciale ici car elle spécifie le dossier de destination dans la branche `gh-pages`.*

3. **Lancer le déploiement :**
   Placez-vous dans le dossier du projet concerné et lancez :
   ```bash
   npm run build
   npm run deploy
   ```
   Cela va automatiquement construire le projet (`npm run build`) puis envoyer le contenu du dossier `dist` vers GitHub Pages.

---

## 📂 Structure du dépôt

Chaque dossier numéroté correspond à une étape ou un projet de la formation. Référez-vous au `README.md` interne de chaque dossier pour des instructions spécifiques.
