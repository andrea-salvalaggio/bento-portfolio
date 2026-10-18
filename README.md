# Bento Portfolio

Scaffolding Nuxt 3 + Vue 3 + Tailwind CSS per un portfolio dark in stile Bento Grid.

## Avvio

```bash
npm install
npm run dev
```

## Contenuti da personalizzare

- `app/data/profile.ts`: nome, email, testo, disponibilità e ritratto.
- `app/data/projects.ts`: progetti, URL, immagini e tag.
- `app/data/socials.ts`: aggiungere solo profili reali.
- `app/data/stack.ts`: strumenti effettivamente dichiarabili.
- `public/images/`: sostituire i SVG segnaposto con asset ottimizzati.

I progetti senza `projectUrl` restano volutamente non cliccabili; nessun link fittizio viene generato.

## Convenzione dei commit

Usare sempre il formato [Conventional Commits](https://www.conventionalcommits.org/it/v1.0.0/):

```text
<tipo>(<scope opzionale>): <descrizione imperativa e concisa>
```

Tipi ammessi: `feat`, `fix`, `refactor`, `style`, `docs`, `test`, `build`, `ci`, `chore` e `perf`.

Esempio: `refactor(styles): migrate global styles to SCSS tokens`
