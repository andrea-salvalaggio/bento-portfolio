# Prompt di progetto — Portfolio personale Bento Grid

## Ruolo e obiettivo

Agisci come **Senior Frontend Developer, UI Designer e Design Systems Engineer**. Progetta e implementa un portfolio personale moderno per un **Web & Frontend Designer**, ispirato alla reference visiva allegata: una dashboard/portfolio compatta in stile **Bento Grid**, con un’estetica scura, minimale, raffinata e orientata alla presentazione dei progetti.

Il risultato deve essere un sito realmente funzionante, responsive, accessibile e semplice da mantenere. La reference è una guida visiva per gerarchia, composizione, proporzioni, spaziature, trattamento delle card e atmosfera generale: non copiarla letteralmente e non riprodurre i contenuti del designer mostrato. Adatta testi, progetti, immagini e identità al portfolio personale del proprietario.

Usa come riferimento architetturale il documento `/Users/andrea/Sites/portfolio/GUIDA_PROGETTO.md`, mantenendone l’approccio modulare a componenti, dati separati, sezioni e fogli di stile organizzati. **La reference tecnica va aggiornata allo stack qui specificato**: non usare Bootstrap o Sass/SCSS.

---

## 1. Stack tecnologico obbligatorio

- **Vue 3** con Composition API e `<script setup>`.
- **Nuxt 3** come framework applicativo, routing e build.
- **Tailwind CSS** per layout, responsive design e utility styling. Tailwind sostituisce Bootstrap: non installare né usare Bootstrap.
- **CSS moderno** per dettagli non gestibili comodamente con utility class: custom properties, `clamp()`, grid, aspect ratio, `backdrop-filter`, transizioni e media query.
- **TypeScript** per props, modelli dei dati e composable, se compatibile con la configurazione esistente.
- **Icone** tramite una libreria coerente e leggera, preferibilmente Lucide (`lucide-vue-next`) oppure quella già presente nel progetto. Evita di mescolare librerie di icone.
- **Git** per il versionamento.
- **Vercel** come target di deploy, senza introdurre configurazioni inutili.

Prima di installare dipendenze o modificare configurazioni, controlla i file esistenti (`package.json`, `nuxt.config.ts`, configurazione Tailwind e struttura `app/`). Riutilizza ciò che è già presente e modifica solo il necessario. Non migrare versione principale di Nuxt o cambiare strumenti senza una ragione tecnica concreta.

### Vincoli tecnici

- Non usare Bootstrap.
- Non usare Sass/SCSS: il design system deve essere basato su CSS custom properties e Tailwind.
- Non aggiungere una libreria di componenti UI completa se non è necessaria.
- Non creare dipendenze esclusivamente per un effetto facilmente ottenibile con CSS.
- Preferisci componenti Vue riutilizzabili, dati tipizzati e markup semantico.
- Mantieni compatibilità con SSR e hydration di Nuxt. Qualsiasi API browser-only deve essere eseguita soltanto lato client.
- Non inserire credenziali, token o chiavi API nel codice.
- Non inventare esperienze professionali, clienti, risultati o metriche: usa placeholder chiaramente identificati quando i dati reali non sono disponibili.

---

## 2. Direzione artistica

### Atmosfera

Il portfolio deve trasmettere una personalità da **Web & Frontend Designer con mentalità design-first**, capace di combinare cura visiva, progettazione dell’interfaccia e codice pulito.

Parole chiave:
- Dark, minimal, premium.
- Bento grid modulare e asimmetrica.
- Superfici scure con bordi sottili e contrasto controllato.
- Angoli arrotondati generosi ma non eccessivi.
- Immagini ampie, pulite e con crop curato.
- Tipografia sans-serif contemporanea.
- Spaziature coerenti e gerarchia chiara.
- Microinterazioni discrete e intenzionali.
- Nessun elemento decorativo che comprometta leggibilità o performance.

### Tema

Implementa una **dark theme come tema predefinito e unico**. Non aggiungere un selettore light/dark e non creare una seconda palette chiara. L’interfaccia deve essere progettata interamente per il tema scuro.

Palette iniziale, da centralizzare nei token e rifinire in base alla reference:

