// src/lib/constants.ts

export const whyChooseUsData = {
  badge: "About US",
  title: "Why Choose Us",
  description: "More than an agency, we're your growth engine.",
  benefits: [
    {
      iconName: "LineChart" as const,
      title: "Your End-to-End Technology Partner",
      description: "Your single, unified partner for all digital needs.",
      imageUrl: "/images/home/home-hero1.jpg", // Add this line
    },
    {
      iconName: "TrendingUp" as const,
      title: "Intelligent Automation at the Core",
      description: "We build smart AI systems that power growth.",
      imageUrl: "/images/home/home-hero2.jpg", // Add this line
    },
    {
      iconName: "RefreshCw" as const,
      title: "Focused Purely on Your Growth",
      description: "Your business growth is our most important metric.",
      imageUrl: "/images/home/home-hero3.jpg", // Add this line
    },
  ],
  features: [
    "Seamless Automation",
    "Data-Driven Marketing",
    "AI-Powered Engagement",
    "Growth-Driven Strategy",
    "Cloud & DevOps Solutions",
  ],
};
export const featuresSectionData = {
  badge: "Pillars",
  title: "The Blueprint for Your Digital Evolution",
  description: "Our strategic framework is designed to guide your business through every critical stage of growth, ensuring a powerful and sustainable journey from foundation to market leadership.",
  cards: [
    {
      title: "Build Your Foundation",
      description:
        "We establish your complete digital presence, from a stunning website and memorable brand identity to your core infrastructure.",
      iconName: "Cpu",
      imageUrl: "/images/home/home-pillars1.jpg", 
    },
    {
      title: "Grow Your Audience",
      description:
        "We attract and convert your ideal customers through data-driven marketing campaigns using SEO, paid ads, and social media.",
      iconName: "Workflow",
    },
    {
      title: "Automate Your Operations",
      description:
        "We boost efficiency and engagement with AI chatbots, CRM integration, and automated workflows that streamline your business.",
      iconName: "BarChartBig",
    },
    {
      title: "Stand Out Creatively",
      description:
        "We captivate your market and define your brand identity with AI-powered video, motion graphics, and advanced creative work.",
      iconName: "MessageSquareHeart",
      imageUrl: "/images/home/home-pillars2.jpg", 
    },
  ],
};

// src/lib/constants.ts

export const servicesSectionData = {
  badge: "SERVICES",
  title: "Technology to Fuel Your Growth",
  description: "Explore our core services, each designed to deliver performance, scalability, and a distinct competitive edge for your business.",
  services: [
    {
      title: "Web Development",
      description:
        "We build fast, responsive, and secure websites that deliver exceptional user experiences.",
      iconName: "BarChartBig",
      imageUrl: "/images/home/home-service1.jpg", // Add this
    },
    {
      title: "App Development",
      description:
        "We design and develop intuitive, high-performance mobile apps for both iOS and Android.",
      iconName: "PenSquare",
      imageUrl: "/images/home/home-service2.jpg", // Add this
    },
    {
      title: "AI & Automation Solutions",
      description:
        "We deploy smart AI agents and automation to streamline your operations and boost sales.",
      iconName: "MessageSquareHeart",
      imageUrl: "/images/home/home-service3.jpg", // Add this
    },
    {
      title: "Custom Software Development",
      description:
        "We engineer bespoke software solutions tailored precisely to solve your business challenges.",
      iconName: "Workflow",
      imageUrl: "/images/home/home-service4.jpg", // Add this (can be a different image)
    },
    {
      title: "Cloud & DevOps Services",
      description:
        "We manage your cloud infrastructure, ensuring scalability, reliability, and peak performance.",
      iconName: "BarChartBig",
      imageUrl: "/images/home/home-service5.jpg", // Add this (can be a different image)
    },
    {
      title: "Data & Analytics",
      description:
        "We turn raw data into actionable insights with intuitive custom dashboards and reporting solutions.",
      iconName: "PenSquare",
      imageUrl: "/images/home/home-service6.png", // Add this (can be a different image)
    },
  ],
};

