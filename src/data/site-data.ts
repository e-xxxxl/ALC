/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, FaqItem, ProcessStep, JobOpening } from '../types';

export const PHONE_PRIMARY = "07932880794";
export const PHONE_SECONDARY = "07939687731";
export const EMAIL_PRIMARY = "info@affectionatelivingcare.com";
export const EMAIL_SECONDARY = "info@affectionatecareliving.com";
export const ADDRESS_UK = "18 Evans Grove, Biggleswade SG18 8JG, United Kingdom";

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: "personal-care",
    title: "Personal Care",
    badge: "Most Popular",
    shortDescription: "Committed, polite, and fully customized help with hygiene, dressing, meals, and day-to-day well-being.",
    description: "Our Personal Care service provides dignified, professional, and intimate support designed to help you maintain your hygiene, safety, and self-esteem within the comfort of your own home.",
    longDescription: "Personal care is at the root of a fulfilling, independent life. Our trained, vetted, and deeply empathetic carers support with daily routines that might have become difficult or stressful. Each care plan is constructed around the specific rhythms of your day — from waking up to settling down for sleep. We approach personal care with the highest degree of respect, modesty, and privacy.",
    benefits: [
      "Bathing, showering, and full personal hygiene assistance",
      "Support with dressing, grooming, and hair care",
      "Incontinence management and toilet assistance with total discretion",
      "Help with waking up and morning routines, or settling into bed safely",
      "Nutrient-dense meal preparation, nutrition tracking, and assistance with eating",
      "Application of moisturizers, and support with skin integrity and pressure alleviation"
    ],
    whoItsFor: [
      "Elderly individuals experiencing decline in mobility or energy",
      "Those recovering from major surgical procedures or hospital visits",
      "Individuals living with chronic illnesses or temporary physical challenges",
      "Anyone who requires a respectful hand to confidently start and finish their day"
    ],
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=600",
    iconName: "HeartPulse"
  },
  {
    slug: "reablement-support",
    title: "Reablement Support",
    shortDescription: "Short-term therapeutic support to help you regain full independence after an illness, injury, or hospital discharge.",
    description: "Reablement is a focused, short-term support service designed to help you learn (or relearn) the skills necessary for daily living.",
    longDescription: "Unlike traditional care which does things 'for' you, reablement works 'with' you to build strength, practice mobility, and establish new routines so you can manage independently. Whether recovering from a severe infection, a fall, or a orthopedic operation, our team coaches you toward self-reliance.",
    benefits: [
      "Targeted strength and balance physical activity guidance under professional instructions",
      "Gradual confidence building in tasks like cooking, washing, and visiting neighbors",
      "Identifying safety enhancements and helpful aids/adaptations for the home",
      "Collaborative review sessions to track recovery milestones week by week",
      "Transition support moving from total dependency back to complete self-governance"
    ],
    whoItsFor: [
      "Individuals post-discharge from NHS hospitals needing active recovery coaching",
      "Elderly citizens who have suffered a fall and are fearful of moving independently",
      "People who need short-term, goal-oriented support after a major health episode"
    ],
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=600",
    iconName: "Accessibility"
  },
  {
    slug: "respite-care",
    title: "Respite Care",
    badge: "Flexible Hours",
    shortDescription: "Temporary, heartwarming relief for family and primary caregivers, ensuring continuous professional care.",
    description: "Respite care steps in to look after your loved one to the exact standard you do, allowing you to rest, recover, and avoid caregiver burnout.",
    longDescription: "Caregiving is an ultimate expression of love, but it is also physically and emotionally demanding. Our respite care program matches your loved one with an expert who respects their routine and provides seamless support. Whether you need a few afternoon hours for errands, or a full week of coverage for a well-deserved vacation, we are here.",
    benefits: [
      "Full coverage of all household, social, and personal requirements",
      "Detailed handovers to maintain complete continuity of food and medicine schedules",
      "Comforting companionship ensuring your loved one never feels lonely or disrupted",
      "Flexible booking options ranging from emergency same-day covers to planned holiday breaks"
    ],
    whoItsFor: [
      "Dedicated partner or child caregivers requiring a mental and physical break",
      "Families planning a holiday or trip who cannot easily transport their dependent relative",
      "Primary carers dealing with their own urgent medical or family situations"
    ],
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=600",
    iconName: "Clock"
  },
  {
    slug: "live-in-care",
    title: "Live-in Care",
    badge: "24/7 Peace of Mind",
    shortDescription: "Constant, dedicated, and welcoming 24-hour support by a matched caregiver residing full-time in your home.",
    description: "A wonderful, premium alternative to care homes. A professional carer lives in your house to deliver personalized assistance.",
    longDescription: "Live-in care ensures that your loved one can remain in their beloved household, surrounded by familiar memories, pets, and neighbors, while receiving consistent, round-the-clock support. Our care team selects caregivers based on skills, temperament, and shared interests to foster genuine, active companionship.",
    benefits: [
      "No disruption from moving out of a lifelong home with cherished memories",
      "Immediate assistance through day and night for toilet, falls, or reassurance",
      "Housekeeping support: laundry, cleaning, shopping, and home cooking",
      "Continuous companionship and assistance with social visits and hobbies"
    ],
    whoItsFor: [
      "Seniors who are increasingly fragile and cannot safely spend nights alone",
      "Individuals with progressive dementia who find changes in environment deeply distressing",
      "Couples who wish to stay together rather than register into separate residential care rooms"
    ],
    image: "https://images.unsplash.com/photo-1576765608866-5b5104845990?auto=format&fit=crop&q=80&w=600",
    iconName: "Home"
  },
  {
    slug: "complex-care",
    title: "Complex Care",
    shortDescription: "Clinical, nurse-led support for highly specialized healthcare requirements and severe physical conditions.",
    description: "Clinical, attentive, and specialized care addressing complex medical needs comfortably inside the home.",
    longDescription: "Complex care handles advanced clinical requirements that would traditionally necessitate long-term hospital stays or nursing home registry. Our carers are specialized under professional healthcare guidelines to manage complex systems, severe physical difficulties, and chronic medical plans safely.",
    benefits: [
      "Management of clinical tubing, feeding lines, and catheter routines",
      "Precise monitoring of blood parameters, diabetic profiles, and complex medicine schedules",
      "Postural adjustment, specialized hoisting, and pressure area care",
      "Direct cooperation with NHS doctors, occupational therapists, and district nurses"
    ],
    whoItsFor: [
      "People living with progressive neurological conditions (e.g. MND, multiple sclerosis)",
      "Individuals with spinal cord injuries, complex brain injuries, or physical paralysis",
      "Patients requiring palliative support and dignified end-of-life care at home"
    ],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    iconName: "Stethoscope"
  },
  {
    slug: "dementia-care",
    title: "Dementia Care",
    badge: "Expert Certified",
    shortDescription: "Gentle, memory-stimulating, and safety-focused assistance designed for individuals living with Alzheimer's and all forms of dementia.",
    description: "Highly compassionate, specialized dementia care that keeps your loved one safe in their most comforting, familiar surroundings.",
    longDescription: "Dementia changes how a person connects with the world. Our specialist dementia care matches individuals with trained coaches who understand the nuances of memory loss, confusion, and behavioral shifts. We work to maximize positive moments, reduce frustration, establish predictable routines, and protect their physical safety without stripping away independence.",
    benefits: [
      "Reassuring, patience-centered companion techniques to reduce anxiety and wandering",
      "Memory care activities: photo-album discussions, therapeutic music, and basic puzzles",
      "Strict safety structures inside the house to alert or prevent stoves and water accidents",
      "Nutritional guidance and assistance utilizing visual indicators to increase meals absorption",
      "Compassionate support for sleep-wake cycle disturbances (sundowning symptoms)"
    ],
    whoItsFor: [
      "Individuals diagnosed with Alzheimer's, vascular, or mixed-type dementia",
      "Seniors suffering from distressing confusion or sudden behavioral changes at home",
      "Families searching for peace of mind that their loved one is protected and understood"
    ],
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=600",
    iconName: "BrainCircuit"
  },
  {
    slug: "strokes-and-brain-injuries",
    title: "Strokes & Brain Injuries",
    shortDescription: "Comprehensive cognitive and physical support programs to aid neural recovery and daily life adaptation.",
    description: "Specialized rehabilitation and support plans to help individuals rebuild vital abilities post-injury or stroke.",
    longDescription: "A stroke or sudden acquired brain injury completely changes family dynamics. We focus on active recovery and long-term coping mechanisms. Our staff is trained to coordinate speech patterns, motor skill repetitions, cognitive exercises, and psychological support.",
    benefits: [
      "Coordinated routines for swallowing, speaking, and reading recovery",
      "Attentive physical assistance for hemiplegia (one-sided weakness or paralysis)",
      "Establishing mental checksheets, planners, and schedules for memory gaps",
      "Encouraging, high-energy companionship to prevent post-stroke isolation and depression"
    ],
    whoItsFor: [
      "Stroke survivors moving into their post-hospital acute rehabilitation phase",
      "Individuals recovering from traumatic falls, accidents, or neural surgeries",
      "People seeking to maximize their cognitive and physical capabilities over months or years"
    ],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600",
    iconName: "Activity"
  },
  {
    slug: "learning-disabilities",
    title: "Learning Disabilities",
    shortDescription: "Empowering, child-and-adult focus that boosts autonomy, physical skills, and participation in the local community.",
    description: "Person-centered, active, and empowering support that aids learning, social, and professional skills for a full life.",
    longDescription: "We believe having a learning disability should never limit someone’s opportunity to thrive. Our staff works closely with young people and adults to create highly interactive personal growth programs. We support with managing household budgets, navigating transit networks, exploring hobbies, and volunteering.",
    benefits: [
      "Developing daily living skills: budgeting, shopping, healthy cooking, and cleaning",
      "Travel coaching to navigate buses, trains, and local towns with absolute security",
      "Ensuring access to adult educational programs, volunteering, or supported employment",
      "Implementing visual calendars, clear signposts, and personalized coping plans"
    ],
    whoItsFor: [
      "Adults on the autism spectrum or with developmental learning disabilities seeking self-reliance",
      "Young adults transitioning out of child services into independent tenancy spaces",
      "Parents hoping to secure structured, empowering schedules for their adult child"
    ],
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600",
    iconName: "Compass"
  },
  {
    slug: "physical-disabilities",
    title: "Physical Disabilities",
    shortDescription: "Specialized non-imposing support, focusing on dignified mobility, hoisting assistance, and social empowerment.",
    description: "Dignified, enabling, and strength-based support allowing individuals with physical limitations to lead rich lives.",
    longDescription: "Our caregivers understand that physical disabilities should not restrict active participation in life. We focus on adapting our assistance to match your precise goals. Utilizing advanced slide-sheets, modern hoist techniques, and transport aids, we ensure your daily safety while prioritizing your comfort.",
    benefits: [
      "Safe, trauma-free manual transfers utilizing hoists, stands, and slide sheets",
      "Help accessing public pools, sports, therapeutic massage, or cultural outings",
      "Managing regular administrative tasks, typing, mail, and household structures",
      "Ensuring comfort, checking joints for pressure points, and active muscular extension support"
    ],
    whoItsFor: [
      "Individuals living with congenital physical structures (e.g. cerebral palsy, spina bifida)",
      "Seniors dealing with severe, advancing arthritis or rheumatoid complications",
      "Anyone seeking a respectful, collaborative assistant for dynamic bodily transport"
    ],
    image: "https://images.unsplash.com/photo-1540324155974-7265d7c6a1e6?auto=format&fit=crop&q=80&w=600",
    iconName: "Users"
  },
  {
    slug: "outreach-support",
    title: "Outreach Support",
    shortDescription: "Flexible community outreach targeting isolation, social engagement, and medical appointments accompaniment.",
    description: "Connecting you with your community, facilitating dynamic social links, medical visits, and active hobbies.",
    longDescription: "Life happens beyond the front door. Our outreach service is built for individuals who desire a professional, structured partner to access therapeutic classes, complete food purchases, visit doctors, or sit in local parks. We focus on ending loneliness and restoring community presence.",
    benefits: [
      "Safe transport, driving, or walking support to any local clinic, post, or church",
      "Exploratory guidance to try local book clubs, dementia cafes, or leisure programs",
      "Accompaniment on shopping trips to Biggleswade retail spaces or grocery centers",
      "Patience-centered help for individuals with high social anxiety or panic histories"
    ],
    whoItsFor: [
      "Seniors who feel isolated, lonely, or unable to navigate outdoor environments safely",
      "People with recovery-associated anxieties who need a supportive companion to go outside",
      "Anyone who wants to regain active routines within Biggleswade and surrounding Bedfordshire towns"
    ],
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600",
    iconName: "MapPin"
  },
  {
    slug: "adult-care",
    title: "Adult Care",
    badge: "Over 18",
    shortDescription: "Comprehensive, warm-hearted daily care, companionship, and specialized clinical support for adults of all ages.",
    description: "Our comprehensive home-care suite for adults is built on a simple foundation: helping you or your loved one live with joy, structure, and respect in your own home.",
    longDescription: "Adult care addresses the broad spectrum of physical, neurological, and emotional needs that mature individuals experience. We deliver support with everyday household operations, physical rehabilitation, memory focus, and medication schedules. Our team is dedicated to matching you with a professional carer who shares your outlook and respects your values.",
    benefits: [
      "Bespoke physical, dietary and mental support plans tailored to your life priorities",
      "Support with social integrations, family events, and neighborhood connection plans",
      "Liaison with family doctors, occupational therapists, and local community groups",
      "Housekeeping support: healthy home cooking, cleaning, laundry, and gardening assist"
    ],
    whoItsFor: [
      "Adults of all age brackets living with health conditions that impact their independence",
      "Seniors who prefer living at home but require support with cooking, mobility or memory",
      "Relatives seeking reassuring, trained care for their parent or partner"
    ],
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=600",
    iconName: "ShieldAlert"
  },
  {
    slug: "child-care",
    title: "Child Care",
    badge: "0-18 Years",
    shortDescription: "Compassionate, specialist supportive care focusing on safety, developmental milestones, and clinical pediatric tasks.",
    description: "Pediatric-focused home care that brings warmth, fun, developmental consistency, and specialized nursing support to your child’s routine.",
    longDescription: "Our pediatric team delivers specialist support for children from birth to age 18. We understand that a child's care must be delivered with immense sensitivity, playful creativity, and an unwavering focus on developmental milestones. We blend clinical precision with childhood fun, working alongside parents, teachers, and pediatricians to keep your child comfortable at home.",
    benefits: [
      "Specialist clinical support for neurodiversity, genetic conditions, and physical dependencies",
      "Developmental play sessions, cognitive stimulation, and educational support",
      "Assistance with morning routines, school preparation, and settling down at night",
      "Respite options allowing parents to rest, spend time with siblings, or attend appointments"
    ],
    whoItsFor: [
      "Children and young people with progressive physical or learning disabilities",
      "Young pediatric patients requiring high-level clinical care plans at home",
      "Families seeking specialized, empathetic support to build structured, peaceful routines"
    ],
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600",
    iconName: "Baby"
  }
];

