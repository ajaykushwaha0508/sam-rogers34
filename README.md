# Sam Rogers — Future Citizen Movement

The supplied HTML page converted to a React + Vite application. Text, design and
animation are unchanged; only the delivery mechanism is different.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

## What changed, and what didn't

**Unchanged:** every string of visible text, every Tailwind utility class, the
custom `.text-glow` / `.glass-card` / `.reveal` CSS, the Google Fonts links, the
Material Symbols icons, the image URLs and their `data-alt` descriptions, and the
scroll-reveal behaviour.

**Changed:** the Tailwind CDN script is replaced by a real Tailwind build. The
theme in `tailwind.config.js` was extracted verbatim from the `tailwind.config`
block in the original file, so `px-margin-desktop`, `text-headline-xl`,
`bg-surface-container-low` and the rest resolve to identical values. Building
Tailwind properly also strips the unused utilities, which the CDN version could
not do.

The verification I ran after conversion: 115 visible text nodes compared against
the JSX, 0 missing; 222 unique classes compared, 0 missing.

## Structure

```text
src/
├── components/
│   ├── ui/
│   │   ├── MaterialIcon.jsx        Material Symbols glyph
│   │   └── BackgroundImage.jsx     div with inline background-image + data-alt
│   ├── TopNavBar.jsx
│   ├── HeroSection.jsx
│   ├── MyStorySection.jsx          section 2
│   ├── ImpactVerticalsSection.jsx  section 3
│   ├── GlobalJourneySection.jsx    section 4
│   ├── LessonsSection.jsx          section 5
│   ├── InitiativeSection.jsx       section 6
│   ├── StudentExperienceSection.jsx section 7
│   ├── PhilosophySection.jsx       section 8
│   ├── VisionSection.jsx           section 9
│   ├── WhySchoolsSection.jsx       section 10
│   ├── BeyondBusinessSection.jsx   section 11
│   ├── FinalCtaSection.jsx         section 12
│   └── SiteFooter.jsx
├── hooks/
│   └── useScrollReveal.js          port of the inline IntersectionObserver script
├── data/
│   ├── images.js                   background image URLs
│   └── alts.js                     data-alt descriptions
├── App.jsx                         composes the sections in original order
├── main.jsx
└── index.css                       Tailwind layers + the original custom CSS
```

Repeated markup — nav links, the four impact cards, five lessons, three journey
stops, four vision rows, six partner cards, footer links and social icons — is
driven by small arrays at the top of each component. The rendered DOM is the same;
editing a label now means editing one line instead of hunting through markup.

## Notes for later

- Buttons and links are still inert (`href="#"`, no handlers), exactly as in the
  original. Wire them up when you know the destinations.
- Images load from the Google CDN URLs in the source file. Those links can expire —
  download the images into `public/images/` and update `src/data/images.js` before
  this goes anywhere permanent.
- The nav has no mobile menu; the links are hidden below `md` in the original, so
  small screens currently show only the wordmark and Contact button.

---

# Update: routing added

The site is now two routes sharing one nav bar and one footer.

| Route | Page | Source document |
|---|---|---|
| `/` | The original landing page, all 12 sections | first HTML file |
| `/lessons` | "Lessons the World Taught Me" | second HTML file |

Clicking **Lessons** in the nav bar navigates to `/lessons`; clicking **My Journey**
or the SAM ROGERS wordmark returns to `/`. The active underline is now driven by
the current route rather than hardcoded, so it follows you between pages.

The remaining nav items (Global Journey, Initiative, Gallery, Blog) are still
inert `href="#"` anchors, as they were in the source. Give them a `to` in the
`NAV_LINKS` array in `TopNavBar.jsx` once those pages exist.

## What was added

```text
src/
├── App.jsx                       now BrowserRouter + Routes
├── components/
│   ├── Layout.jsx                renders nav bar + <Outlet/> + footer
│   ├── ScrollToTop.jsx           resets scroll on navigation
│   └── lessons/
│       ├── LessonsHero.jsx
│       ├── LessonsGrid.jsx       the 12-column bento grid
│       ├── QuoteTransition.jsx
│       ├── ShareableCta.jsx
│       └── cards/
│           ├── LessonPublicProperty.jsx    01 — wide, image right
│           ├── LessonRulesAsHabit.jsx      02 — narrow, image below
│           ├── LessonSmallActions.jsx      03 — narrow, image above
│           ├── LessonBrandAmbassadors.jsx  04 — wide, image left
│           └── LessonLifelongLearning.jsx  05 — full width, floating icons
├── pages/
│   ├── HomePage.jsx              the original sections, minus nav and footer
│   └── LessonsPage.jsx
├── hooks/useLessonCardReveal.js  the Lessons page's own scroll script
└── data/lessonImages.js
```