export const processSectionData = {
  badge: "PROCESS",
  title: 
  "From Idea to Impact",
  description: "Our process blends strategy, design, and technology to turn great ideas into market-ready realities, with precision at every step.",
  steps: [
    {
      number: "01",
      title: "Blueprint",
      description:
        "We begin by mapping your vision, defining clear project goals, and creating a detailed strategic plan.",
      imageUrl: "/images/home/home-process1.jpg",
      iconName: "Search" as const, 
    },
    {
      number: "02",
      title: "Craft",
      description:
        "Our team designs an intuitive user experience and a stunning visual interface that brings the project to life.",
      imageUrl: "/images/home/home-process2.jpg",
      iconName: "Rocket" as const, 
    },
    {
      number: "03",
      title: "Construct",
      description:
        "We write clean, scalable code to build your solution and seamlessly integrate all necessary technologies.",
      imageUrl: "/images/home/home-process3.jpg",
      iconName: "Settings" as const, 
    },
        {
      number: "04",
      title: "Launch & Accelerate",
      description:
        "We deploy the final product, run rigorous tests, and work with you to ensure a successful post-launch journey.",
      imageUrl: "/images/home/home-process4.jpg",
      iconName: "Settings" as const, 
    },
  ],
};

export const testimonialsSectionData = {
  badge: "CUSTOMERS",
  title: "What Our Clients Say",
  description: "Join customers who trust AI to transform their business.",
  featured: {
    imageUrl: "/images/testimonial.avif",
  },
  testimonials: [
    {
      quote:
        "We needed intelligent automation — and they nailed it. Every step was collaborative, transparent, and focused on delivering the best outcome for us.",
      name: "Brendan",
      role: "Marketing Director at SmartQ",
      avatar: "/images/avatar-1.jpg",
    },
    {
      quote:
        "Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We're already seeing results.",
      name: "Lena M",
      role: "Manager at NovaTech",
      avatar: "/images/avatar-1.jpg",
    },
    {
      quote:
        "From ideation to final delivery, they were incredibly proactive and sharp. Our new AI-powered assistant reduced manual work and improved user satisfaction.",
      name: "Eli R",
      role: "COO at GridFrame",
      avatar: "/images/avatar-1.jpg",
    },
  ],
  stats: [
    {
      value: "100+",
      label: "Projects Completed",
    },
    {
      value: "95%",
      label: "Client Satisfaction",
    },
    {
      value: "10+",
      label: "Years of Experience",
    },
  ],
};
export const comparisonSectionData = {
  badge: "COMPARISON",
  title: "Growth Partner vs Vendor",
  description: "See why our integrated approach delivers better results than juggling multiple vendors.",
  leftColumn: {
    heading: "Nuopod Tech",
    features: [
      "End-to-End Growth Partner",
      "Unified Strategy (Dev + Marketing + AI)",
      "AI-Powered & Automated Workflows",
      "Focus on Your Business ROI",
      "Scalable, Future-Proof Systems",
      "Data-Backed, Real-Time Insights",
      "Single, Dedicated Point of Contact",
    ],
    ctaText: "Get Started",
  },
  rightColumn: {
    heading: "Others",
    features: [
      "Task-Based Vendor",
      "Isolated Services (Dev or Marketing)",
      "Manual, Repetitive Workflows",
      "Focus on Project Completion",
      "Static, Outdated Solutions",
      "Decision-Making Based on Guesswork",
      "Multiple, Disconnected Freelancers",
    ],
  },
};


