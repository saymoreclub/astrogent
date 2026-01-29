export const siteConfig = {
  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
    name: 'Teachwell',
    title: 'Teachwell | Sell Courses on Your Own Platform',
    description: 'Professional learning platforms for independent tutors. One fixed monthly fee, zero commission.',
    keywords: 'sell courses, tutor platform, custom LMS, student portal, independent teacher website',
    email: 'hello@teachwell.io',
    ogTitle: 'Teachwell | Sell Courses on Your Own Platform',
    ogDescription: 'Professional learning platforms for tutors. Keep 100% of your revenue.',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Teachwell',
    twitterDescription: 'Custom learning platforms for independent educators.',
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { name: 'Features', href: '#features' },
      { name: 'Process', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Get Started',
      href: '#contact',
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: 'Sell Courses on',
    subheadline: 'Your Own Platform.',
    description: 'We build bespoke learning platforms for tutors who want to own their student experience. Launch your professional course site in hours instead of weeks.',
    cta: {
      primary: { text: 'Start Selling', href: '#contact' },
      secondary: { text: 'View Pricing', href: '#pricing' },
    },
    stats: [
      { value: '<24h', label: 'Launch Time' },
      { value: '0%', label: 'Sales Commission' },
      { value: '100%', label: 'Brand Ownership' },
    ],
  },
  
  // ============================================
  // FEATURES SECTION
  // ============================================
  features: {
    title: 'Own the Experience',
    subtitle: 'Everything you need to host and sell your courses under your own brand',
    items: [
      { icon: 'zap', title: 'Student Dashboard' },
      { icon: 'brush', title: 'Bespoke Branding' },
      { icon: 'layers', title: 'Video Lessons' },
      { icon: 'shield', title: 'Secure Checkouts' },
      { icon: 'chat', title: 'Telegram Support' },
      { icon: 'clock', title: 'Fast Launch' },
      { icon: 'code', title: 'Custom Domain Name' },
      { icon: 'chart', title: 'Progress Tracking' },
      { icon: 'zap', title: 'Stripe & PayPal' },
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: 'The Road to Launch',
    subtitle: 'We build your custom learning environment in four simple steps',
    steps: [
      { number: '01', title: 'Discovery', description: 'We map out your course structure and branding.' },
      { number: '02', title: 'Design', description: 'Our team builds your bespoke portal.' },
      { number: '03', title: 'Integrate', description: 'We connect your domain and payments.' },
      { number: '04', title: 'Launch', description: 'Your platform goes live.' }
    ]
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    title: 'Tutor Success Stories',
    subtitle: 'Join the tutors who have reclaimed their independence.',
    items: [
      {
        name: 'Benjamin Cowling-Monks',
        role: 'Maritime Tutor',
        content: 'Launching my platform in 24 hours felt like magic. I kept every penny of my fees.',
        avatar: 'BC',
        color: 'bg-brand-lavender',
      },
      {
        name: 'David Thorne',
        role: 'Language Coach',
        content: 'The bespoke branding is what sold it for me. It is entirely my own domain.',
        avatar: 'DT',
        color: 'bg-[#fef9c3]',
      },
      {
        name: 'Amara Okafor',
        role: 'Language Tutor',
        content: 'Having a team handle the hosting meant I could stay focused on teaching.',
        avatar: 'AO',
        color: 'bg-[#e0f2fe]',
      }
    ]
  },

  // ============================================
  // PRICING 
  // ============================================
  pricing: {
    title: 'Transparent Monthly Plans',
    subtitle: 'Simple all-in-one pricing. We never take a cut of your sales revenue.',
    plans: [
      {
        name: 'Starter',
        price: '£19',
        period: '/month',
        description: 'For tutors starting out with a small, focused student group.',
        features: [
          'Branded Student Portal',
          'Course Content Hosting',
          'Stripe & PayPal Integration',
          'Direct Email Support',
          'Teachwell Subdomain',
        ],
        cta: { text: 'Start Now', href: '#contact' },
        featured: false,
      },
      {
        name: 'Professional',
        price: '£29',
        period: '/month',
        description: 'The standard for serious independent tutors.',
        badge: 'MOST POPULAR',
        features: [
          'Unlimited Student Accounts',
          'Custom Domain Name',
          'Full Custom Branding',
          'Priority Telegram Support',
          'Weekly Site Backups',
          'Automated Student Onboarding',
        ],
        cta: { text: 'Go Pro', href: '#contact' },
        featured: true,
      },
      {
        name: 'Enterprise',
        price: '£99',
        period: '/month',
        description: 'For tutoring businesses with multiple teachers.',
        features: [
          'Multi-Teacher Logins',
          'Custom Student Reports',
          'We Upload Your Content',
          '1-on-1 Strategy Calls',
          'Priority Telegram Support',
          'Email Automations',
        ],
        cta: { text: 'Talk to Us', href: '#contact' },
        featured: false,
      },
    ],
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    title: 'Common Questions',
    subtitle: 'Everything you need to know about your platform',
    items: [
      { question: 'How long does setup take?', answer: 'Your platform is usually live within 24 hours.' },
      { question: 'Do I own my domain?', answer: 'Yes, we connect to any domain you own.' },
      { question: 'How do I get paid?', answer: 'Instantly via Stripe or PayPal integrations.' },
      { question: 'Are there contracts?', answer: 'No, it is a rolling monthly subscription.' }
    ]
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: 'Start Building Today',
    subtitle: 'Join the educators who own their student experience.',
    email: 'hello@teachwell.io',
    benefits: [
      'Keep 100% of your sales',
      'Own your student data',
      'Fixed monthly pricing',
      'Direct Human support',
    ],
    form: {
      cta: 'Get Started',
      fields: {
        name: { label: 'Full Name', placeholder: 'John Doe', required: true },
        email: { label: 'Email Address', placeholder: 'john@tutor.com', required: true },
        company: { label: 'Platform Name', placeholder: 'e.g. Smith Academy', required: false },
        message: { label: 'Message', placeholder: 'Tell us about your teaching...', required: false },
      },
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline: 'Bespoke learning platforms for independent tutors.',
    copyright: `Teachwell.io 2026. All rights reserved.`,
    columns: [
      {
        title: 'Platform',
        links: [
          { name: 'Features', href: '#features' },
          { name: 'Pricing', href: '#pricing' },
          { name: 'Process', href: '#how-it-works' },
        ],
      },
      {
        title: 'Support',
        links: [
          { name: 'Email Us', href: 'mailto:hello@teachwell.io' },
          { name: 'FAQ', href: '#faq' },
        ],
      },
    ],
    social: [
      { name: 'Twitter', href: '#', icon: 'twitter' },
      { name: 'LinkedIn', href: '#', icon: 'linkedin' },
    ],
  }
};