`react-router-dom` was added to `package.json` — run `npm install` again.

## Decisions worth knowing about

**One nav bar, one footer.** The two source documents each had their own, and
they differed: the Lessons version dropped the Gallery link, added a `school`
icon, used `font-display-md` on the links, and had a different Contact button
colour. Its footer also had no social icons. Since you asked not to duplicate
them, the landing page's versions won for both — they are the richer of the two.
If you would rather keep the Lessons styling, the differences are small and I can
switch them.

**Each page keeps its own scroll animation.** The two documents used different
scripts: the landing page toggles a `.reveal`/`.active` class on sections, the
Lessons page writes inline `opacity` and `transform` onto `.lesson-card`
elements. Both are preserved, and each hook is called inside its own page
component so they never run against each other's markup.

**CSS and fonts merged.** The Lessons document's `<style>` block — the `float`
keyframes, `.lesson-card`, `.glow-text`, the scrollbar rules and
`.backdrop-blur-nav` — was appended to `src/index.css`. The Hanken Grotesk link
now loads the superset of both documents' weights (300, 400, 700, 900).

All 46 colour tokens in the Lessons document matched the project's existing
Tailwind theme exactly, so nothing needed reconciling there.

## Fidelity check

For the Lessons page content: 31 text nodes compared, 0 missing; 122 CSS classes
compared, 0 missing.

---

# Update: Global Journey page added

A third route, built from the Global Journey document. Nothing on the existing
two pages was touched.

| Route | Page |
|---|---|
| `/` | Landing page |
| `/global-journey` | A Global Journey For Local Action |
| `/lessons` | Lessons the World Taught Me |

**Global Journey** in the nav bar now routes to `/global-journey`, alongside the
existing My Journey and Lessons links.

## What was added

```text
src/
├── components/global-journey/
│   ├── JourneyHero.jsx             full-height banner + bouncing scroll cue
│   ├── VisionBehindFlight.jsx      section 1 — portrait and the core question
│   ├── CulturalImmersions.jsx      section 2 — three destination tiles
│   ├── DestinationCard.jsx         one tile (Australia / UK / India)
│   └── ObservationToInitiative.jsx section 4 — closing CTA
├── pages/GlobalJourneyPage.jsx
├── hooks/useSectionReveal.js       that document's own scroll script
└── data/globalJourneyImages.js
```

## The removed section

"A Global Footprint" — the third section, containing the three-location list and
the world-map placeholder — was dropped as requested. Removing it also made two
other things unnecessary, so they were left out too:

- The world-map placeholder image, which was only ever a
  `stitch-placeholder-300x300.svg` stub.
- The document's second inline script, a `mousemove` handler on the map
  container whose body was an empty comment. It did nothing even in the original.

Verified after the build: no trace of `location_on`, `stitch-placeholder`, the
`MAP` watermark or the location list remains anywhere in `src/`.

## A CSS collision that had to be resolved

The Global Journey document redefined two things the project already had:

| Rule | Existing value | Global Journey value | Kept |
|---|---|---|---|
| `.glass-card` | `rgba(25,25,25,0.8)`, blur 10px, pink border | `rgba(32,31,31,0.6)`, blur 12px, white border | **existing** |
| `::-webkit-scrollbar` | 6px, `#ffb0ca` thumb | 8px, `#353534` thumb, pink hover | **existing** |

These are global rules, so adopting the new versions would have silently
restyled the landing page and the Lessons page. Since you asked not to affect
previous changes, the existing definitions stand. This costs nothing visually:
`.glass-card` was used on the Global Journey page only inside "A Global
Footprint", which is the section you removed.

Only `.bloom-effect` and `.vertical-rhythm` were appended to `src/index.css`.

## Three pages, three different reveal scripts

Each source document shipped its own scroll animation, and they are mutually
incompatible if run together:

| Page | Mechanism |
|---|---|
| `/` | adds `.reveal` / `.active` to sections and glass cards |
| `/lessons` | writes inline `opacity` and `transform` onto `.lesson-card` |
| `/global-journey` | toggles Tailwind `opacity-0` / `translate-y-10` on sections |

All three are preserved verbatim. Each hook is called inside its own page
component, so it only ever runs while that page is mounted and never touches
another page's markup.

## Fidelity check

Kept Global Journey content: 28 text nodes compared, 0 missing; 121 CSS classes
compared, 0 missing. All 47 colour tokens plus the spacing and font-size tokens
in that document already matched the project's Tailwind theme exactly.

---

# Update: Initiative page added

A fourth route. The three existing pages were not touched.

| Route | Page |
|---|---|
| `/` | Landing page |
| `/global-journey` | A Global Journey For Local Action |
| `/lessons` | Lessons the World Taught Me |
| `/initiative` | The Future Citizen Initiative |

**Initiative** in the nav bar now routes to `/initiative`. No new dependencies.

## What was added

```text
src/
├── components/initiative/
│   ├── InitiativeHero.jsx       full-height hero with the cinematic gradient
│   ├── MissionStatement.jsx     "Why I started this mission"
│   ├── VisionBento.jsx          four-tile bento grid
│   ├── BeyondTextbooks.jsx      three pillars + four-image collage
│   ├── LessonsHighlights.jsx    three-column lesson summary
│   └── JoinMovementCta.jsx      closing call to action
├── pages/InitiativePage.jsx
├── hooks/useButtonPressFeedback.js
└── data/initiativeImages.js
```

Only three existing files were touched, all additively: two lines added to
`App.jsx`, one line changed in `TopNavBar.jsx`, and two CSS rules appended to
`index.css`.

## One script ported, one deliberately dropped

That document shipped two inline scripts.

**Ported —** the button press feedback. Pressing scales a button to 0.95,
releasing scales it to 1.05, written as inline styles exactly as the original
did. One change: the listeners are now removed on unmount and the inline
transform is cleared, because the shared nav bar's Contact button would
otherwise be left frozen mid-press after navigating away.

**Dropped —** the scroll handler that added an `active` class to every
`<section>`. That document's stylesheet defines no rule for `.active`, and the
project's only related rule is `.reveal.active`, which needs a `reveal` class
these sections never get. So the handler had no visible effect in the original
and would have none here either — while running unthrottled `offsetTop` and
`offsetHeight` reads on every scroll event, which forces layout and causes real
jank on a page this long. If you would rather have it back verbatim, say so and
I will add it.

## A CSS rule intentionally not merged

That document redefines `.text-glow` as `0 0 10px rgba(255,176,202,0.3)`, while
the project already has `0 0 15px rgba(255,176,202,0.4)` from the landing page.
The Initiative markup never actually applies `.text-glow` to anything, so
merging it would have silently dimmed the landing page's hero for no benefit.
The existing definition stands. This is the same call made for `.glass-card` and
the scrollbar rules when the Global Journey page was added.

Only `.cinematic-gradient` and `.glow-hover:hover` were appended.

## Fidelity check

49 text nodes compared, 0 missing; 158 CSS classes compared, 0 missing; all 7
images wired. All 46 colour tokens plus the spacing and font-size tokens already
matched the project's Tailwind theme exactly. Every file belonging to the
previous three pages was diffed and is byte-identical.

---

# Update: Gallery page added

A fifth route. The four existing pages were not touched.

| Route | Page |
|---|---|
| `/` | Landing page |
| `/global-journey` | A Global Journey For Local Action |
| `/lessons` | Lessons the World Taught Me |
| `/initiative` | The Future Citizen Initiative |
| `/gallery` | Chronicles of a Movement |

**Gallery** in the nav bar now routes to `/gallery`. No new dependencies.

## What was added

```text
src/
├── components/gallery/
│   ├── GalleryHeader.jsx      masthead
│   ├── GalleryFilterBar.jsx   sticky category filter
│   ├── GalleryGrid.jsx        masonry grid + filter logic
│   ├── GalleryCard.jsx        one tile
│   ├── MomentOfImpact.jsx     full-bleed philosophy quote
│   └── GalleryCta.jsx         closing call to action
├── pages/GalleryPage.jsx
└── data/galleryItems.js       7 items, filter definitions, quote background
```