export const GENERAL_FAQS: FaqItem[] = [
  {
    id: "faq-1",
    question: "What types of home care services do you offer?",
    answer: "We offer a fully comprehensive range of home care services including Personal Care (hygiene, bathing, dressing), Companionship, Reablement support (post-hospital recovery), Respite Care to support family caretakers, specialist Dementia and Alzheimer's Care, Live-in 24/7 care, Complex clinical care, and specialized support for both Adults and Children (0-18 years) with physical or learning disabilities.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "How do I know which care plan is right for my loved one?",
    answer: "We offer a Free Homecare Assessment where our senior advisor visits your loved one in their home. We talk about their health needs, routines, preferences, and social goals. Together, we write a personalized, transparent care plan. You are in total control and can adjust the schedule or duties at any time.",
    category: "Planning"
  },
  {
    id: "faq-3",
    question: "Are your carers trained and background-checked?",
    answer: "Yes, absolutely. Safety and trust are our highest priorities. All our carers undergo rigorous screening, including enhanced DBS (Disclosure and Barring Service) background checks in the UK, reference audits, and complete character vetting. They undergo intensive training program covering safe manual handling, infection control, dementia standards, and emergency response.",
    category: "Safety"
  },
  {
    id: "faq-4",
    question: "Do you provide care on weekends and bank holidays?",
    answer: "Yes, we operate 365 days a year, including all weekends and UK bank holidays (including Christmas and New Year). Our emergency phone lines are monitored and answered 24/7, so you never have to worry about missing crucial medication, cooking, or personal routines.",
    category: "General"
  },
  {
    id: "faq-5",
    question: "Is there a minimum contract length or booking duration?",
    answer: "We believe in total flexibility. We do not tie families into restrictive long-term contracts. Our visits can range from simple 30-minute companionship checks to full 24-hour live-in support. You can scale care up or down as your loved one's recovery progresses or family schedules change.",
    category: "Planning"
  },
  {
    id: "faq-6",
    question: "How do you match carers with my loved one?",
    answer: "We don't just assign anyone. We believe great care begins with authentic, heartwarming connections. We match our carers based on clinical skills, but also on personality traits, shared hobbies (like gardening, crosswords, or walks), and conversational compatibility. We often schedule introductions so you can meet the carer beforehand.",
    category: "Safety"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Book a Free Consultation",
    description: "Speak with our friendly care advisor to discuss your needs; no pressure, just supportive guidance."
  },
  {
    step: 2,
    title: "Free Homecare Assessment",
    description: "Free homecare assessment to create a personalized care plan tailored to your needs."
  },
  {
    step: 3,
    title: "Get a Personalised Care Plan",
    description: "We’ll create a tailored care plan that suits your routine, preferences, and goals; just like you."
  },
  {
    step: 4,
    title: "Start with Confidence",
    description: "Our trained, compassionate carers start support; giving you peace of mind from day one."
  }
];

