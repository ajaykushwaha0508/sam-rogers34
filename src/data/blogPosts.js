/**
 * Blog data.
 *
 * The three image URLs below are the only ones the source documents used;
 * several posts share them.
 *
 * Each post now has exactly ONE image and ONE title, used for both its listing
 * card and its detail-page hero — there is no separate "hero image" field
 * anymore, by design, so the two can't drift apart. ArticleHero.jsx reads
 * `post.image` / `post.alt` directly rather than a duplicate field.
 */

const IMG_CLASSROOM_LEADER =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCePFaZIGWyQsB97n5CcU_aD7HNfAV14T_BenzkYbbGjKzEwUb5IihJygOPBaah1zlc9buSM4C1LonlqNJJfQrPV1MyYzl9Y2916bwBWpzjxQLFA5r8fx4gi5WgI9ANnBWXehb1LE93NHyWGUDXKq5Soc9_UxANrqlO43re-Jf5_4lO_TDcNmGhIUEcM124FfsZEta3R75idcEu8q7pw65dpyv1JW9e8dsgCMnlNe07wgfpaAoICHcW';

const IMG_GLOBAL_JOURNEY =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDHEqNYqix6IFluZ5a37OduS99JeR__727ls3u5COnv3TxyI6zDO1SEItrJBPQwWw5Ap_iGSClEF5JaM7wk7wq-Z8aexDV4GKgShE8Cs1QV40Dwy8nSMeFx4-gjlgeE_uyTzGKLBZfEBUN3u3v9-1XtTz0UCnTFC8uflWDbT9YBob4pyDOkCelOcyA7cukZsYETagG4H2C_BXK86Tuy1HizRHRmQtTuYnJ1FMX_B6tVZenmTgAoOpC5';

const IMG_CHALK_SKETCH =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBPB6eViij7ZYvUZ-Anu6JGpVDLxrSLTsSZfnes4F4zW-63TXmMzNbIYJrbNelH8p2bvUFamH7HdzDd6XJKGVVhZEAuCkn5LEkNlVPo9yna67LjAwDvhHoOQ2EQklJJ8Hnr9FXxZ7jrjVxG2RaEgEjSjGqnmaCqZyinTV6uQsZq6yCihdaYoKagzgdJzy6BfXFp816Z41fOPQ1S6eF0hgsovOI7QuZrEbALihuYxdl-s4X30-WX6_Yf';

/** The hero article above the grid, and the full article at its detail route. */
export const featuredPost = {
  slug: 'why-tomorrows-india-is-sitting-inside-todays-classrooms',
  badge: 'Latest Reflection',
  title: "Why Tomorrow's India is Sitting Inside Today's Classrooms",
  excerpt:
    "Returning home from the boardrooms of Australia to the classrooms of rural India, I discovered that the real brand ambassadors of our future aren't corporate leaders—they're students learning the weight of responsibility.",
  cta: 'Read Article',
  image: IMG_CLASSROOM_LEADER,
  alt: 'A high-contrast cinematic portrait of a visionary leader standing in a modern, light-filled classroom in India. The atmosphere is optimistic and professional, with warm golden light spilling through large windows, highlighting the architectural details of the room. The color palette is dominated by deep blacks and charcoal tones, with striking neon pink accents reflecting on the glass surfaces. The mood is powerful and mission-driven, suggesting the dawn of a new era in education.',

  article: {
    detailBadge: 'Editorial Feature',
    date: 'June 14, 2024',
    readTime: '8 Min Read',
    intro:
      'Education is not merely the transfer of information; it is the construction of character. When we look at the desks in our local schools, we aren\u2019t just seeing children; we are seeing the future architects of our society, the leaders of our industries, and the guardians of our heritage. The discipline learned within these four walls becomes the foundation for the integrity of a nation.',
    body: [
      'The shift from a developing economy to a global powerhouse doesn\u2019t happen in boardroom meetings alone. It begins with the curiosity sparked in a primary schooler and the resilience forged in a teenager facing their first complex challenge. Every lesson taught today is a brick laid for the India of 2047.',
    ],
    pullQuote: "Tomorrow's India is sitting inside today's classrooms.",
    subheading: 'The Blueprint of Nation Building',
    closing: [
      'We must recognize that the curriculum is secondary to the culture of the classroom. A classroom that rewards courage, values empathy, and demands excellence is a laboratory for greatness. When a student learns that their individual action contributes to the collective success of their peers, they are learning the most vital lesson of citizenship.',
      'The responsibility lies not just with the teachers, but with us\u2014the current generation of leaders. We must provide the tools, the vision, and the mentorship that turns potential into progress. The investment we make today in these small desks will yield the greatest dividends for our shared future.',
    ],
    tags: ['Education', 'Leadership', 'FutureIndia'],
    relatedSlugs: [
      'understanding-discipline-beyond-rules',
      'small-actions-great-societies',
      'the-legacy-of-maharana-pratap',
    ],
  },
};

