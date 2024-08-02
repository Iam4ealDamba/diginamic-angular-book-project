# Projet Diginamic - Angular Book

- Binôme groupe: Jordi, Frédéric

---

#### Bienvenue sur notre projet de gestion de livre !

Vous pourrez retrouver ci-dessous une explication plus complète du projet, de son installation et de sa mise en route.

##### 1) Détail du projet

Le projet est composé de plusieurs dossiers :

- Components: qui va gérer nos différents composants (book list, book add, etc...)
- Services: ce dossier sert à gérer les services associés à nos composants.
- Interfaces: il contient les interfaces pour nos composants.
- Data: ce dossier contient la base de données de l'application en fichier JSON.

##### 2) Installation

Pour installer le projet, vous pouvez soit utiliser YARN, soit NPM selon votre préférence :

```bash
# Installation avec Yarn
yarn install

# Installation avec NPM
npm install
```

Pour les dépendances, voici une liste de celles qui ont été mises en place :

```json
  "@fortawesome/angular-fontawesome": "^0.15.0",
  "@fortawesome/free-solid-svg-icons": "^6.6.0",
  "json-server": "^1.0.0-beta.1",
  "autoprefixer": "^10.4.19",
  "postcss": "^8.4.40",
  "tailwindcss": "^3.4.7",
```

##### 3) Mise en route

Enfin, pour lancer le projet, il sera important de bien ouvrir deux terminaux afin d'avoir d'un côté Angular qui tourne avec la commande ci-dessous:

```bash
# Démarrer le serveur angular
ng serve
```

Ainsi que cette autre commande ci-dessous sur le deuxième terminal afin de démarrer le serveur de json-server pour la base de données:

```bash
# Démarrer json-server
npx json-server ./data/db.json
```