export const TRUSTED_POINTS = [
  {
    id: "trusted-1",
    title: "Stay Independent, Longer",
    description: "Live life on your terms with the right support to keep you safe at home.",
    iconName: "ShieldCheck"
  },
  {
    id: "trusted-2",
    title: "Care That Feels Personal",
    description: "No one-size-fits-all; just compassionate, tailored care that fits your lifestyle.",
    iconName: "User"
  },
  {
    id: "trusted-3",
    title: "Professional Carers You Can Trust",
    description: "Know your family is supported by trained professionals who genuinely care.",
    iconName: "Award"
  }
];

export const RECENT_JOBS: JobOpening[] = [
  {
    id: "job-1",
    title: "Compassionate Home Care Worker",
    department: "Dometic Services & Personal Care",
    location: "Biggleswade & surrounding areas",
    type: "Full-Time / Part-Time",
    salary: "£13.50 - £16.00 / hour (plus mileage allowance)",
    description: "We are looking for warm, dedicated, and empathetic care workers to assist local citizens with companionship, personal care, and domestic routines.",
    requirements: [
      "A warm-hearted, reliable, and respectful personality",
      "Excellent active listening and communication skills",
      "Full UK Driving License and access to a reliable vehicle (preferred but not mandatory for all routes)",
      "Willingness to undergo an enhanced DBS check",
      "Prior care experience is welcome, but compile training will be fully provided!"
    ]
  },
  {
    id: "job-2",
    title: "Specialist Dementia Carer",
    department: "Mental Health & Elderly Dementia Care",
    location: "Biggleswade",
    type: "Part-Time",
    salary: "£15.00 - £17.50 / hour",
    description: "Support clients living with varying stages of dementia at home. Focus on memory stimulation games, calming presence, safety oversight, and medication assistance.",
    requirements: [
      "Minimum 1-2 years experience as a care professional focused on dementia/Alzheimer's",
      "Dementia Care Certificate or NVQ/QCF Level 2/3 in Health and Social Care is highly valued",
      "Outstanding emotional stability, patience, and visual stimulation skills",
      "Enhanced DBS check is absolute requirement"
    ]
  },
  {
    id: "job-3",
    title: "24/7 Live-in Care Professional",
    department: "Live-in Care Services",
    location: "Bedfordshire Region",
    type: "Full-Time (Rotational, e.g. 2 weeks on, 2 weeks off)",
    salary: "£900 - £1,150 / week (including food allowance & private board)",
    description: "Live inside a client's private home to offer comprehensive support, meal preparation, companion walking, laundry, and round-the-clock peace of mind.",
    requirements: [
      "Proven live-in care history (references checked meticulously)",
      "High level of culinary capability (ability to cook healthy, fresh traditional UK recipes)",
      "Excellent boundary respect, cleanliness style, and companion conversation skills",
      "Up-to-date manual handling certification"
    ]
  }
];