/**
 * The five posts from the source listing document, in their original order and
 * with their original per-card treatments.
 *
 * `span`     — the md: column span
 * `variant`  — 'gradient' matches the standard cards; 'solid' is the darker
 *              flat overlay used by the fourth card, which has no excerpt
 * `titleFont`— two of the cards set their heading in Anton, the rest in
 *              Hanken Grotesk; both are preserved
 *
 * `article`  — full detail-page content, written in the same structure as the
 *              featured post's (intro, body, pull quote, subheading, closing,
 *              tags, related posts). None of this text was in either source
 *              document; see the README for exactly what that means and how to
 *              replace it with your own writing.
 */
const sourcePosts = [
  {
    id: 'post-1',
    slug: 'understanding-discipline-beyond-rules',
    span: 'md:col-span-8',
    variant: 'gradient',
    category: 'Global Journey',
    title: 'Understanding Discipline Beyond Rules',
    titleFont: 'font-headline-lg',
    excerpt:
      "In the United Kingdom, history isn't just in books—it's in the way people respect public space. My observations on how history shapes modern civic sense.",
    clampExcerpt: true,
    image: IMG_GLOBAL_JOURNEY,
    alt: 'Global Journey',
    article: {
      detailBadge: 'Global Journey',
      date: 'May 2, 2024',
      readTime: '5 Min Read',
      intro:
        "In the United Kingdom, history isn't just in books\u2014it's in the way people respect public space. Centuries-old buildings still stand not because they're protected by force, but because generations of people decided, individually, that they were worth protecting.",
      body: [
        'I watched commuters queue without being told to, cyclists wait at empty crossings, and strangers correct a stumbling tourist\u2019s footing on a wet platform without being asked. None of it was enforced. All of it was inherited \u2014 a civic muscle memory built over decades, not imposed in a single generation.',
      ],
      pullQuote: 'Discipline is not obedience. It is a nation\u2019s memory, worn as habit.',
      subheading: 'What History Teaches the Present',
      closing: [
        'India has older monuments and older stories than most of what I saw abroad. What we haven\u2019t yet built, at scale, is the daily habit of treating shared space as personally owned. That habit isn\u2019t taught in a single lecture \u2014 it\u2019s modelled, repeated, and normalised, usually starting in a classroom long before it shows up on a street.',
      ],
      tags: ['GlobalJourney', 'Discipline', 'UnitedKingdom'],
      relatedSlugs: [
        'why-tomorrows-india-is-sitting-inside-todays-classrooms',
        'rules-as-habit-not-fear',
        'citizens-as-brand-ambassadors',
      ],
    },
  },
  {
    id: 'post-2',
    slug: 'small-actions-great-societies',
    span: 'md:col-span-4',
    variant: 'gradient',
    category: 'Leadership',
    title: 'Small Actions, Great Societies',
    titleFont: 'font-display-md',
    excerpt: 'Why the habit of following rules is more powerful than the fear of breaking them.',
    image: IMG_CLASSROOM_LEADER,
    alt: 'Leadership',
    article: {
      detailBadge: 'Leadership',
      date: 'April 18, 2024',
      readTime: '4 Min Read',
      intro:
        'Every policy paper I\u2019ve read on nation-building talks about infrastructure, GDP, and institutional reform. Fewer talk about the version of nation-building that happens one small, unwitnessed decision at a time.',
      body: [
        'A rule followed only when someone is watching is not discipline \u2014 it\u2019s performance. A rule followed out of habit, with no audience and no consequence, is the beginning of a culture. The difference between the two is not enforcement. It\u2019s upbringing.',
      ],
      pullQuote: 'Great societies are not announced. They accumulate, one unwitnessed decision at a time.',
      subheading: 'Where the Habit Actually Forms',
      closing: [
        'This is why I spend more time in schools than in policy discussions. A classroom is the last place a habit can be formed before it hardens into either civic pride or civic indifference. Get that window right, and the infrastructure conversation gets a great deal easier.',
      ],
      tags: ['Leadership', 'CivicSense', 'Habits'],
      relatedSlugs: [
        'rules-as-habit-not-fear',
        'understanding-discipline-beyond-rules',
        'life-itself-is-the-greatest-classroom',
      ],
    },
  },
  {
    id: 'post-3',
    slug: 'citizens-as-brand-ambassadors',
    span: 'md:col-span-4',
    variant: 'gradient',
    category: 'Nation Building',
    title: 'Citizens as Brand Ambassadors',
    titleFont: 'font-display-md',
    excerpt: 'How every Indian traveling abroad represents a billion voices, and why it matters.',
    image: IMG_GLOBAL_JOURNEY,
    alt: 'Nation Building',
    article: {
      detailBadge: 'Nation Building',
      date: 'March 9, 2024',
      readTime: '4 Min Read',
      intro:
        'Nobody I met abroad had read India\u2019s GDP figures. Everybody had an opinion about India, formed entirely from the Indians they\u2019d actually met \u2014 a colleague, a shopkeeper, a fellow traveller at a station platform.',
      body: [
        'That\u2019s a strange kind of responsibility to carry unknowingly. Every interaction becomes a data point in someone else\u2019s idea of an entire country of over a billion people. No embassy, no campaign, no advertisement does that work as efficiently as one ordinary conversation.',
      ],
      pullQuote: 'You do not represent yourself abroad. You represent everyone who shares your passport.',
      subheading: 'The Diplomacy Nobody Signs Up For',
      closing: [
        'I don\u2019t think this is a burden \u2014 I think it\u2019s a form of leverage most people underuse. If every Indian travelling, studying, or working abroad understood this, we wouldn\u2019t need a bigger marketing budget for the country. We\u2019d just need better classrooms.',
      ],
      tags: ['NationBuilding', 'GlobalJourney', 'Identity'],
      relatedSlugs: [
        'understanding-discipline-beyond-rules',
        'people-protect-what-they-believe-they-own',
        'why-tomorrows-india-is-sitting-inside-todays-classrooms',
      ],
    },
  },
  {
    id: 'post-4',
    slug: 'education-beyond-textbooks',
    span: 'md:col-span-4',
    variant: 'solid',
    category: 'Student Awareness',
    title: 'Education Beyond Textbooks',
    titleFont: 'font-headline-lg',
    image: IMG_CHALK_SKETCH,
    alt: "A macro shot of a young student's hand sketching a futuristic Indian cityscape on a blackboard. The focus is sharp on the chalk and hand, with a shallow depth of field blurring the background. The lighting is moody and cinematic, with a soft pink glow emanating from the chalk strokes, symbolizing inspiration and creativity. The overall aesthetic is dark and intellectual.",
    article: {
      detailBadge: 'Student Awareness',
      date: 'February 21, 2024',
      readTime: '4 Min Read',
      intro:
        'Ask a student what they learned this term and most will list subjects. Ask them what they learned about themselves, and the room usually goes quiet \u2014 not because the answer isn\u2019t there, but because nobody asked the question before.',
      body: [
        'The curriculum teaches what to know. It rarely teaches how to decide, how to disagree well, or how to notice the effect of your own actions on the people around you. Those are the lessons that outlast every exam.',
      ],
      pullQuote: 'A syllabus can be finished. A character is never quite done being built.',
      subheading: 'What a Session Actually Covers',
      closing: [
        'That\u2019s the gap I try to work in when I visit a school \u2014 not replacing the syllabus, but sitting in the space next to it, where a student decides what kind of adult they intend to become.',
      ],
      tags: ['Education', 'StudentAwareness', 'Mentorship'],
      relatedSlugs: [
        'why-tomorrows-india-is-sitting-inside-todays-classrooms',
        'life-itself-is-the-greatest-classroom',
        'small-actions-great-societies',
      ],
    },
  },
  {
    id: 'post-5',
    slug: 'the-legacy-of-maharana-pratap',
    span: 'md:col-span-4',
    variant: 'gradient',
    accent: 'border-b-4 border-primary',
    category: 'Culture',
    title: 'The Legacy of Maharana Pratap',
    titleFont: 'font-display-md',
    excerpt: 'Applying the courage of Chittorgarh to modern business challenges in AEC industry.',
    image: IMG_CHALK_SKETCH,
    alt: 'Culture',
    article: {
      detailBadge: 'Culture',
      date: 'January 30, 2024',
      readTime: '5 Min Read',
      intro:
        'I grew up in the shadow of Chittorgarh Fort, in a city where the story of Maharana Pratap isn\u2019t history-book history \u2014 it\u2019s the story you hear at dinner tables, the one that shapes how people here think about pride and refusal.',
      body: [
        'What strikes me now, in boardrooms rather than battlefields, is how directly that legacy applies to modern leadership. Pratap\u2019s defining trait wasn\u2019t victory \u2014 it was refusing to trade principle for convenience, even at enormous cost. Most business decisions never carry stakes that high, and yet the instinct to compromise on principle for a quieter life shows up constantly.',
      ],
      pullQuote: 'Courage in business rarely looks like a battlefield. It looks like a hard no, said calmly.',
      subheading: 'Bringing Chittorgarh Into the Boardroom',
      closing: [
        'I don\u2019t invoke this history for nostalgia. I invoke it because the AEC industry, like most industries, rewards short-term compromise. Every so often it\u2019s worth remembering that the fort still stands not because it went unchallenged, but because it refused to fold.',
      ],
      tags: ['Culture', 'Chittorgarh', 'Leadership'],
      relatedSlugs: [
        'citizens-as-brand-ambassadors',
        'understanding-discipline-beyond-rules',
        'why-tomorrows-india-is-sitting-inside-todays-classrooms',
      ],
    },
  },
];