export const teamSectionData = {
  badge: "TEAM",
  title: "Team Behind Success",
  description:
    "Meet the experts behind our AI—driven to deliver smart solutions.",
  members: [
    {
      name: "Gwen Chase",
      role: "Marketing",
      imageUrl: "/images/team1.png",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "James Bond",
      role: "Designer",
      imageUrl: "/images/team2.png",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Emily Gwen",
      role: "Support Team",
      imageUrl: "/images/team1.png",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Alex Morgan",
      role: "Developer",
      imageUrl: "/images/team2.jpg",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Chen",
      role: "AI Specialist",
      imageUrl: "/images/team1.png",
      socialLinks: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
  ],
};

export const faqSectionData = {
  badge: "FAQS",
  title: "Questions? Answers!",
  description: "Find Some quick answers to the most common questions.",
  faqs: [
    {
      question: "What services do you offer?",
      answer:
        "We specialize in AI solutions, including machine learning models, automation, chatbots, predictive analytics, and consulting tailored to your business needs.",
    },
    {
      question: "How long does it take to develop an AI solution?",
      answer:
        "Development timelines vary based on project complexity. Simple solutions can take 2-4 weeks, while more complex AI systems may require 2-3 months or more. We'll provide a detailed timeline after understanding your specific requirements.",
    },
    {
      question: "Do I need technical expertise to work with you?",
      answer:
        "No technical expertise is required! We handle all the technical aspects and guide you through the process. We focus on understanding your business goals and deliver solutions that are easy to use and integrate into your workflows.",
    },
    {
      question: "Is my data safe when working with your agency?",
      answer:
        "Absolutely. We prioritize data security and privacy. We use industry-standard encryption, secure cloud storage, and comply with all relevant data protection regulations. Your data is never shared with third parties without your explicit consent.",
    },
    {
      question: "Can AI really help my business grow?",
      answer:
        "Yes! AI can automate repetitive tasks, provide data-driven insights, improve customer engagement, and help you make smarter business decisions. Our solutions are designed to deliver measurable results and ROI for your specific business needs.",
    },
  ],
  contact: {
    text: "Feel free to mail us for any enquiries :",
    email: "noupod@gmail.com",
  },
};

export const pricingSectionData = {
  badge: "PRICING",
  title: "Simple Price For All",
  description: "Flexible pricing plans that fit your budget & scale with needs.",
  plans: [
    {
      name: "Starter",
      isPopular: false,
      price: 800,
      description: "Ideal for businesses ready to explore AI and intelligent automation",
      features: [
        "Basic AI Tools",
        "Limited Automation Features",
        "Real-Time Reporting",
        "Basic Chatbot Integration",
      ],
      ctaText: "Get Started",
    },
    {
      name: "Pro",
      isPopular: true,
      price: 1700,
      description: "Built for companies that want to gain an edge with AI-powered automation",
      features: [
        "Advanced AI Tools",
        "Customizable Workflows",
        "AI-Powered Analytics",
        "Premium Chatbot Features",
        "Cross-Platform Integrations",
      ],
      ctaText: "Get Started",
    },
    {
      name: "Enterprise",
      isPopular: false,
      price: 4700,
      description: "For businesses aiming to harness AI and automation to lead their industry",
      features: [
        "Fully Customized AI Solutions",
        "Unlimited Integrations",
        "Advanced Reporting & Insights",
        "Scalable AI Solutions",
        "Team Collaboration Features",
        "Priority Feature Access",
      ],
      ctaText: "Get Started",
    },
  ],
  footerText: "We donate 2% of your membership to pediatric wellbeing",
};

export const aboutDescriptionData = {
  badge: "About Us",
  text: "With over 15 years of experience, we specialize in delivering tailored solutions that drive success across industries like finance, technology, and operations. Our dedicated team is focused on accelerating growth and helping your business thrive in an ever-changing market.",
};

export const aboutTeamData = {
  badge: "TEAM",
  title: "OUR TEAM",
  members: [
    {
      name: "Carter Botosh",
      role: "Chief Financial Officer",
      imageUrl: "/images/about-img1.png", // Using the old hero image
    },
    {
      name: "Liya Saris",
      role: "Head of Technology",
      imageUrl: "/images/about-img2.png", // Using the old hero image
    },
    {
      name: "Zaire Workman",
      role: "Marketing Director",
      imageUrl: "/images/about-img3.png", // Using the old hero image
    },
    {
      name: "Alfonso Bator",
      role: "Lead Developer",
      imageUrl: "/images/about-img1.png", // Reusing the old hero image
    },
    {
      name: "Reyna Vaccaro",
      role: "Project Manager",
      imageUrl: "/images/about-img2.png", // Reusing the old hero image
    },
    {
      name: "Marcus Schiefer",
      role: "UX/UI Designer",
      imageUrl: "/images/about-img3.png", // Reusing the old hero image
    },
  ],
};

// src/lib/constants.ts (add this at the end)

export const journeyData = {
  badge: "Timeline",
  title: "Our Journey",
  subtitle: "Each achievement reflects our commitment to excellence and growth.",
  events: [
    {
      year: "2008",
      description:
        "We adapted to a changing landscape, leveraging data-driven insights to create meaningful client experiences.",
    },
    {
      year: "2014",
      description:
        "Expanded our services to include AI and automation, helping businesses scale with intelligent technology.",
    },
    {
      year: "2019",
      description:
        "Opened our first international office, marking a major milestone in our global expansion and reach.",
    },
    {
      year: "2021",
      description:
        "Recognized as a leading innovator in the tech industry for our groundbreaking work in custom software solutions.",
    },
  ],
};

// src/lib/constants.ts (add this at the end)

export const aboutTestimonialsData = {
  badge: "Testimonials",
  testimonials: [
    {
      quote:
        "They brought clarity to complex problems, breaking down barriers and delivering innovative solutions. I was truly impressed by how quickly their strategies turned into real, tangible outcomes, driving measurable growth and success for our business.",
      name: "Sarah Lee",
      role: "CEO, Tech Innovations",
      imageUrl: "/images/about-img1.png", // Add an image here
    },
    {
      quote:
        "Working with this team was a game-changer. Their expertise in AI and automation streamlined our operations and unlocked new levels of efficiency we didn't think were possible.",
      name: "Michael Chen",
      role: "COO, Future Solutions",
      imageUrl: "/images/about-img2.png", // Add an image here
    },
    {
      quote:
        "The level of dedication and partnership is unmatched. They don't just deliver a service; they invest in your success and become a true extension of your team.",
      name: "Jessica Rodriguez",
      role: "Founder, Innovate Co.",
      imageUrl: "/images/about-img3.png", // Add an image here
    },
  ],
};



export const servicesHeroData = {
  imageUrl: "/images/service/service-hero.png", // Replace with an appropriate services-related image
};



export const servicesGridData = {
  badge: "Our Services",
  title: "Explore our comprehensive service offerings",
  services: [
    {
      title: "Web Development",
      description:
        "We build fast, responsive, and secure websites that deliver exceptional user experiences and drive business growth.",
      imageUrl: "/images/service/service-web.jpg",
    },
    {
      title: "App Development",
      description:
        "We design and develop intuitive, high-performance mobile apps for both iOS and Android that users love.",
      imageUrl: "/images/service/service-app.jpg",
    },
    {
      title: "AI & Automation Solutions",
      description:
        "We deploy smart AI agents and automation to streamline your operations, boost sales, and enhance customer experiences.",
      imageUrl: "/images/service/service-ai.jpg",
    },
    {
      title: "Custom Software Development",
      description:
        "We engineer bespoke software solutions tailored precisely to solve your unique business challenges and workflows.",
      imageUrl: "/images/service/service-software.jpg",
    },
    {
      title: "Cloud & DevOps Services",
      description:
        "We manage your cloud infrastructure, ensuring scalability, reliability, and peak performance for your applications.",
      imageUrl: "/images/service/service-devops.jpg",
    },
    {
      title: "Data & Analytics",
      description:
        "We turn raw data into actionable insights with intuitive custom dashboards and reporting solutions that drive decisions.",
      imageUrl: "/images/service/service-data.jpg",
    },
  ],
};

// src/lib/constants.ts (add this at the end of the file)

export const termsAndConditionsData = {
  title: "Terms & Conditions",
  sections: [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.",
    },
    {
      title: "2. Intellectual Property",
      content:
        "The Site and its original content, features, and functionality are owned by Nuopod and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
    },
    {
      title: "3. Limitation of Liability",
      content:
        "In no event shall Nuopod, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
    },
        {
      title: "4. Acceptance of Terms",
      content:
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.",
    },
    {
      title: "5. Intellectual Property",
      content:
        "The Site and its original content, features, and functionality are owned by Nuopod and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
    },
    {
      title: "6. Limitation of Liability",
      content:
        "In no event shall Nuopod, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.",
    },
    // You can easily add more sections here
    // {
    //   title: "4. Governing Law",
    //   content: "Your use of the Site will be governed by the laws of India..."
    // }
  ],
};