Only three existing files changed, all additively: two lines in `App.jsx`, one
line in `TopNavBar.jsx`, and the Gallery CSS appended to `index.css`.

## The two requested changes

**1. The category filter now works.**

The original could not have worked reliably in React, and was fragile even as
plain HTML: each button carried an inline `onclick` that reached for the global
`event` object to decide which button to highlight, which is deprecated and
fails outright in strict mode. It also fought its own scroll-reveal observer —
the observer set `opacity` through Tailwind classes while the filter set
`opacity` through inline styles, so a tile revealed after filtering could end up
stuck invisible.

The rebuild keeps the behaviour and fixes the conflict:

- The active category is React state in `GalleryPage`, passed to both the filter
  bar and the grid. Clicking a button sets state; the underline follows.
- Matching tiles become visible immediately and fade in. Non-matching tiles fade
  and scale out first, then leave the layout after 500ms — the same delay the
  original used, so the masonry columns do not snap.
- Scroll reveal and filter visibility are resolved into a single set of classes
  per tile (`revealed && matches`), so the two animations can no longer
  contradict each other.
- Buttons carry `aria-pressed`, and hidden tiles carry `aria-hidden`.

**2. Photos are no longer grey.**

`grayscale` and `group-hover:grayscale-0` were removed from all seven tiles, so
images render in full colour immediately instead of desaturating until hover.
The `transition-all duration-700` on each image was kept, so the hover feel of
the surrounding card is unchanged.

## Note on the class data

The per-tile aspect ratios (`aspect-[4/5]`, `aspect-video`, `aspect-square`) and
categories now live in `data/galleryItems.js` rather than in JSX. Tailwind still
generates them because the `content` glob in `tailwind.config.js` covers
`./src/**/*.{js,jsx}`. If you ever narrow that glob to `.jsx` only, those tiles
will lose their ratios.

## One rule intentionally not merged

That document defines `.glass-effect` but never applies it to anything, so it was
left out. Same call as `.text-glow` on the Initiative page and `.glass-card` on
the Global Journey page.

## Something to check on your side

The filter bar is sticky at `top-[88px]`, the value from the source document,
which was tuned to that page's taller nav bar. The shared nav bar in this
project is shorter, so you may see a small gap above the sticky bar as you
scroll. Say the word and I will align it.

## Fidelity check

32 text nodes compared, 0 missing; 122 CSS classes compared, all accounted for
(8 are applied through template literals and were verified individually); all 8
images wired. All 47 colour tokens already matched the project's theme. Every
file belonging to the previous four pages was diffed and is byte-identical.

---

# Update: Blog page added

A sixth route. The five existing pages were not touched.

| Route | Page |
|---|---|
| `/` | Landing page |
| `/global-journey` | A Global Journey For Local Action |
| `/lessons` | Lessons the World Taught Me |
| `/initiative` | The Future Citizen Initiative |
| `/gallery` | Chronicles of a Movement |
| `/blog` | The Journal |

**Blog** in the nav bar now routes to `/blog`. No new dependencies.

## What was added

```text
src/
├── components/blog/
│   ├── BlogHeader.jsx      "THE JOURNAL" title anchor
│   ├── FeaturedPost.jsx    full-width latest reflection
│   ├── BlogGrid.jsx        bento grid + working load-more
│   ├── BlogCard.jsx        one tile, both source treatments
│   └── NewsletterCta.jsx
├── pages/BlogPage.jsx
└── data/blogPosts.js
```

Only three existing files changed, all additively: two lines in `App.jsx`, one
line in `TopNavBar.jsx`, and the Blog CSS appended to `index.css`.

## The two requested changes

**1. "Load Older Reflections" now works.**

In the source that button had no handler of any kind — not a broken one, none at
all. The visible post count is now React state: each click reveals three more,
and the button removes itself once everything is on screen instead of sitting
there inert. A visually hidden live region announces the new count for screen
reader users, who otherwise get no feedback.

The reveal-on-scroll animation also moved onto each card. The original script
observed only the cards present at first paint, so anything appended later would
have stayed invisible — newly loaded cards now fade in the same way.

**2. Images are not grey.**

Worth being precise: this page had no `grayscale` filter anywhere, unlike the
Gallery. The images were already full colour. What darkens them is the caption
scrim — `from-black/90 via-black/40` on most cards and a flat `bg-black/60` on
the Student Awareness card — which exists so the white headings stay legible on
top of the photos. Those are untouched. If you want the photos brighter, the fix
is to lighten those overlays rather than remove a filter, and I am happy to do
it; just say how much lighter.

