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