- `--color-page`: `#202020` — sfondo esterno.
- `--color-shell`: `#090909` — contenitore principale.
- `--color-card`: `#151515` — superficie delle card.
- `--color-card-hover`: `#1B1B1B` — superficie hover.
- `--color-border`: `rgba(255, 255, 255, 0.09)` — bordi standard.
- `--color-border-strong`: `rgba(255, 255, 255, 0.16)` — bordi evidenziati.
- `--color-text`: `#F1F1F1` — testo principale.
- `--color-text-muted`: `#A0A0A0` — testo secondario.
- `--color-text-subtle`: `#737373` — label e microtesti.
- `--color-accent`: un solo colore d’accento, usato con moderazione e configurabile tramite token.

Non applicare opacità al testo in modo da renderlo illeggibile. Verifica il contrasto tra testo, bordi, superfici e immagini.

### Tipografia

- Usa una famiglia sans-serif moderna, ad esempio **Inter**, con fallback di sistema.
- Definisci i font token nel design system.
- Titoli e testi devono avere una gerarchia chiara, con line-height leggibile.
- Utilizza `clamp()` per dimensioni fluide dove utile.
- Le label delle card possono essere piccole, uppercase e leggermente spaziate, come nella reference.
- Evita font-size eccessivamente piccoli, soprattutto su mobile.

### Superfici e dettagli

- Card con fondo scuro, bordo sottile e radius indicativamente tra `20px` e `28px`.
- Contenitore principale con bordo esterno discreto e radius più ampio.
- Hover con variazioni sottili di bordo, superficie o trasformazione.
- Ombre molto leggere: privilegia bordi, livelli e contrasto tra superfici.
- Gli effetti blur/glass sono opzionali e vanno usati con parsimonia. Non devono ridurre il contrasto, causare scatti o compromettere la leggibilità.
- Evita gradienti vistosi, glow e animazioni continue non necessarie.

---

## 3. Layout generale e Bento Grid

La homepage deve essere costruita attorno a una **Bento Grid responsive**, con card di dimensioni differenti che compongono un’unica superficie coerente.

### Desktop

- Sfondo esterno grigio molto scuro.
- Contenitore portfolio centrato, con larghezza massima indicativa tra `1180px` e `1280px`.
- Padding esterno sufficiente a lasciare respirare il contenitore.
- Contenitore con fondo quasi nero, bordo doppio/sottile e radius ampio.
- Griglia con gap uniforme, indicativamente `12px–16px`.
- Card con altezza e larghezza variabili, ma allineamenti ordinati.
- Evita che le card sembrino una semplice griglia di riquadri tutti uguali.

Organizza il layout con CSS Grid e aree nominate oppure con una griglia a colonne/righe esplicite. La soluzione deve essere comprensibile e mantenibile; non affidarti a posizionamenti assoluti per l’intero layout.

### Composizione di riferimento

Adatta il numero e la dimensione delle card ai contenuti reali, mantenendo questa gerarchia:

1. **Intro / Hero** — card testuale ampia, nella zona superiore sinistra. Contiene saluto o presentazione, ruolo e breve descrizione.
2. **Project Preview A** — card visuale con screenshot o immagine di un progetto.
3. **Project Preview B** — seconda card visuale con un altro progetto.
4. **Social Links** — card compatta con griglia di icone/link social.
5. **Profile Photo** — card con ritratto, crop curato e dimensione significativa.
6. **About** — card testuale con label “ABOUT”, breve descrizione e link alla pagina/sezione di approfondimento.
7. **Project Preview C** — card visuale più larga o alta per creare ritmo.
8. **Resources / Now** — card con risorse, strumenti, letture o attività correnti. Inserire solo informazioni pertinenti e reali.
9. **Newsletter / Updates** — card opzionale per iscrizione, da includere solo se è possibile collegare un servizio reale. In assenza di backend, non simulare una sottoscrizione funzionante.
10. **Stack** — card con loghi o badge degli strumenti realmente utilizzati.
11. **Spazio utility** — card piccola per un’informazione utile, ad esempio “Currently building”, disponibilità o posizione, evitando contenuti fittizi.
12. **Contact / CTA** — card finale con invito a collaborare e azione per copiare l’email o aprire il client di posta.

La disposizione deve ispirarsi alla reference allegata, non necessariamente riprodurre ogni cella esattamente. La priorità è una composizione bilanciata, leggibile e coerente con i contenuti del portfolio.

### Tablet

- Riduci il numero di colonne mantenendo la logica modulare.
- Riorganizza le aree per evitare card troppo strette.
- Le card testuali devono mantenere una larghezza sufficiente per una buona lettura.
- Social e stack possono diventare righe di elementi scrollabili orizzontalmente, se necessario.

