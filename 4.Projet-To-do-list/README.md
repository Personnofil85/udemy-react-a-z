# Ma To-do liste - Étapes de réalisation

Ce document décrit les étapes suivies pour réaliser l'application "Ma To-do liste" avec React et Tailwind CSS.

## 1. Initialisation du projet

- Création du projet avec un outil comme Vite.
- Installation des dépendances nécessaires :
  - `nanoid` pour la génération d'identifiants uniques.
  - `tailwind css` pour le style.

## 2. Structure des composants

L'application est découpée en deux composants principaux :

- **App.jsx** : Le composant racine qui gère l'état global et le formulaire d'ajout.
- **ListItem.jsx** : Un composant enfant responsable de l'affichage d'une tâche individuelle et de son bouton de suppression.

## 3. Gestion de l'état (State)

Dans `App.jsx`, nous utilisons trois hooks `useState` :

- `taskList` : Un tableau d'objets contenant les tâches (chaque objet a un `id` et un `content`).
- `task` : Une chaîne de caractères liée à l'input du formulaire.
- `showValidation` : Un booléen pour afficher ou masquer le message d'erreur si l'input est vide.

## 4. Logique de l'application

### Ajout d'une tâche (`handleSubmit`)
- Empêcher le comportement par défaut du formulaire.
- Vérifier si l'input est vide (affichage d'un message d'erreur si c'est le cas).
- Créer un nouvel objet avec un ID unique via `nanoid(7)`.
- Mettre à jour `taskList` en utilisant le spread operator : `setTaskList([...taskList, { id: nanoid(7), content: task }])`.
- Réinitialiser le champ d'entrée.

### Suppression d'une tâche (`deleteTask`)
- Utilisation de la méthode `filter` pour créer un nouveau tableau excluant la tâche dont l'ID est passé en paramètre.
- Mise à jour du state `taskList`.

## 5. Rendu et Interface (UI)

- Utilisation de **Tailwind CSS** pour un design moderne et responsive (classes utilitaires pour les marges, couleurs, flexbox, etc.).
- Rendu conditionnel de la liste : si aucune tâche n'est présente, un message informatif s'affiche.
- Transmission des fonctions et données du parent (`App`) vers l'enfant (`ListItem`) via les **props**.

## 6. Installation et Lancement

1. Installez les dépendances :
   ```bash
   npm install
   ```
2. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
