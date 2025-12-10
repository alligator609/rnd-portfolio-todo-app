# Todo App (Angular + Firebase)

This is a Todo application built with **Angular 20** and **Firebase Firestore** via **AngularFire**.

---

## Prerequisites

- Node.js (LTS recommended)
- npm (comes with Node.js)
- Angular CLI (globally):

```bash
npm install -g @angular/cli
```

---

## 1. Install dependencies

In the project root (where this `README.md` lives), run:

```bash
npm install
```

This installs Angular, AngularFire, Firebase and all other required packages from `package.json`.

---

## 2. Firebase setup

This project uses **Firestore** to store todos.

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a project.
2. Add a **Web app** to that project (</> icon) and register it.
3. Enable **Firestore Database** in the Firebase console (Build → Firestore Database → Create database).
4. Copy the Firebase web config you get after creating the web app. It looks like:

   ```ts
   const firebaseConfig = {
     apiKey: '... ',
     authDomain: '... ',
     projectId: '... ',
     storageBucket: '... ',
     messagingSenderId: '... ',
     appId: '... '
   };
   ```

5. Open your environment file (for example):

   - `src/environments/environment.ts`

   and add your config:

   ```ts
   export const environment = {
     production: false,
     firebase: {
       apiKey: '... ',
       authDomain: '... ',
       projectId: '... ',
       storageBucket: '... ',
       messagingSenderId: '... ',
       appId: '... '
     }
   };
   ```

6. Make sure the Angular app bootstraps Firebase using `provideFirebaseApp` / `provideFirestore` with that `environment.firebase` configuration (this is already wired in the app module if you cloned this repo; you just need to fill in the keys).

> **Note:** Never commit real production keys/secrets that should not be public. For local dev this config is usually fine to keep in the repo, but follow your team’s security rules.

---

## 3. Running the development server

Start the dev server with:

```bash
ng serve
```

Then open:

- `http://localhost:4200/`

The app will reload automatically when you change source files.

---

## 4. Building for production

To create a production build:

```bash
ng build --configuration production
```

The output will be in the `dist/` folder, ready to be deployed to any static hosting service.

---

## 5. Running unit tests

To run unit tests with [Karma](https://karma-runner.github.io):

```bash
ng test
```

---

## 6. Optional: End-to-end tests

Angular CLI no longer ships with e2e by default. If you add a tool like Cypress or Playwright, follow its docs and then run the corresponding command (for example, `npx cypress open`).

---

## Useful Angular CLI commands

- Generate a component:

  ```bash
  ng generate component component-name
  ```

- Get help for generators:

  ```bash
  ng generate --help
  ```

For more on Angular CLI commands, see the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).


# for build in production 

```
ng build --configuration production

```