### Mobile

- Passa a una colonna o a una composizione a due colonne solo quando lo spazio lo permette.
- Non ridurre semplicemente il desktop mantenendo le stesse proporzioni.
- Ordine suggerito: Hero, progetti principali, About/Profile, Stack, Social, Contact e contenuti secondari.
- Evita overflow orizzontale, testi tagliati e card con altezze forzate che nascondono contenuto.
- Le aree cliccabili devono avere dimensioni touch adeguate.
- Le immagini devono usare `object-fit: cover` e punti focali configurabili quando necessario.
- Controlla il layout almeno a `360px`, `390px`, `768px`, `1024px` e desktop largo.

---

## 4. Contenuto e tono del portfolio

Il sito è per un **Web & Frontend Designer**. Il profilo combina sensibilità visiva, sviluppo frontend e attenzione a UI, responsive design e qualità del codice.

Il tono deve essere:
- Diretto, umano e professionale.
- Breve: le card non devono diventare articoli.
- Concreto, senza frasi generiche come “passionate about innovation” se non aggiungono informazioni.
- Coerente tra hero, about, progetti e contatti.

### Hero

Prevedi:
- Un saluto o una breve introduzione.
- Nome e ruolo.
- Una descrizione di massimo 2–3 righe su cosa progetta/sviluppa e sul proprio approccio.
- Un eventuale riferimento a località o disponibilità, solo se confermato.
- Un titolo visivamente forte ma non eccessivo.

I contenuti personali devono essere facili da modificare in un singolo file dati o in un componente dedicato.

### Progetti

- Mostra i progetti più importanti con screenshot reali o placeholder chiaramente sostituibili.
- Ogni card può contenere titolo, breve descrizione, stack e link.
- Il click deve avere un comportamento chiaro: pagina progetto, demo o repository.
- Usa link reali forniti dal proprietario. Se mancano, non inventarli.
- Prevedi un fallback elegante quando manca un’immagine.
- Usa `alt` descrittivi e significativi per le immagini informative.

### About

- Breve presentazione professionale.
- Valorizza il collegamento tra design e implementazione frontend.
- Aggiungi un link a una pagina About completa solo se tale pagina viene effettivamente implementata; altrimenti usa una sezione interna.

### Social e contatti

- Prevedi link configurabili per GitHub, LinkedIn, Instagram, Behance o altri canali solo se pertinenti.
- Non mostrare icone prive di destinazione.
- I link esterni devono essere semanticamente corretti e, se aperti in una nuova scheda, usare `rel="noopener noreferrer"`.
- L’email deve essere configurabile.
- L’azione “Copy email” deve copiare l’indirizzo reale e dare un feedback accessibile e temporaneo, gestendo anche il caso in cui l’API Clipboard non sia disponibile.
- Fornisci anche un link `mailto:` come alternativa.

### Stack

- Mostra solo tecnologie e strumenti realmente usati o che il proprietario vuole dichiarare.
- Preferisci loghi coerenti, etichette testuali accessibili o badge minimali.
- Non usare la presenza di una tecnologia nella configurazione del progetto come prova che il proprietario la conosca professionalmente.

---

## 5. Architettura Nuxt e struttura delle cartelle

Adatta questa struttura alla versione di Nuxt e alla configurazione realmente presenti nel repository. Per Nuxt 3, verifica se il progetto utilizza la struttura classica oppure una cartella `app/` introdotta/configurata dal progetto. Non spostare file in massa se non è necessario.

Struttura di riferimento consigliata:

```text
app/
├── app.vue
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── utilities.css
│   └── images/
│       ├── profile/
│       └── projects/
├── components/
│   ├── layout/
│   │   ├── PortfolioShell.vue
│   │   └── PortfolioGrid.vue
│   ├── cards/
│   │   ├── BentoCard.vue
│   │   ├── IntroCard.vue
│   │   ├── ProjectCard.vue
│   │   ├── ProfileCard.vue
│   │   ├── AboutCard.vue
│   │   ├── SocialCard.vue
│   │   ├── StackCard.vue
│   │   ├── ResourcesCard.vue
│   │   └── ContactCard.vue
│   └── ui/
│       ├── IconLink.vue
│       ├── TechBadge.vue
│       ├── CardLabel.vue
│       └── CopyEmailButton.vue
├── composables/
│   └── useCopyToClipboard.ts
├── data/
│   ├── profile.ts
│   ├── projects.ts
│   ├── socials.ts
│   └── stack.ts
├── pages/
│   ├── index.vue
│   ├── about.vue
│   └── projects/
│       └── [slug].vue
└── types/
    ├── project.ts
    └── profile.ts
public/
├── favicon.ico
└── images/
nuxt.config.ts
package.json
```

