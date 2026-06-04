/* ─────────────────────────────────────────────────────────────────────────
   Site content for StructureSeal (structureseal.com.au).
   ──────────────────────────────────────────────────────────────────────── */

export const CONTACT = {
  tagline: 'Reliable Flooring & Waterproofing That Lasts',
  phone: '1300 699 799',
  phoneHref: 'tel:1300699799',
  email: 'info@structureseal.com.au',
  emailHref: 'mailto:info@structureseal.com.au',
  area: 'Sydney & surrounds',
} as const

export const SYSTEMS = [
  {
    id: 'epoxy-flooring',
    code: 'SS-01',
    name: 'Epoxy Flooring',
    tag: 'Flooring',
    traits: ['Seamless', 'High-Gloss', 'Chemical Resistant'],
    description:
      'We specialise in top-notch epoxy flooring solutions that not only enhance the aesthetic appeal of your space but also provide durability and resistance against wear and tear.',
    bestFor: ['Warehouses', 'Commercial kitchens', 'Showrooms', 'Workshops'],
    steps: [
      {
        name: 'Grind & Prepare',
        desc: 'We diamond-grind the slab to open the concrete profile and remove laitance, dust, and old coatings. A sound, clean substrate is what makes the bond last.',
        image: '/epoxy-step-1.png',
      },
      {
        name: 'Prime Coat',
        desc: 'A penetrating epoxy primer is applied and allowed to soak into the concrete, creating the chemical key that bonds every layer above it to the slab.',
        image: '/epoxy-step-2.png',
      },
      {
        name: 'Pour & Spread Epoxy',
        desc: 'The build coat is rolled on to the specified thickness. Decorative flake or metallic powder is broadcast at this stage if required.',
        image: '/epoxy-step-3.png',
      },
      {
        name: 'Cure & Finish',
        desc: 'A UV-stable sealer topcoat locks in the finish and protects against traffic and chemicals. The system is left to fully cure before handover.',
        image: '/epoxy-step-4.png',
      },
    ],
    specs: [
      ['Settings', 'Residential, Commercial, Industrial'],
      ['Finishes', 'Solid, Flake, Metallic'],
      ['Cure', '24 to 72 hrs'],
    ] as [string, string][],
  },
  {
    id: 'waterproofing',
    code: 'SS-02',
    name: 'Waterproofing Services',
    tag: 'Waterproofing',
    traits: ['Liquid Membrane', 'Flood-Tested', 'Long-Lasting'],
    description:
      'Our waterproofing services ensure that your structures remain protected against water damage and moisture-related issues, extending their lifespan.',
    bestFor: ['Bathrooms', 'Balconies', 'Basements', 'Wet areas'],
    steps: [
      {
        name: 'Surface Prep',
        desc: 'The substrate is cleaned, ground back, and all cracks or voids are repaired. No membrane performs well on a compromised surface.',
        image: '/waterproofing-step-1.png',
      },
      {
        name: 'Prime & Reinforce',
        desc: 'Primer seals and prepares the surface. Fabric reinforcement mesh is bedded into all corners and joints where movement is most likely to occur.',
        image: '/waterproofing-step-2.png',
      },
      {
        name: 'Apply Membrane',
        desc: 'Liquid waterproof membrane is applied in a minimum of two coats, reaching the specified dry film thickness across the entire area.',
        image: '/waterproofing-step-3.png',
      },
      {
        name: 'Flood Test',
        desc: 'The cured membrane is flood-tested for 24 hours before any tiling, screed, or finishes are installed over it.',
        image: '/waterproofing-step-4.png',
      },
    ],
    specs: [
      ['Areas', 'Wet areas, Balconies, Basements'],
      ['System', 'Liquid membrane'],
      ['Check', 'Flood-tested'],
    ] as [string, string][],
  },
  {
    id: 'general-contracting',
    code: 'SS-03',
    name: 'General Contracting',
    tag: 'Contracting',
    traits: ['Full-Service', 'On-Time', 'Quality-Focused'],
    description:
      'As a full-service construction company, we manage all aspects of your project from inception to completion, ensuring quality and timely delivery.',
    bestFor: ['Residential builds', 'Commercial fitouts', 'Industrial projects'],
    steps: [
      {
        name: 'Site Assessment',
        desc: 'First inspection of the site. We document existing conditions, identify the full scope, and ask the right questions before anything else.',
        image: '/contracting-step-1.png',
      },
      {
        name: 'Scope & Schedule',
        desc: 'A detailed programme is built: what gets done, by whom, and by when. All costs are locked in before work starts.',
        image: '/contracting-step-2.png',
      },
      {
        name: 'Trade Coordination',
        desc: 'We manage all trades on-site, handle materials delivery, and keep the build moving to programme without gaps or clashes.',
        image: '/contracting-step-3.png',
      },
      {
        name: 'Handover',
        desc: 'Final walkthrough, defect rectification, and formal client sign-off. The space is handed back clean, complete, and on time.',
        image: '/contracting-step-4.png',
      },
    ],
    specs: [
      ['Scope', 'Full project'],
      ['Delivery', 'On time'],
      ['Focus', 'Quality'],
    ] as [string, string][],
  },
  {
    id: 'custom-building',
    code: 'SS-04',
    name: 'Custom Building',
    tag: 'Custom',
    traits: ['Bespoke', 'Client-Led', 'Precision-Built'],
    description:
      'We work closely with clients to create custom-built solutions tailored to their specific needs, transforming your vision into a reality.',
    bestFor: ['Homeowners', 'Architects', 'Developers', 'Fit-out clients'],
    steps: [
      {
        name: 'Client Brief',
        desc: 'We sit with you to fully understand the brief: what you need, how it needs to feel, and any constraints we have to work within.',
        image: '/custom-step-1.png',
      },
      {
        name: 'Design & Samples',
        desc: 'Options are developed and physical samples or drawings are produced so you can see and approve what you are getting before anything is built.',
        image: '/custom-step-2.png',
      },
      {
        name: 'Fabrication & Prep',
        desc: 'Materials are sourced, cut, or prepared exactly to specification. Everything is checked against the brief before site work begins.',
        image: '/custom-step-3.png',
      },
      {
        name: 'Install & Finish',
        desc: 'The solution is installed with precision, checked against every detail of the brief, and finished to the standard agreed from the start.',
        image: '/custom-step-4.png',
      },
    ],
    specs: [
      ['Approach', 'Tailored'],
      ['Finish', 'Bespoke'],
      ['Input', 'Client-led'],
    ] as [string, string][],
  },
  {
    id: 'renovation',
    code: 'SS-05',
    name: 'Renovation Services',
    tag: 'Renovation',
    traits: ['Modernise', 'Refresh', 'Upgrade'],
    description:
      'Our renovation services breathe new life into existing spaces, modernising and adapting them to meet current standards and functionalities.',
    bestFor: ['Outdated spaces', 'Worn surfaces', 'Functional upgrades', 'Remodels'],
    steps: [
      {
        name: 'Condition Assessment',
        desc: 'We assess the existing surface in detail: what is failing, what can be retained, and what needs to come out before anything new goes down.',
        image: '/renovation-step-1.png',
      },
      {
        name: 'Strip & Repair',
        desc: 'Failing coatings, membranes, or substrates are removed. Cracks, spalls, and voids are repaired to restore a sound base.',
        image: '/renovation-step-2.png',
      },
      {
        name: 'Install New System',
        desc: 'The selected flooring, waterproofing, or combined system is applied over the fully prepared surface.',
        image: '/renovation-step-3.png',
      },
      {
        name: 'Modern Finish',
        desc: 'The space is handed back looking updated, functioning properly, and built to last well beyond the original installation.',
        image: '/renovation-step-4.png',
      },
    ],
    specs: [
      ['Type', 'Residential, Commercial'],
      ['Scope', 'Surface to full fit-out'],
      ['Result', 'Modernised space'],
    ] as [string, string][],
  },
  {
    id: 'project-management',
    code: 'SS-06',
    name: 'Project Management',
    tag: 'Management',
    traits: ['Dedicated PM', 'On Budget', 'Transparent'],
    description:
      'Our skilled project managers oversee every detail of your construction projects, ensuring they run smoothly, efficiently, and within budget.',
    bestFor: ['Large builds', 'Multi-trade projects', 'Complex scopes', 'Developer projects'],
    steps: [
      {
        name: 'Initial Scoping',
        desc: 'We meet the project, understand the full scope, and identify every moving part before anyone picks up a tool.',
        image: '/pm-step-1.png',
      },
      {
        name: 'Programme Planning',
        desc: 'A detailed schedule is built, resources are allocated, milestones are set, and the programme is shared with all parties upfront.',
        image: '/pm-step-2.png',
      },
      {
        name: 'On-site Management',
        desc: 'Your dedicated PM coordinates trades daily, manages quality, and resolves issues on the spot before they become delays.',
        image: '/pm-step-3.png',
      },
      {
        name: 'Reporting & Close-out',
        desc: 'Regular written updates throughout the project. Final inspection, defect list, and a structured handover at completion.',
        image: '/pm-step-4.png',
      },
    ],
    specs: [
      ['Service', 'Dedicated PM'],
      ['Output', 'On time, on budget'],
      ['Reporting', 'Regular updates'],
    ] as [string, string][],
  },
] as const

