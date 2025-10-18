
export const whyChooseUsData = {
  badge: "About US",
  title: "Why Choose Us",
  description: "More than an agency, we're your growth engine.",
  benefits: [
    {
      iconName: "LineChart" as const,
      title: "Your End-to-End Technology Partner",
      description: "Your single, unified partner for all digital needs.",
      imageUrl: "/images/home/home-hero1.jpg", 
    },
    {
      iconName: "TrendingUp" as const,
      title: "Intelligent Automation at the Core",
      description: "We build smart AI systems that power growth.",
      imageUrl: "/images/home/home-hero2.jpg", 
    },
    {
      iconName: "RefreshCw" as const,
      title: "Focused Purely on Your Growth",
      description: "Your business growth is our most important metric.",
      imageUrl: "/images/home/home-hero3.jpg", 
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
      imageUrl: "/images/home/home-service1.jpg", 
    },
    {
      title: "App Development",
      description:
        "We design and develop intuitive, high-performance mobile apps for both iOS and Android.",
      iconName: "PenSquare",
      imageUrl: "/images/home/home-service2.jpg", 
    },
    {
      title: "AI & Automation Solutions",
      description:
        "We deploy smart AI agents and automation to streamline your operations and boost sales.",
      iconName: "MessageSquareHeart",
      imageUrl: "/images/home/home-service3.jpg", 
    },
    {
      title: "Custom Software Development",
      description:
        "We engineer bespoke software solutions tailored precisely to solve your business challenges.",
      iconName: "Workflow",
      imageUrl: "/images/home/home-service4.jpg",
    },
    {
      title: "Cloud & DevOps Services",
      description:
        "We manage your cloud infrastructure, ensuring scalability, reliability, and peak performance.",
      iconName: "BarChartBig",
      imageUrl: "/images/home/home-service5.jpg", 
    },
    {
      title: "Data & Analytics",
      description:
        "We turn raw data into actionable insights with intuitive custom dashboards and reporting solutions.",
      iconName: "PenSquare",
      imageUrl: "/images/home/home-service6.png", 
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
      imageUrl: "/images/about-img1.png", 
    },
    {
      name: "Liya Saris",
      role: "Head of Technology",
      imageUrl: "/images/about-img2.png", 
    },
    {
      name: "Zaire Workman",
      role: "Marketing Director",
      imageUrl: "/images/about-img3.png",
    },
    {
      name: "Alfonso Bator",
      role: "Lead Developer",
      imageUrl: "/images/about-img1.png",
    },
    {
      name: "Reyna Vaccaro",
      role: "Project Manager",
      imageUrl: "/images/about-img2.png", 
    },
    {
      name: "Marcus Schiefer",
      role: "UX/UI Designer",
      imageUrl: "/images/about-img3.png",
    },
  ],
};


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


export const aboutTestimonialsData = {
  badge: "Testimonials",
  testimonials: [
    {
      quote:
        "They brought clarity to complex problems, breaking down barriers and delivering innovative solutions. I was truly impressed by how quickly their strategies turned into real, tangible outcomes, driving measurable growth and success for our business.",
      name: "Sarah Lee",
      role: "CEO, Tech Innovations",
      imageUrl: "/images/about-img1.png", 
    },
    {
      quote:
        "Working with this team was a game-changer. Their expertise in AI and automation streamlined our operations and unlocked new levels of efficiency we didn't think were possible.",
      name: "Michael Chen",
      role: "COO, Future Solutions",
      imageUrl: "/images/about-img2.png", 
    },
    {
      quote:
        "The level of dedication and partnership is unmatched. They don't just deliver a service; they invest in your success and become a true extension of your team.",
      name: "Jessica Rodriguez",
      role: "Founder, Innovate Co.",
      imageUrl: "/images/about-img3.png", 
    },
  ],
};