Questa è una proposta, non un obbligo di creare ogni file a prescindere. Se il progetto è una single-page portfolio, non creare pagine vuote: mantieni soltanto le rotte che offrono contenuti reali. Nuxt auto-importa componenti e composable secondo la configurazione; sfrutta questa caratteristica senza introdurre import ridondanti.

### Responsabilità dei componenti

- `PortfolioShell.vue`: contenitore esterno, larghezza massima e cornice.
- `PortfolioGrid.vue`: definisce la griglia e le aree responsive.
- `BentoCard.vue`: primitive condivisa per superficie, bordo, radius, padding e comportamento hover. Deve supportare slot e classi aggiuntive senza diventare un componente troppo complesso.
- `IntroCard.vue`: hero e presentazione.
- `ProjectCard.vue`: anteprima progetto, immagine, metadati e link.
- `ProfileCard.vue`: ritratto.
- `AboutCard.vue`: descrizione e collegamento di approfondimento.
- `SocialCard.vue`: elenco di social link basato sui dati.
- `StackCard.vue`: strumenti/tecnologie basati sui dati.
- `ResourcesCard.vue`: risorse o informazioni aggiornabili.
- `ContactCard.vue`: call to action e copia email.
- Componenti in `ui/`: piccoli elementi presentazionali riutilizzabili.

Evita componenti monolitici. La pagina deve principalmente comporre i componenti e passare loro dati, non contenere tutto il markup e la logica.

---

## 6. Design system e organizzazione CSS

Il design system deve essere centralizzato, coerente e facile da estendere. **Non usare file SCSS**. Usa CSS standard con custom properties e integra Tailwind senza duplicare inutilmente gli stessi stili.

### `tokens.css`

Contiene i token globali:
- Colori di pagina, superfici, bordi, testi e accent.
- Font family e scale tipografica.
- Radius delle card e del contenitore.
- Spaziature di riferimento.
- Ombre e livelli.
- Durate ed easing delle transizioni.
- Larghezze del layout e breakpoint aggiuntivi, se necessari.

Esempio indicativo:

```css
:root {
  color-scheme: dark;

  --color-page: #202020;
  --color-shell: #090909;
  --color-card: #151515;
  --color-card-hover: #1b1b1b;

  --color-text: #f1f1f1;
  --color-text-muted: #a0a0a0;
  --color-text-subtle: #737373;

  --color-border: rgb(255 255 255 / 9%);
  --color-border-strong: rgb(255 255 255 / 16%);
  --color-accent: #8ab4f8;

  --font-sans: Inter, ui-sans-serif, system-ui, sans-serif;

  --radius-card: 24px;
  --radius-shell: 34px;

  --space-grid: 14px;
  --transition-fast: 160ms ease;
  --transition-normal: 240ms ease;
  --layout-max-width: 1280px;
}
```

Questi valori sono una base da verificare sul risultato visivo, non vincoli immutabili. Mantieni il tema scuro in `:root`; non creare classi per alternare il tema.

### `base.css`

Contiene:
- Box sizing globale.
- Margini di base e comportamento del body.
- Font e colori predefiniti.
- Stili di focus accessibili.
- Regole di base per immagini, link e pulsanti.
- Riduzione delle animazioni in base a `prefers-reduced-motion`.
- Evita reset aggressivi che alterino controlli nativi senza motivo.

### `layout.css`

Contiene:
- Background esterno.
- Shell del portfolio.
- Grid e aree responsive.
- Regole di larghezza massima e padding.
- Breakpoint specifici del layout bento.

### `components.css`

Contiene soltanto stili condivisi delle card e degli elementi UI non esprimibili in modo chiaro con Tailwind:
- Superficie e bordi delle card.
- Stati hover/focus.
- Label e microtesti.
- Aspect ratio delle immagini.
- Stati di feedback per copia email.
- Eventuali effetti visivi condivisi.

### `utilities.css`

Solo utility custom realmente necessarie e non già disponibili in Tailwind. Non ricreare classi che Tailwind offre già.