## The missing stylesheet

That document referenced `.cinematic-overlay`, `.bento-card` and `.glow-button`
but shipped no `<style>` block defining any of them. Left undefined, the hero's
overlay renders fully transparent, putting white text straight onto a photograph
with nothing behind it.

Definitions were added to `index.css`, modelled on the project's existing
equivalents:

| Class | Definition | Modelled on |
|---|---|---|
| `.cinematic-overlay` | bottom-up dark gradient | `.cinematic-gradient` (Initiative) |
| `.bento-card` | `#201f1f` base, the `surface-container` token | matches the grid's own palette |
| `.glow-button` | `0 0 20px rgba(255,176,202,0.3)` | `.primary-glow` (Gallery) |

None collide with existing rules. Adjust or delete them freely.

## Placeholder posts

The source contained five posts, so a load-more button had nothing to load.
`data/blogPosts.js` therefore carries three extra entries under an
`archivePosts` block, clearly marked as placeholders. Their themes are drawn from
copy already on your Lessons page, and they reuse the same three images the
source document used. Replace or delete them — `INITIAL_COUNT` and `LOAD_STEP`
at the bottom of that file control the pagination either way.

## Also worth knowing

The newsletter `<form>` in the source contained only a submit button, with no
email input in the markup. That is reproduced faithfully. Add an `<input>` in
`NewsletterCta.jsx` when you connect it to a mailing list.

The footer in that document had LinkedIn and Twitter icons drawn as inline SVG.
Since the footer is shared across all six pages, those were not carried over;
the existing footer stands.

## Fidelity check

28 source strings and 24 layout-critical classes verified present. Three unique
image URLs, all wired. Every file belonging to the previous five pages was
diffed and is byte-identical.

Note: this page arrived as pasted markup rather than an uploaded file, so the
automated node-by-node diff used on earlier pages was not possible. The check
above is a targeted spot-check instead — worth a visual pass on your side.

---

# Update: "Join the Movement" modal + every button wired

No new route. Existing pages were touched only to wire their buttons — every
edit is additive (an `onClick`, an import, an `id` anchor), never a rewrite of
markup, copy or styling.

## The modal

```text
src/
├── context/JoinMovementModalContext.jsx   openJoinModal() available anywhere
└── components/modals/JoinMovementModal.jsx
```

`JoinMovementModalProvider` wraps the app once, in `Layout.jsx`, and the modal
itself is mounted there too — so it renders on top of whichever page is active
rather than being duplicated per page. Any component calls:

```jsx
import { useJoinMovementModal } from '../../context/JoinMovementModalContext';
const { openJoinModal } = useJoinMovementModal();
<button onClick={openJoinModal}>Invite Me</button>
```

Ported from the source document: the layout, the form fields (Name, Email,
Message), the close button with its rotate-on-hover, and the pink glow focus
state. Two things were deliberately not carried over:

- **The dimmed mock homepage** behind the modal in the source (`<main class="fixed
  inset-0 ... opacity-40 blur-sm">`) was a design mockup showing how the popup
  would sit over a page. It isn't needed — this modal renders over the real,
  live page, not a static copy of it.
- **`alert('Request Sent Successfully')`** on submit is replaced with an inline
  success state (an icon, a message, a close button) rather than a browser
  alert, which blocks the whole tab and looks out of place next to the rest of
  the site.

Also added, not in the source: client-side validation (name, email format,
minimum message length), Escape-to-close, click-outside-to-close, body scroll
lock while open, and focus moves to the first field on open.

## The missing stylesheet

Same issue as the Blog page: the document referenced `.glass-panel`,
`.modal-enter` and `.pink-glow` but defined none of them. Added to `index.css`,
modelled on the project's existing patterns (`.bento-card`'s surface colour, the
site's other keyframe-based reveals, `.glow-hover`'s focus treatment).

## Every button, and what happens now