export const LAYERS = [
  { id: 'topcoat',   step: '05', name: 'Sealer / Topcoat',   note: 'UV-stable wear layer.',                                           color: 'var(--color-azure-light)' },
  { id: 'buildcoat', step: '04', name: 'Build Coat',          note: 'Body of the system, laid to thickness.',                          color: 'var(--color-azure-bright)' },
  { id: 'membrane',  step: '03', name: 'Membrane / Base',     note: 'Flexible layer that stops water reaching the structure.',          color: 'var(--color-azure)' },
  { id: 'primer',    step: '02', name: 'Primer',              note: 'Soaks into the surface and creates the key everything bonds to.',  color: 'var(--color-azure-deep)' },
  { id: 'substrate', step: '01', name: 'Prepared Substrate',  note: 'Ground back, repaired and cleaned. Every lasting floor starts here.', color: 'var(--color-chrome)' },
] as const

export const GALLERY = [
  { src: '/work-1.png', caption: 'Double garage · navy flake epoxy' },
  { src: '/work-2.png', caption: 'Home laundry · cobalt epoxy floor' },
  { src: '/work-3.png', caption: 'Basement · waterproof membrane' },
  { src: '/work-4.png', caption: 'Upstairs balcony · membrane & tiling' },
  { src: '/work-5.png', caption: 'Alfresco · sealed concrete' },
  { src: '/work-6.png', caption: 'Master bathroom · wet-area waterproofing' },
  { src: '/work-7.png', caption: 'Ensuite · shower recess waterproofing' },
  { src: '/work-8.png', caption: 'Single garage · solid colour epoxy' },
  { src: '/work-9.png', caption: 'Outdoor pool deck · anti-slip coating' },
] as const