### `main.css`

È l’entry point CSS globale. Importa i file nell’ordine corretto e deve essere registrato una sola volta in `nuxt.config.ts` o secondo la convenzione del progetto.

```css
@import "./tokens.css";
@import "./base.css";
@import "./layout.css";
@import "./components.css";
@import "./utilities.css";
```

Verifica che i percorsi siano corretti rispetto alla struttura effettiva del repository e alla versione/configurazione di Tailwind. Non mescolare sintassi di configurazione di versioni diverse di Tailwind: identifica la versione installata e segui la relativa documentazione.

### Regole di utilizzo di Tailwind

- Usa Tailwind per flex/grid, gap, padding, margin, dimensioni, allineamenti e responsive utilities.
- Usa token CSS per i valori visivi centrali del design system.
- Evita lunghe stringhe di classi duplicate in più componenti: estrai una primitive o una classe condivisa solo quando migliora davvero la manutenzione.
- Non aggiungere `!important` come soluzione predefinita.
- Evita stili inline ripetuti per valori che dovrebbero essere token.
- Mantieni i breakpoint leggibili e consistenti.
- Non introdurre SCSS, Bootstrap o un secondo sistema di styling.

---

## 7. Dati e tipizzazione

Mantieni i contenuti separati dalla presentazione. I dati ripetuti devono essere definiti in `data/` e renderizzati con `v-for`, usando una `key` stabile.

Esempio di modello progetto:

```ts
export interface PortfolioProject {
  id: string
  slug: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  tags: string[]
  projectUrl?: string
  repositoryUrl?: string
  featured?: boolean
}
```

Esempio di modello profilo:

```ts
export interface PortfolioProfile {
  name: string
  role: string
  location?: string
  introduction: string
  email: string
  profileImage?: string
}
```

Indicazioni:
- Evita `any` se è possibile definire un tipo appropriato.
- Rendi opzionali i campi realmente facoltativi.
- Gestisci immagini o link mancanti con fallback.
- Non duplicare lo stesso testo in più componenti.
- Usa slug stabili per eventuali pagine dettaglio.
- I dati iniziali possono contenere placeholder, ma devono essere marcati chiaramente come da sostituire.
- Non inventare dati personali, aziende, date, clienti, risultati o testimonianze.

---

## 8. Interazioni e animazioni

Le interazioni devono rendere l’interfaccia più curata senza appesantirla.

### Card e link

- Hover discreto: variazione del bordo/superficie o piccolo spostamento.
- Transizioni brevi e coerenti con i token.
- Stato focus visibile da tastiera.
- Non applicare animazioni hover che siano necessarie per capire il contenuto.
- Rispetta `prefers-reduced-motion`.

### Immagini

- Mantieni crop e aspect ratio coerenti.
- Se utile, applica un leggero zoom al passaggio del mouse, senza spostare il layout.
- Evita filtri che alterino troppo la qualità delle immagini.

### Copia email

- Copia l’indirizzo reale con Clipboard API quando disponibile.
- Mostra un feedback come “Email copiata” e ripristina il testo dopo un intervallo ragionevole.
- Gestisci gli errori e lascia sempre disponibile il link `mailto:`.
- Non dichiarare che l’email è stata copiata se l’operazione fallisce.

### Animazioni d’ingresso

Sono ammesse animazioni d’ingresso leggere e non bloccanti, ma:
- Non ritardare eccessivamente la visualizzazione dei contenuti.
- Evita animazioni continue o effetti che causino layout shift.
- Non aggiungere GSAP o altre librerie di animazione se CSS è sufficiente.
- Se il progetto usa già una libreria, riutilizzala solo se ha senso.
- Disattiva o riduci le animazioni per chi ha richiesto movimento ridotto.

### Newsletter

La newsletter è facoltativa. Implementarla solo se esiste un provider/backend configurato. Senza integrazione reale, ometti il form oppure presentalo esplicitamente come elemento da implementare; non mostrare messaggi di successo fittizi.

---

## 9. Accessibilità, SEO e performance

### Accessibilità

- Usa elementi HTML semantici (`main`, `section`, `article`, `nav`, `footer`, titoli gerarchici).
- Ogni immagine informativa deve avere un `alt` sensato; le immagini puramente decorative devono avere `alt=""`.
- Le icone interattive devono avere un nome accessibile.
- Non usare solo il colore per comunicare uno stato.
- Verifica contrasto, focus da tastiera e ordine di tabulazione.
- I link devono avere destinazioni valide e distinguibili.
- Le animazioni devono rispettare `prefers-reduced-motion`.