export const servicesHeroData = {
  imageUrl: "/images/service/service-hero.png", 
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

export const termsAndConditionsData = {
  title: "TERMS OF SERVICE",
  sections: [
    {
      title: "Definitions",
      content:
        "\"Nuopod\" refers to the software development team, its operators, and the services it provides.\n\"Client\" refers to any individual or entity engaging Nuopod for services, including any authorized representatives.\n\"Services\" refers to all activities provided by Nuopod, including but not limited to, website development, application development, customization, consulting, and maintenance.\n\"Project\" refers to the specific scope of work, deliverables, and timeline agreed upon between Nuopod and the Client, typically defined in a separate Statement of Work (SOW) or proposal.\n\"Deliverables\" refers to the final software, code, designs, or documentation produced by Nuopod as part of the Services for the Client.",
    },
    {
      title: "Role and Scope of Services",
      content:
        "Nuopod operates exclusively as a software development and consulting entity. We agree to provide the Services using professional diligence and skill to develop and customize software solutions based on the Client's requirements, as outlined in the mutually agreed-upon Project scope.\nNuopod does not act as a general business consultant, legal advisor, or financial advisor. Our responsibilities are strictly limited to the technical execution of the development and customization work defined in the Project scope.\nExclusions: Unless expressly agreed upon in the SOW, our Services exclude domain registration, external hosting fees, third-party software licenses, content creation (copywriting, photography), and ongoing maintenance after the warranty period.",
    },
    {
      title: "Project Agreement and Changes",
      content:
        "Project Approval: All Services require a formal agreement, such as a signed Statement of Work (SOW) or proposal, which will detail the scope, timeline, and pricing.\nChange Requests: Any request by the Client to modify the agreed-upon scope of the Project after it has begun constitutes a \"Change Request.\" Nuopod will assess the feasibility, impact on the timeline, and associated cost of the Change Request. The Project will only proceed with the changes upon the Client's written approval of the revised SOW and any additional fees.",
    },
    {
      title: "Client Responsibilities",
      content:
        "Timely Input: The Client is responsible for providing all necessary information, content (text, images, branding), approvals, and feedback in a timely manner. Delays in providing required input may result in an extension of the Project timeline, for which Nuopod shall not be held liable.\nContent Ownership & Rights: The Client warrants that all materials, data, and content provided to Nuopod for use in the Project are owned by the Client or that the Client has the necessary licenses and permissions to use them. The Client agrees to indemnify Nuopod against any claims arising from the use of Client-provided content that infringes upon a third party's intellectual property rights.\nAccess and Credentials: The Client must provide secure, timely access to all necessary systems, servers, or third-party accounts required for Nuopod to perform the Services.",
    },
    {
      title: "Intellectual Property (IP)",
      content:
        "Client IP: The Client retains all intellectual property rights to any content, materials, or pre-existing code they provide to Nuopod.\nDeveloped IP: Upon full and final payment for the Services, Nuopod will transfer all intellectual property rights for the Deliverables (custom code and design) created specifically for the Client during the Project. This transfer excludes any third-party open-source libraries, frameworks, or tools used in the development. The Client receives a non-exclusive, perpetual license to use such open-source components under their respective licenses. Nuopod retains the right to use non-Client-specific techniques, coding practices, and general knowledge developed during the Project for its other clients.",
    },
    {
      title: "Project Delivery and Acceptance",
      content:
        "Delivery: Nuopod will submit the completed Deliverables to the Client for final review as specified in the SOW.\nAcceptance Period: The Client will have a defined Acceptance Period to review the Deliverables and either accept them or submit detailed written feedback listing non-conforming items (bugs or issues that violate the SOW).\nDeemed Acceptance: If the Client fails to provide acceptance or detailed written feedback the Deliverables are deemed accepted as complete and satisfactory. The warranty period begins immediately upon acceptance.",
    },
    {
      title: "Payment, Termination, and Warranty",
      content:
        "Payment Terms: Payment schedules and terms will be specified in the SOW. Nuopod reserves the right to suspend work or withhold delivery of the Project until all outstanding invoices are paid in full.\nTermination for Convenience: In the event the Client terminates the Project for reasons other than Nuopod's material breach, the Client agrees to pay for all work completed up to the termination date, plus a reasonable cancellation fee, of specific value to cover lost scheduling and overhead.\nLimited Warranty: Nuopod warrants that the Deliverables will perform substantially in accordance with the specifications in the SOW for a period of thirty (30) days following final acceptance. This warranty is limited to correcting errors or bugs in the code developed by Nuopod and does not cover issues arising from third-party software, changes to the operating system, or external hosting environments. The warranty is void if the Client or any third party modifies the code, operating system, or hosting environment after delivery.",
    },
    {
      title: "Limitation of Liability",
      content:
        "To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.\nNotwithstanding any damages that might incur, the entire liability of Nuopod and any of its suppliers under any provision of this Terms and the exclusive remedy for all of the foregoing shall be limited to the amount actually paid by the Client through the Service.",
    },
    {
      title: "Confidentiality and Dispute Resolution",
      content:
        "Confidentiality: Both Nuopod and the Client agree to keep all proprietary information, trade secrets, and non-public business details of the other party confidential, using the same degree of care as they use for their own confidential information.\nDispute Resolution: Any disputes arising from these Terms or the Services shall first be attempted to be resolved through good-faith negotiations between the Client and Nuopod. If a resolution cannot be reached, disputes will be subject to binding arbitration or the jurisdiction of courts as specified in the full Master Services Agreement available upon request.",
    },
    {
      title: "Modification of Terms and Contact",
      content:
        "Modification of Terms: Nuopod reserves the right to modify these Terms of Service at any time. The current version will be posted on our website or provided upon request. Continued engagement for new Services constitutes acceptance of the updated terms.\nContact: For any questions regarding these Terms or the Services, please contact our team via the designated Project Manager or at: info@nuopod.com.",
    },
  ],
};

export const privacyPolicyData = {
  title: "PRIVACY POLICY",
  sections: [
    {
      title: "Information Collection",
      content:
        "We collect information necessary for business communication and project execution, including Client contact names, professional emails, phone numbers, and communication records related to the Services.",
    },
    {
      title: "Data Handling for Client Projects",
      content:
        "In the course of providing Services, Nuopod may temporarily access or store end-user data belonging to the Client (e.g., during testing, maintenance, or hosting). When handling such data, Nuopod acts strictly as a Data Processor on behalf of the Client. The Client remains the Data Controller and is responsible for obtaining all necessary consent from their end-users.",
    },
    {
      title: "How We Use Your Data",
      content:
        "1. Process invoices and manage Client accounts.\n2. Verify Client identity and uphold contractual obligations.\n3. Communicate project progress, send service updates, and manage contract notifications.\n4. Analyze project interactions to improve our development processes and service offerings.",
    },
    {
      title: "Security",
      content:
        "We require our staff and contractors to sign confidentiality agreements and limit access to Client and project data strictly to those necessary for fulfilling the Services.",
    },
  ],
};