export const FAQS = [
  {
    q: 'What types of flooring do you apply epoxy to?',
    a: 'We apply epoxy flooring in various settings including residential, commercial, and industrial spaces, ensuring a custom fit for each environment.',
  },
  {
    q: 'How long does waterproofing last?',
    a: 'With proper maintenance, our waterproofing services can last many years, providing lasting protection for your structures.',
  },
  {
    q: 'Do you offer guarantees on your services?',
    a: 'Yes, we offer warranties on our services to ensure client confidence and satisfaction with our work.',
  },
  {
    q: 'Can I see examples of your completed projects?',
    a: 'Absolutely! We have a portfolio of completed projects available for potential clients to view.',
  },
  {
    q: 'What is your project timeline?',
    a: 'Timelines vary by project; however, we strive to complete all tasks efficiently without compromising quality.',
  },
  {
    q: 'Is your team licensed and insured?',
    a: 'Yes, our team is fully licensed and insured, adhering to all safety and legal standards.',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      "StructureSeal transformed our warehouse floor in two days flat. The finish is flawless, no dust, no peeling, and it's held up under heavy forklift traffic for over a year without a single issue.",
    name: 'Mark Tavita',
    role: 'Warehouse Manager',
    location: 'Parramatta, NSW',
    service: 'Epoxy Flooring',
    rating: 5,
  },
  {
    quote:
      "We had a leaking balcony that three other tradies couldn't fix. StructureSeal found the fault straight away, flood-tested the membrane, and we haven't had a drop of water since. Wish we'd called them first.",
    name: 'Sarah Langley',
    role: 'Homeowner',
    location: 'Sutherland, NSW',
    service: 'Waterproofing',
    rating: 5,
  },
  {
    quote:
      "Used them across four units in our development: bathrooms, laundries, and garage floors. Consistent quality on every single one. They show up, do it right, and leave the site clean.",
    name: 'James Reeves',
    role: 'Property Developer',
    location: 'Inner West, NSW',
    service: 'Waterproofing & Epoxy',
    rating: 5,
  },
] as const

export const WHY = [
  {
    n: '01',
    title: 'Integrity',
    body: "We keep it transparent and honest from quote to clean-up. You know what's being done, why, and what it costs. No surprises.",
  },
  {
    n: '02',
    title: 'Unmatched Craftsmanship',
    body: 'Every job is prepped properly and finished with precision. We treat the substrate as seriously as the surface, because that is what makes a floor last.',
  },
  {
    n: '03',
    title: 'Modern Solutions',
    body: 'We use current materials and techniques and match the right system to your space: residential, commercial or industrial.',
  },
]