| Button | Location | Action |
|---|---|---|
| Invite Me to Your School | Home hero | Opens modal |
| My Mission | Home hero | Scrolls to the My Story section |
| Contact | Nav bar (every page) | Opens modal |
| Contact Sam Rogers | Home, final CTA | Opens modal |
| Learn About The Initiative | Home, initiative teaser | Navigates to `/initiative` |
| Share on LinkedIn | Lessons page | Opens a LinkedIn share-intent window |
| Invite to Your School | Lessons page | Opens modal |
| Share Insight | Lessons, "Public Property" card | Native share sheet, or copies to clipboard |
| Download Reflection Guide | Lessons, "Brand Ambassadors" card | Opens modal (see below) |
| JOIN THE MOVEMENT | Blog newsletter block | Opens modal |
| Invite Me to Your School | Gallery, closing CTA | Opens modal |
| Contact for Collaborations | Gallery, closing CTA | Opens modal |
| Invite Me to Your School | Initiative hero | Opens modal |
| Join the Movement | Initiative hero | Opens modal |
| JOIN THE MOVEMENT | Initiative, closing CTA | Opens modal |
| Load Older Reflections | Blog grid | Already working (added earlier) — unchanged |
| Filter buttons | Gallery | Already working (added earlier) — unchanged |

## Two buttons intentionally left as they are

**The globe icon in the nav bar** carries no text — it's icon-only, and nothing
in the source document says what it should do. Wiring it to something would
mean inventing behaviour with no basis in the markup, so it now has an
`aria-label="Global reach"` for screen readers and otherwise does nothing.

**"Read Article" on the Blog page's featured post** has nowhere to go — there is
no article detail page or route, and this project's blog posts don't have full
content, only excerpts. Routing it anywhere would mean fabricating a
destination. Building `/blog/:slug` article pages is a reasonable next step,
just outside what "wire up the buttons" can honestly deliver without content to
put on them.

## "Download Reflection Guide" — a substitution, not a real download

No PDF exists to download. Rather than leave the button dead or fake a file,
clicking it opens the Join the Movement modal instead — a genuinely working
action in the same spirit as the label. Once a real guide exists, swap the
`onClick` for a plain `<a href="/guide.pdf" download>` in
`LessonBrandAmbassadors.jsx`.

## Fidelity check

All 47 colour tokens in the modal's source document already matched the
project's theme. Every previously existing page and component not listed in the
table above is untouched.

---

# Update: Blog Detail page added

A new route, `/blog/:slug`. Nav bar and footer were not touched.

```text
src/
├── components/blog-detail/
│   ├── ArticleHero.jsx          full-bleed hero: badge, headline, date, read time
│   ├── ArticleBody.jsx          drop-cap intro, pull quote, subheading, tags
│   ├── ArticleComingSoon.jsx    fallback for posts with no full article yet
│   ├── RelatedPostCard.jsx      one "More Insights" tile
│   └── MoreInsights.jsx         related-posts section + "Explore All"
├── pages/BlogDetailPage.jsx
└── hooks/useArticleReveal.js
```

## Only one post has full content — here's why, and what happens to the rest

The uploaded document is the detail page for exactly one article: "Why
Tomorrow's India is Sitting Inside Today's Classrooms" — which is also the
`featuredPost` already sitting in `data/blogPosts.js`, used on the Blog listing
page. Every field from the document (badge, date, read time, hero image, intro
paragraph, body, pull quote, subheading, closing paragraphs, tags) was added to
that one post's data.

None of the other eight posts on the Blog listing page have full article
content — the earlier Blog page conversion only ever had card copy (a category,
a title, an excerpt) for those, because that's all their source document
contained. Visiting `/blog/:slug` for any of them now shows a genuine "coming
soon" page — the title, category and excerpt render, with a clear line that the
full article isn't published yet and a link back to the listing, rather than a
blank page or a fabricated article body.

To give any of those posts full content, add an `article: { ... }` object to it
in `blogPosts.js`, following the shape already on `featuredPost`.

## Routing that closes a gap from the previous update

Two buttons were left honestly unwired last time because nothing existed for
them to point to. Both now work:

- **"Read Article"** on the Blog listing page's featured post navigates to
  `/blog/why-tomorrows-india-is-sitting-inside-todays-classrooms`.
- **"EXPLORE"** on every card in the Blog grid — all nine posts — now links to
  its own `/blog/:slug`, most of them landing on the coming-soon page until they
  have real content.

Every post, including the three placeholder archive posts added previously, now
carries a `slug`.

## "More Insights" — a deliberate content choice

