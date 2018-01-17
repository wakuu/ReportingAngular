INSTALLATION DU CLIENT

Etape 0 : Intaller Nodejs https://nodejs.org

Etape 1 : Intaller Angular

Dans une console exécutez la commande
    "npm install -g @angular/cli"

Etape 2 : Installer les dépendences du projet

Dans une console située dans le dossier du projet "reportingAngular" exécutez la commande :
    "npm install"

Etape 3 (Développement)

Dans une console située dans le dossier du projet "reportingAngular" exécutez la commande :
    "npm run start"

Le site est disponible sur l'url : http://localhost:4200

Etape 3 (Build)

Dans une console située dans le dossier du projet "reportingAngular" exécutez la commande :
    "npm run build"

Un dossier "dist" a été généré.

Le site est disponible sur l'url : http://localhost:3000

--------------------------------------------------------------------------------------------------

INSTALLATION DU SERVEUR

Etape 0 : Intaller Nodejs https://nodejs.org

Etape 1 : Installer les dépendences du serveur

Dans une console située dans le dossier "server" exécutez la commande :
    "npm install"

Etape 2 : Lancer le serveur

Toujours dans le même dossier exécutez la commande :
    "node app.js"

--------------------------------------------------------------------------------------------------

MAINTIEN DU CODE

- Les dépendances se trouvent dans ./package.json
- Les components se trouvent dans : src/app/components
- Les services se trouvent dans : src/app/services
- Les routes se trouvent dans src/app/routing.module.ts


--------------------------------------------------------------------------------------------------

TESTS FONCTIONNELS

La seule et unique page doit se présenter comme dans le lien (https://imageshack.com/a/img923/235/TYUE5w.png)
Description :
 - Un container principal doit s'afficher avec comme titre : Liste des rapports
 - A l'intérieur il doit y avoir actuellement 2 onglets. Un pour le rapport Chiffre d'affaire et un Autre
 - A l'intérieur des onglets on trouve une partie filtres avec les filtres nécessaires pour le rapport
 - Au centre le rapport est visible sous forme de tableau