### SEO

- Imposta titolo e meta description coerenti con il profilo.
- Configura Open Graph essenziale.
- Usa favicon e, se disponibile, immagine social preview.
- Definisci un titolo pagina specifico per ogni rotta reale.
- Non inserire dati strutturati con informazioni inventate.

### Performance

- Preferisci immagini ottimizzate, formati moderni e dimensioni appropriate.
- Specifica `width`/`height` o `aspect-ratio` per ridurre layout shift.
- Carica lazy le immagini non immediatamente visibili, senza ritardare inutilmente la hero.
- Evita pacchetti grandi e codice client non necessario.
- Mantieni la quantità di JavaScript limitata.
- Verifica console, hydration warning e richieste fallite.

---

## 10. Responsive e criteri di qualità

Prima di considerare il lavoro completo, verifica:

- La griglia non presenta buchi involontari o sovrapposizioni.
- Le card hanno padding, radius e bordi coerenti.
- I contenuti più importanti sono visibili senza dover cercare informazioni essenziali.
- I testi lunghi non rompono la griglia.
- Le immagini non vengono deformate.
- Non esiste scroll orizzontale accidentale.
- I link e i pulsanti sono realmente funzionanti.
- Le card cliccabili sono accessibili e non contengono link annidati in modo invalido.
- La UI resta leggibile a 360 px.
- Il layout desktop mantiene la composizione bento e non sembra una lista di card uniformi.
- Il risultato rimane coerente con la reference senza copiarne contenuti o identità.

---

## 11. Procedura di implementazione

Procedi in modo incrementale:

1. **Ispeziona il repository**: leggi `package.json`, `nuxt.config.ts`, cartelle esistenti, configurazione Tailwind e componenti già presenti.
2. **Riassumi brevemente lo stato attuale** e segnala eventuali conflitti con questo prompt prima di fare modifiche distruttive.
3. **Definisci la struttura** mantenendo le convenzioni del progetto e creando solo i file necessari.
4. **Configura Tailwind** in base alla versione già installata oppure installa/configura una versione compatibile con Nuxt 3 se assente.
5. **Implementa il design system** con token CSS, base styles e layout.
6. **Costruisci il shell e la grid** usando prima contenitori e card vuote, così da validare proporzioni e responsive.
7. **Crea i componenti** riutilizzabili per le card.
8. **Collega i dati** tipizzati e sostituisci i placeholder con i dati disponibili.
9. **Aggiungi interazioni** essenziali e accessibili.
10. **Verifica responsive, accessibilità e performance**.
11. **Esegui i controlli disponibili** nel progetto, ad esempio lint, typecheck e build. Correggi gli errori introdotti.
12. **Riepiloga le modifiche**, indicando file creati/modificati, dipendenze aggiunte e contenuti ancora da personalizzare.

Non riscrivere tutto il progetto se è sufficiente modificare alcuni file. Non eliminare codice esistente senza averne verificato l’utilizzo.

---

## 12. Definition of Done

Il lavoro è completo quando:

- [ ] La homepage presenta una Bento Grid ispirata alla reference.
- [ ] L’estetica è dark-only, minimal e coerente.
- [ ] Lo stack è Vue 3 + Nuxt 3 + Tailwind CSS.
- [ ] Bootstrap e Sass/SCSS non sono usati.
- [ ] Le card sono componenti Vue riutilizzabili.
- [ ] I dati di profilo, progetti, social e stack sono separati dal markup.
- [ ] Il CSS è organizzato in un design system con token centralizzati.
- [ ] Il layout è responsive e non presenta overflow.
- [ ] Le interazioni essenziali funzionano e sono accessibili.
- [ ] Non vengono inventati dati personali o professionali.
- [ ] SEO e metadati essenziali sono configurati.
- [ ] Build e controlli disponibili sono stati eseguiti, oppure eventuali impedimenti sono documentati.
- [ ] Le istruzioni per completare i contenuti reali sono chiare.

## Istruzione finale

Realizza un portfolio personale credibile e personalizzabile, non una copia generica della reference. Dai priorità a composizione, leggibilità, responsive design, qualità del codice e coerenza del design system. Prima di aggiungere funzionalità secondarie, assicurati che griglia, card, tipografia e contenuti principali siano solidi.