The document's "More Insights" section shows three cards: "Understanding
Discipline Beyond Rules," "Small Actions, Great Societies," and "The Legacy of
Maharana Pratap." Those exact titles already exist as posts on the Blog listing
page — but this document's versions of them carry different categories and
excerpts than what's already published there (for example, "Understanding
Discipline Beyond Rules" is filed under "Global Journey" with a UK civic-sense
excerpt on the listing page, but under "Leadership" with a different excerpt in
this document).

Rather than let the same post read two different ways depending which page you
found it on, "More Insights" looks these posts up by slug and renders the data
already established on the listing page. The visuals (card layout, hover,
gradient) come from this document; the words come from the single source of
truth in `blogPosts.js`.

## The reveal script — same effect, one architectural change

The document's inline script re-measured every paragraph, quote and heading's
position on *every* scroll event, forever, with no cleanup. On an article this
long that's a meaningful amount of forced layout for no visible benefit once
something has already appeared. `useArticleReveal` reproduces the same visual
result — a fade-and-rise on `.reveal-on-scroll` elements as they near the
viewport — using one `IntersectionObserver` that stops watching each element
once it has appeared, and respects `prefers-reduced-motion`.

## The missing stylesheet, again

`.text-glow-pink` was referenced but never defined, same pattern as the last two
pages. Modelled on the project's existing `.text-glow`. `.reveal-on-scroll` and
`.visible` back the hook above.

## Fidelity check

18 source strings verified present (article copy, dates, tags, section labels).
All 47 colour tokens already matched the project's theme. `TopNavBar.jsx`,
`SiteFooter.jsx` and `Layout.jsx` are byte-identical to the previous build.

---

# Update: one image and title per post; every post now has a full detail page

Two files changed: `src/data/blogPosts.js` and
`src/components/blog-detail/ArticleHero.jsx`. Nothing else — nav bar, footer,
routing, and every other page are untouched.

## One image, one title, structurally guaranteed

Previously the featured post carried two different images: `image` for its
card on the Blog listing page, and a separate `article.heroImage` for its
detail-page hero — a deliberate choice at the time, called out in the last
README update. That distinction is now removed. `ArticleHero.jsx` reads
`post.image` and `post.alt` directly rather than a duplicate field, so a post's
listing card and its own detail page can never show two different photos again
— there's only one image field to set. The title was already shared between
the two views; nothing changed there beyond confirming it.

## Every post now has a full detail page

Previously, only the one post that arrived with complete article content (the
featured post) had a real `/blog/:slug` page — the other eight fell back to the
"coming soon" placeholder added in the last update. All eight now have full
articles: an intro, a body paragraph, a pull quote, a subheading, closing
paragraphs, tags, and three related posts — the same structure as the original
featured article, applied consistently.

**Read this part carefully: none of this new text came from either source
document.** Both documents you supplied only ever contained card copy — a
category, a title, a one-line excerpt — for these eight posts. Writing full
articles for them meant generating new copy, in Sam Rogers' voice as
established elsewhere on the site (Chittorgarh roots, the Australia/UK/India
throughline, the classroom-as-nation-building theme from the Lessons and
Initiative pages), built outward from each post's own existing title and
excerpt rather than introducing new claims or facts unrelated to what's already
on the site. The `ArticleComingSoon.jsx` fallback added last update is still in
the codebase, doing nothing right now — it'll activate automatically if you add
a ninth post without an `article` block, so nothing before this point needs to
change.

**Treat this generated copy as a draft, not a publish-ready article.** It's
structurally complete and reads coherently, but it's not customer-approved
writing. Read it, then replace what needs replacing — the `article` object on
each post in `blogPosts.js` is the only place to edit.

## Dates and read times

Each article now has a `date` and `readTime`. These are placeholder editorial
dates, spaced roughly monthly backward from the featured post's real date (June
14, 2024) with no calendar significance — nobody told me when these posts were
actually written, so I didn't guess at anything more specific than "recent and
in order." Replace them with real publish dates in `blogPosts.js` whenever you
have them.

## Fidelity check

Every post's `relatedSlugs` array was checked against the full set of defined
slugs — 27 references, all resolving to a real post, none broken. `data/
blogPosts.js` and `blog-detail/ArticleHero.jsx` are the only two files that
differ from the previous build; everything else, including `TopNavBar.jsx`,
`SiteFooter.jsx`, routing, and all other pages, is byte-identical.