/**
 * PLACEHOLDERS — replace these with your real archive posts.
 *
 * The source listing document contained only the five posts above, so "Load
 * Older Reflections" would have had nothing to reveal. These three exist purely
 * so the button demonstrably works; their themes are drawn from copy already on
 * the Lessons page. Delete them, or swap in real entries, and both the
 * pagination and their detail pages keep working either way.
 */
const archivePosts = [
  {
    id: 'archive-1',
    slug: 'people-protect-what-they-believe-they-own',
    span: 'md:col-span-4',
    variant: 'gradient',
    category: 'Civic Sense',
    title: 'People Protect What They Believe They Own',
    titleFont: 'font-display-md',
    excerpt: 'On the shift that happens when "my" expands beyond the front door.',
    image: IMG_GLOBAL_JOURNEY,
    alt: 'Civic Sense',
    article: {
      detailBadge: 'Civic Sense',
      date: 'December 12, 2023',
      readTime: '3 Min Read',
      intro:
        'In Tokyo, I watched a commuter pick up a stray wrapper that wasn\u2019t theirs. When I asked why, they didn\u2019t understand the question. "It\u2019s my city," they said, as if the wrapper had always belonged to them the moment it landed on their street.',
      body: [
        'In India, we treat our homes like temples and our streets like nobody\u2019s. The two habits aren\u2019t contradictory \u2014 they\u2019re consistent. We protect exactly what we believe belongs to us, and nothing more.',
      ],
      pullQuote: 'The shift happens when "my" expands beyond the front door.',
      subheading: 'Ownership Is Taught, Not Assumed',
      closing: [
        'Teaching a child that the school wall is "theirs" the same way their notebook is "theirs" is a small idea with a large downstream effect. It\u2019s also one of the easiest lessons to teach \u2014 and one of the most consistently skipped.',
      ],
      tags: ['CivicSense', 'PublicProperty', 'Education'],
      relatedSlugs: [
        'small-actions-great-societies',
        'citizens-as-brand-ambassadors',
        'understanding-discipline-beyond-rules',
      ],
    },
  },
  {
    id: 'archive-2',
    slug: 'rules-as-habit-not-fear',
    span: 'md:col-span-8',
    variant: 'gradient',
    category: 'Discipline',
    title: 'Rules as Habit, Not Fear',
    titleFont: 'font-headline-lg',
    excerpt:
      'Standing at a red light at 2 AM with no cars in sight taught me more about a functioning society than any policy paper.',
    clampExcerpt: true,
    image: IMG_CLASSROOM_LEADER,
    alt: 'Discipline',
    article: {
      detailBadge: 'Discipline',
      date: 'November 3, 2023',
      readTime: '4 Min Read',
      intro:
        'Standing at a red light in London at 2 AM with no cars in sight, I watched a small line of pedestrians simply wait. Nobody was enforcing it. Nobody was even watching.',
      body: [
        'That single moment reframed how I think about order. I had always assumed discipline came from consequence \u2014 fines, cameras, the fear of being caught. What I saw instead was rhythm: a habit so deeply installed that breaking it would have felt wrong, not risky.',
      ],
      pullQuote: 'Fear enforces a rule once. Habit enforces it forever, unwatched.',
      subheading: 'Building the Habit Before the Law Needs To',
      closing: [
        'You cannot legislate a habit into existence. You can only model it, repeatedly, early enough that it becomes indistinguishable from personality. That work happens years before anyone is old enough to hold a driving licence.',
      ],
      tags: ['Discipline', 'GlobalJourney', 'CivicSense'],
      relatedSlugs: [
        'understanding-discipline-beyond-rules',
        'small-actions-great-societies',
        'why-tomorrows-india-is-sitting-inside-todays-classrooms',
      ],
    },
  },
  {
    id: 'archive-3',
    slug: 'life-itself-is-the-greatest-classroom',
    span: 'md:col-span-4',
    variant: 'gradient',
    category: 'Lifelong Learning',
    title: 'Life Itself is the Greatest Classroom',
    titleFont: 'font-display-md',
    excerpt: 'The degrees that mattered most were earned in conversations with strangers across three continents.',
    image: IMG_CHALK_SKETCH,
    alt: 'Lifelong Learning',
    article: {
      detailBadge: 'Lifelong Learning',
      date: 'October 5, 2023',
      readTime: '3 Min Read',
      intro:
        'None of my most useful lessons were graded. They came from a taxi driver in Sydney, a librarian outside Oxford, a shopkeeper in Chittorgarh who has watched three generations of the same families walk past his counter.',
      body: [
        'Formal education gave me the vocabulary to describe what I was seeing. It didn\u2019t give me the seeing itself. That came from paying attention in rooms with no syllabus and no exam at the end.',
      ],
      pullQuote: 'The world is a book, and those who do not travel read only one page.',
      subheading: 'What School Can\u2019t Finish',
      closing: [
        'I don\u2019t say this to diminish the classroom \u2014 I say it because the classroom works best when it teaches students to keep learning after the bell rings, for the rest of their lives, from whoever happens to be standing next to them.',
      ],
      tags: ['LifelongLearning', 'GlobalJourney', 'Reflection'],
      relatedSlugs: [
        'small-actions-great-societies',
        'education-beyond-textbooks',
        'why-tomorrows-india-is-sitting-inside-todays-classrooms',
      ],
    },
  },
];

export const blogPosts = [...sourcePosts, ...archivePosts];

/** How many cards are on screen before the first "Load Older Reflections" click. */
export const INITIAL_COUNT = sourcePosts.length;

/** How many more appear per click. */
export const LOAD_STEP = 3;

/**
 * Looks up a post by its route slug, checking the featured post first since
 * it isn't part of the `blogPosts` listing array.
 */
export function getPostBySlug(slug) {
  if (featuredPost.slug === slug) return featuredPost;
  return blogPosts.find((post) => post.slug === slug) ?? null;
}

/** Resolves a post's `relatedSlugs` into full post records for display. */
export function getRelatedPosts(slugs = []) {
  const all = [featuredPost, ...blogPosts];
  return slugs.map((slug) => all.find((post) => post.slug === slug)).filter(Boolean);
}
