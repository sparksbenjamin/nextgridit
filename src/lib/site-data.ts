export const siteConfig = {
  name: "NextGridIT",
  legalName: "NextGridIT Systems",
  url: "https://www.nextgridit.com",
  phone: "+1-864-780-0202",
  phoneDisplay: "864-780-0202",
  email: "contact@nextgridit.com",
  region: "Upstate South Carolina",
  serviceArea: ["Seneca", "Clemson", "Anderson", "Easley", "Greenville"],
  founded: "2026",
  tagline:
    "Network infrastructure, security, cloud, Wi-Fi, camera, and compliance-aware IT support for Upstate South Carolina organizations.",
  sameAs: ["https://github.com/sparksbenjamin/nextgridit"],
} as const;

export type Service = {
  slug: string;
  shortLabel: string;
  title: string;
  summary: string;
  description: string;
  audience: string;
  outcomes: string[];
  deliverables: string[];
  relatedIndustries: string[];
  relatedLocations: string[];
  technologies: string[];
  faq: { question: string; answer: string }[];
};

export type TechnologyEntry = {
  slug: string;
  name: string;
  category:
    | "Cloud and Identity"
    | "Infrastructure"
    | "Networking and Wi-Fi"
    | "Security and Compliance"
    | "Cameras and Local AI";
  summary: string;
  relatedServices: string[];
  relatedIndustries: string[];
};

export const services: Service[] = [
  {
    slug: "it-support",
    shortLabel: "IT Support",
    title: "IT Support and Operational Guidance",
    summary:
      "Project-led IT support for organizations that need practical troubleshooting, cleanup, and technical leadership.",
    description:
      "NextGridIT provides business-first IT support for organizations that need a reliable technical partner without a generic MSP contract. Engagements can include day-to-day systems support, environment cleanup, vendor coordination, project planning, and documentation improvements that make the environment easier to run.",
    audience:
      "Best fit for small businesses, municipal teams, property operators, and healthcare-adjacent organizations that need experienced infrastructure support and clear communication.",
    outcomes: [
      "Reduce recurring support issues and operational surprises",
      "Stabilize aging systems before they become expensive emergencies",
      "Create cleaner documentation, ownership, and follow-through across vendors",
    ],
    deliverables: [
      "Technical assessment and prioritized remediation list",
      "Support and project coordination recommendations",
      "Documentation cleanup and operational handoff notes",
    ],
    relatedIndustries: ["small-business", "municipalities", "medical-offices"],
    relatedLocations: ["seneca-sc", "clemson-sc", "anderson-sc"],
    technologies: ["Microsoft 365", "Windows", "Active Directory", "Backup systems"],
    faq: [
      {
        question: "Do you replace an internal IT team?",
        answer:
          "Not necessarily. NextGridIT can supplement a small internal team, coordinate with vendors, or provide hands-on support where no internal IT staff exists.",
      },
      {
        question: "Is support only for emergencies?",
        answer:
          "No. The focus is on fixing current issues while also reducing the conditions that keep creating them.",
      },
    ],
  },
  {
    slug: "microsoft-365",
    shortLabel: "Microsoft 365",
    title: "Microsoft 365 and Cloud Services",
    summary:
      "Administration, cleanup, security, and migration support across Microsoft 365, Entra ID, Azure, and related cloud systems.",
    description:
      "NextGridIT helps organizations plan, improve, and support cloud environments with an emphasis on Microsoft 365, Entra ID, Azure, and practical identity administration. Work can include tenant cleanup, MFA rollout support, secure collaboration setup, mailbox and account administration, cloud migration planning, and documentation.",
    audience:
      "Best fit for organizations that depend on Microsoft 365 but need cleaner administration, better identity controls, or a safer migration path.",
    outcomes: [
      "Improve tenant hygiene and account security",
      "Make Microsoft 365 easier to administer and support",
      "Reduce risk around identity, email, and collaboration systems",
    ],
    deliverables: [
      "Tenant review and remediation roadmap",
      "Identity and access control improvements",
      "Administration standards and support documentation",
    ],
    relatedIndustries: ["medical-offices", "small-business", "multi-site-properties"],
    relatedLocations: ["greenville-sc", "easley-sc", "clemson-sc"],
    technologies: ["Microsoft 365", "Entra ID", "Azure", "Exchange Online"],
    faq: [
      {
        question: "Do you handle Microsoft 365 cleanup after a rushed setup?",
        answer:
          "Yes. A common engagement is reviewing an existing tenant, removing risky defaults, tightening administration, and documenting what the client actually owns.",
      },
      {
        question: "Do you only work with Microsoft?",
        answer:
          "Microsoft is a core strength, but related AWS, Google, and Apple environments can also be supported when they are part of the broader operating environment.",
      },
    ],
  },
  {
    slug: "network-wifi",
    shortLabel: "Network & Wi-Fi",
    title: "Network Infrastructure, Public Wi-Fi, and Connectivity",
    summary:
      "Wired and wireless network design, upgrades, segmentation, and troubleshooting for business and property environments.",
    description:
      "NextGridIT designs, upgrades, and supports business and property networks with a focus on reliable performance, segmented access, and maintainable infrastructure. Work often includes Ubiquiti and UniFi deployments, public and guest Wi-Fi separation, multi-building connectivity planning, firewall coordination, and general network cleanup.",
    audience:
      "Best fit for offices, municipalities, campgrounds, hospitality-style properties, and multi-building sites where coverage and segmentation matter.",
    outcomes: [
      "Improve Wi-Fi coverage and network reliability",
      "Separate guest, staff, device, and payment traffic more cleanly",
      "Support future growth with better network documentation and design",
    ],
    deliverables: [
      "Network assessment and topology guidance",
      "Coverage, segmentation, and hardware recommendations",
      "Deployment notes and environment documentation",
    ],
    relatedIndustries: ["municipalities", "campgrounds", "multi-site-properties"],
    relatedLocations: ["seneca-sc", "anderson-sc", "greenville-sc"],
    technologies: ["Ubiquiti UniFi", "Firewalls", "VLANs", "Public Wi-Fi"],
    faq: [
      {
        question: "Can you help with public or guest Wi-Fi separation?",
        answer:
          "Yes. Segmentation and guest access design are a core part of safer network and payment-aware environments.",
      },
      {
        question: "Do you only work on new installs?",
        answer:
          "No. Many projects start with inherited, partially working networks that need cleanup, reorganization, and better visibility.",
      },
    ],
  },
  {
    slug: "security-hardening",
    shortLabel: "Security",
    title: "Security Hardening, Documentation, and Compliance-Aware Support",
    summary:
      "Practical security improvements, documentation cleanup, and implementation support informed by HIPAA, PCI DSS, and NIST practices.",
    description:
      "NextGridIT helps organizations reduce avoidable risk through identity improvements, administrative cleanup, documentation, basic hardening, segmentation guidance, and implementation work that maps back to real operating conditions. The goal is a safer environment that the client can still manage day to day.",
    audience:
      "Best fit for organizations that need stronger security posture, better documentation, or a compliance-aware technical partner without enterprise theatrics.",
    outcomes: [
      "Close common security gaps in identity, access, networking, and documentation",
      "Support HIPAA-aware, PCI-aware, and NIST-informed environments",
      "Create a more defensible operating baseline for future audits and growth",
    ],
    deliverables: [
      "Security posture review and risk-based remediation list",
      "Documentation, standards, and operational recommendations",
      "Implementation support for access, segmentation, and system cleanup",
    ],
    relatedIndustries: ["medical-offices", "municipalities", "small-business"],
    relatedLocations: ["clemson-sc", "anderson-sc", "greenville-sc"],
    technologies: ["MFA", "Access controls", "Firewall policy", "Documentation"],
    faq: [
      {
        question: "Do you provide compliance certification?",
        answer:
          "No. NextGridIT provides technical implementation and documentation support that helps clients operate in a more compliance-aware way.",
      },
      {
        question: "What frameworks do you usually align with?",
        answer:
          "The work is commonly informed by HIPAA, PCI DSS, and practical NIST-style security thinking depending on the environment.",
      },
    ],
  },
  {
    slug: "security-audits-pentesting",
    shortLabel: "Security Audits",
    title: "Security Audits and Penetration Testing",
    summary:
      "Black box and trusted-access security testing with remediation help and real-world risk review for each finding.",
    description:
      "NextGridIT provides scoped security audits and penetration testing for organizations that need more than a vulnerability dump. Engagements can include black box testing, trusted-access pentests, targeted exposure review, and follow-up remediation support. Each finding is written with practical business context so the client understands what is actually risky, what is mostly noise, and what to fix first.",
    audience:
      "Best fit for organizations that need a clearer picture of real exposure before a project, after a major change, before outside review, or as part of a broader security improvement effort.",
    outcomes: [
      "Validate external exposure through black box testing that starts from an attacker perspective",
      "Review internal trust assumptions and escalation paths through trusted-access pentests",
      "Turn findings into prioritized remediation work with practical business context attached",
    ],
    deliverables: [
      "Scoping notes, rules of engagement, and assessment summary",
      "Findings report with real-world risk review and remediation guidance",
      "Optional validation help after fixes are made so the work actually closes out cleanly",
    ],
    relatedIndustries: ["small-business", "medical-offices", "municipalities"],
    relatedLocations: ["greenville-sc", "anderson-sc", "clemson-sc"],
    technologies: [
      "Black box testing",
      "Trusted-access pentesting",
      "Identity and access review",
      "Remediation validation",
    ],
    faq: [
      {
        question: "What is the difference between a black box and a trusted-access pentest?",
        answer:
          "A black box engagement starts from the outside with minimal prior knowledge, while a trusted-access pentest assumes some level of internal access so privilege paths, lateral movement, and deeper trust issues can be reviewed.",
      },
      {
        question: "Do you only hand over a report?",
        answer:
          "No. The goal is to help the client understand what matters, correct the issues, and validate the fixes rather than disappearing behind a findings spreadsheet.",
      },
      {
        question: "Do you provide a real-world risk review with each finding?",
        answer:
          "Yes. Every finding is meant to include practical context around exploitability, likely impact, and why it matters in the client's actual operating environment.",
      },
    ],
  },
  {
    slug: "camera-systems",
    shortLabel: "Camera Systems",
    title: "Camera Systems and Local-First Smart Deployments",
    summary:
      "Camera system design, installation, and local-first smart deployments with an emphasis on ownership and practical fit.",
    description:
      "NextGridIT designs and supports camera systems and specialty deployments where on-site visibility, local processing, and tailored coverage matter. Projects can include full camera installs, site planning, integration with broader network infrastructure, and local-first AI-assisted video workflows where appropriate.",
    audience:
      "Best fit for properties, small businesses, municipalities, and specialty sites that need better visibility without handing everything to a third-party cloud platform.",
    outcomes: [
      "Improve visibility across entrances, public spaces, and operational areas",
      "Keep more control of footage and system ownership close to the site",
      "Coordinate camera infrastructure with the underlying network design",
    ],
    deliverables: [
      "Site coverage planning and deployment recommendations",
      "Camera installation and support scope",
      "Local-first processing and retention guidance where relevant",
    ],
    relatedIndustries: ["municipalities", "campgrounds", "multi-site-properties"],
    relatedLocations: ["seneca-sc", "easley-sc", "greenville-sc"],
    technologies: ["IP cameras", "Local NVR", "PoE switching", "Local AI processing"],
    faq: [
      {
        question: "Do you support cloud-only camera platforms?",
        answer:
          "The preference is local-first control when it is the right fit, but the recommendation depends on site needs, retention goals, and budget.",
      },
      {
        question: "Can camera work be combined with network upgrades?",
        answer:
          "Yes. Camera projects often make the most sense when they are designed alongside switching, Wi-Fi, cabling, and site connectivity plans.",
      },
    ],
  },
];

export type Industry = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  needs: string[];
  relatedServices: string[];
};

export const industries: Industry[] = [
  {
    slug: "medical-offices",
    title: "Medical Offices and Healthcare-Adjacent Practices",
    summary:
      "HIPAA-aware infrastructure, Microsoft 365, support, and documentation help for practices that need stable systems.",
    description:
      "Medical offices often need cleaner Microsoft 365 administration, better access controls, more dependable backups, and better operational documentation without adding enterprise overhead. NextGridIT supports the technical side of these environments with practical, confidentiality-aware execution.",
    needs: [
      "HIPAA-aware support for day-to-day systems",
      "Safer identity and email administration",
      "Documentation and operational cleanup",
    ],
    relatedServices: [
      "it-support",
      "microsoft-365",
      "security-hardening",
      "security-audits-pentesting",
    ],
  },
  {
    slug: "small-business",
    title: "Small and Mid-Sized Businesses",
    summary:
      "Practical IT, cloud, security, and network help for businesses that need a dependable technical partner.",
    description:
      "Small businesses often outgrow reactive vendor support before they are ready for a full internal IT department. NextGridIT helps bridge that gap with cleanup, planning, and technical execution that improves reliability without overcomplicating the environment.",
    needs: [
      "Fewer recurring technical issues",
      "Better cloud and identity administration",
      "Project guidance for growth and cleanup",
    ],
    relatedServices: [
      "it-support",
      "microsoft-365",
      "network-wifi",
      "security-audits-pentesting",
    ],
  },
  {
    slug: "municipalities",
    title: "Municipal and Public-Sector Teams",
    summary:
      "Public Wi-Fi, camera, infrastructure, and security support for local government and public-facing environments.",
    description:
      "Municipal teams often need public-facing connectivity, more reliable infrastructure, stronger operational documentation, and practical security improvements across constrained budgets and mixed environments. NextGridIT supports these needs with a project-led, local-first approach.",
    needs: [
      "Public Wi-Fi and segmented network design",
      "Camera planning and infrastructure support",
      "NIST-informed security improvements",
    ],
    relatedServices: [
      "network-wifi",
      "security-hardening",
      "security-audits-pentesting",
      "camera-systems",
    ],
  },
  {
    slug: "campgrounds",
    title: "Campgrounds and Guest Connectivity Environments",
    summary:
      "Coverage, segmentation, and infrastructure design for properties that need reliable guest connectivity.",
    description:
      "Campgrounds and similar guest environments need practical network coverage, guest access separation, equipment planning, and support for multi-building or outdoor connectivity. NextGridIT focuses on realistic deployment planning and maintainable ownership.",
    needs: [
      "Reliable guest Wi-Fi coverage",
      "Staff and guest network separation",
      "Outdoor and multi-building connectivity planning",
    ],
    relatedServices: ["network-wifi", "camera-systems", "it-support"],
  },
  {
    slug: "multi-site-properties",
    title: "Multi-Site and Multi-Building Properties",
    summary:
      "Infrastructure, cloud, support, and camera services for environments with multiple buildings or distributed operations.",
    description:
      "Multi-site properties and distributed organizations need consistent connectivity, clear ownership, good documentation, and systems that can be supported without confusion. NextGridIT helps create cleaner infrastructure and operating baselines across those environments.",
    needs: [
      "Standardized infrastructure across locations",
      "Centralized visibility and supportability",
      "Camera and network design that scale across buildings",
    ],
    relatedServices: ["network-wifi", "microsoft-365", "camera-systems"],
  },
];

export type LocationPage = {
  slug: string;
  city: string;
  title: string;
  summary: string;
  description: string;
  county: string;
  coordinates: [number, number];
  nearbyCities: string[];
  focus: string[];
  relatedServices: string[];
};

export const locations: LocationPage[] = [
  {
    slug: "seneca-sc",
    city: "Seneca",
    title: "IT Support and Network Services in Seneca, SC",
    summary:
      "Local IT, network, Wi-Fi, security, and camera support for organizations in and around Seneca, South Carolina.",
    description:
      "NextGridIT supports businesses and public-facing organizations in Seneca with project-led IT, Wi-Fi, infrastructure, security, and camera services. Seneca is one of the primary local service areas for on-site work and ongoing technical support.",
    county: "Oconee County",
    coordinates: [-82.96, 34.68194],
    nearbyCities: ["Clemson", "Anderson", "Greenville"],
    focus: ["Local on-site support", "Business infrastructure projects", "Wi-Fi and network upgrades"],
    relatedServices: ["it-support", "network-wifi", "camera-systems"],
  },
  {
    slug: "clemson-sc",
    city: "Clemson",
    title: "IT Support and Microsoft 365 Services in Clemson, SC",
    summary:
      "Microsoft 365, infrastructure, security, and compliance-aware support for organizations in Clemson, South Carolina.",
    description:
      "NextGridIT helps Clemson organizations improve Microsoft 365 administration, network reliability, and security posture with practical project-led support. The local service model is designed for organizations that need steady hands and clear follow-through.",
    county: "Pickens and Anderson Counties",
    coordinates: [-82.814777, 34.68493],
    nearbyCities: ["Seneca", "Anderson", "Greenville"],
    focus: ["Microsoft 365 cleanup", "Security and identity support", "Project-led IT guidance"],
    relatedServices: [
      "microsoft-365",
      "security-hardening",
      "security-audits-pentesting",
      "it-support",
    ],
  },
  {
    slug: "anderson-sc",
    city: "Anderson",
    title: "Network, Security, and IT Support in Anderson, SC",
    summary:
      "Infrastructure, Wi-Fi, security hardening, and support services for organizations in Anderson, South Carolina.",
    description:
      "NextGridIT supports Anderson-area organizations with network upgrades, business IT support, segmented Wi-Fi, security improvements, and documentation-driven cleanup projects. Travel and on-site work are available where it supports the project.",
    county: "Anderson County",
    coordinates: [-82.64167, 34.50333],
    nearbyCities: ["Clemson", "Greenville", "Seneca"],
    focus: ["Network upgrades", "Support and cleanup projects", "Security posture improvements"],
    relatedServices: [
      "network-wifi",
      "security-hardening",
      "security-audits-pentesting",
      "it-support",
    ],
  },
  {
    slug: "easley-sc",
    city: "Easley",
    title: "IT Infrastructure and Camera Services in Easley, SC",
    summary:
      "Infrastructure, cloud, support, and camera deployments for businesses and properties in Easley, South Carolina.",
    description:
      "NextGridIT provides Easley-area organizations with infrastructure planning, IT support, Microsoft 365 help, and local-first camera deployments. Engagements are tailored to the needs of each site rather than pushed into a generic package.",
    county: "Pickens County",
    coordinates: [-82.60694, 34.82333],
    nearbyCities: ["Greenville", "Anderson", "Clemson"],
    focus: ["Camera planning and installs", "Infrastructure cleanup", "Cloud and support projects"],
    relatedServices: ["camera-systems", "microsoft-365", "it-support"],
  },
  {
    slug: "greenville-sc",
    city: "Greenville",
    title: "Business IT, Wi-Fi, and Security Services in Greenville, SC",
    summary:
      "Business-focused IT support, cloud administration, Wi-Fi, and security services for Greenville, South Carolina.",
    description:
      "NextGridIT works with Greenville-area businesses and organizations that need a technically strong partner for infrastructure projects, Microsoft 365 support, network design, and practical security improvements. The goal is cleaner systems and more dependable operations.",
    county: "Greenville County",
    coordinates: [-82.3940104, 34.8526176],
    nearbyCities: ["Easley", "Anderson", "Clemson"],
    focus: ["Business IT support", "Cloud administration", "Network and security projects"],
    relatedServices: [
      "it-support",
      "microsoft-365",
      "network-wifi",
      "security-audits-pentesting",
    ],
  },
];

export const technologyCatalog: TechnologyEntry[] = [
  {
    slug: "microsoft-365",
    name: "Microsoft 365",
    category: "Cloud and Identity",
    summary: "Tenant administration, collaboration tooling, email, identity cleanup, and day-to-day cloud support.",
    relatedServices: ["microsoft-365", "it-support", "security-hardening"],
    relatedIndustries: ["medical-offices", "small-business", "multi-site-properties"],
  },
  {
    slug: "entra-id",
    name: "Entra ID",
    category: "Cloud and Identity",
    summary: "Identity, MFA, role cleanup, conditional access planning, and administration standards.",
    relatedServices: ["microsoft-365", "security-hardening"],
    relatedIndustries: ["medical-offices", "small-business", "municipalities"],
  },
  {
    slug: "azure",
    name: "Azure",
    category: "Cloud and Identity",
    summary: "Azure-connected workloads, identity integration, migration planning, and administration support.",
    relatedServices: ["microsoft-365", "it-support"],
    relatedIndustries: ["medical-offices", "small-business", "multi-site-properties"],
  },
  {
    slug: "aws",
    name: "AWS",
    category: "Cloud and Identity",
    summary: "Practical support for AWS workloads that are part of the broader client operating environment.",
    relatedServices: ["microsoft-365", "it-support"],
    relatedIndustries: ["small-business", "multi-site-properties"],
  },
  {
    slug: "google-workspace",
    name: "Google Workspace",
    category: "Cloud and Identity",
    summary: "Email, collaboration, and account administration in mixed-platform environments.",
    relatedServices: ["microsoft-365", "it-support"],
    relatedIndustries: ["small-business", "campgrounds"],
  },
  {
    slug: "apple-environments",
    name: "Apple Environments",
    category: "Infrastructure",
    summary: "Support for Apple devices and mixed-platform environments where local administration still matters.",
    relatedServices: ["microsoft-365", "it-support"],
    relatedIndustries: ["small-business", "medical-offices"],
  },
  {
    slug: "windows-server",
    name: "Windows Server",
    category: "Infrastructure",
    summary: "Support for legacy and active Windows Server environments, cleanup, modernization, and role review.",
    relatedServices: ["it-support", "security-hardening"],
    relatedIndustries: ["small-business", "medical-offices", "municipalities"],
  },
  {
    slug: "active-directory",
    name: "Active Directory",
    category: "Infrastructure",
    summary: "Directory cleanup, group policy review, account hygiene, and handoff documentation.",
    relatedServices: ["it-support", "security-hardening", "microsoft-365"],
    relatedIndustries: ["medical-offices", "small-business", "municipalities"],
  },
  {
    slug: "backup-systems",
    name: "Backup Systems",
    category: "Infrastructure",
    summary: "Backup review, retention planning, recovery expectations, and supportability improvements.",
    relatedServices: ["it-support", "security-hardening"],
    relatedIndustries: ["medical-offices", "small-business", "multi-site-properties"],
  },
  {
    slug: "ubiquiti-unifi",
    name: "Ubiquiti UniFi",
    category: "Networking and Wi-Fi",
    summary: "UniFi switching, Wi-Fi, guest access, routing, and maintainable small-site network design.",
    relatedServices: ["network-wifi", "camera-systems"],
    relatedIndustries: ["small-business", "campgrounds", "municipalities"],
  },
  {
    slug: "wifi-design",
    name: "Wi-Fi Design",
    category: "Networking and Wi-Fi",
    summary: "Coverage planning, roaming expectations, client separation, and practical performance tuning.",
    relatedServices: ["network-wifi"],
    relatedIndustries: ["campgrounds", "municipalities", "multi-site-properties"],
  },
  {
    slug: "vlan-segmentation",
    name: "VLAN Segmentation",
    category: "Networking and Wi-Fi",
    summary: "Separation of staff, guest, payment, device, and camera traffic for cleaner operations.",
    relatedServices: ["network-wifi", "security-hardening"],
    relatedIndustries: ["medical-offices", "municipalities", "campgrounds"],
  },
  {
    slug: "public-wifi",
    name: "Public Wi-Fi",
    category: "Networking and Wi-Fi",
    summary: "Guest access design for municipal, campground, and customer-facing environments.",
    relatedServices: ["network-wifi"],
    relatedIndustries: ["municipalities", "campgrounds", "multi-site-properties"],
  },
  {
    slug: "firewalls",
    name: "Firewalls",
    category: "Security and Compliance",
    summary: "Policy review, segmentation coordination, ingress and egress cleanup, and practical rule hardening.",
    relatedServices: ["network-wifi", "security-hardening"],
    relatedIndustries: ["medical-offices", "small-business", "municipalities"],
  },
  {
    slug: "mfa-and-access-controls",
    name: "MFA and Access Controls",
    category: "Security and Compliance",
    summary: "Identity hardening and role cleanup tied to practical administration rather than checkbox theater.",
    relatedServices: ["security-hardening", "microsoft-365"],
    relatedIndustries: ["medical-offices", "small-business", "municipalities"],
  },
  {
    slug: "documentation-and-standards",
    name: "Documentation and Standards",
    category: "Security and Compliance",
    summary: "Operational documentation, ownership clarity, and cleaner handoff materials for future support.",
    relatedServices: ["security-hardening", "it-support"],
    relatedIndustries: ["medical-offices", "municipalities", "multi-site-properties"],
  },
  {
    slug: "ip-cameras",
    name: "IP Cameras",
    category: "Cameras and Local AI",
    summary: "Full camera planning, installation, and integration with the surrounding network environment.",
    relatedServices: ["camera-systems", "network-wifi"],
    relatedIndustries: ["municipalities", "campgrounds", "multi-site-properties"],
  },
  {
    slug: "local-nvr-systems",
    name: "Local NVR Systems",
    category: "Cameras and Local AI",
    summary: "Local-first recording, retention, ownership, and operational control close to the site.",
    relatedServices: ["camera-systems"],
    relatedIndustries: ["municipalities", "small-business", "multi-site-properties"],
  },
  {
    slug: "hikvision",
    name: "Hikvision",
    category: "Cameras and Local AI",
    summary: "Camera deployments and support where Hikvision equipment is the right fit for the project.",
    relatedServices: ["camera-systems"],
    relatedIndustries: ["small-business", "municipalities", "multi-site-properties"],
  },
  {
    slug: "local-ai-processing",
    name: "Local AI Processing",
    category: "Cameras and Local AI",
    summary: "On-site analysis and local-first processing options for visibility workflows where ownership matters.",
    relatedServices: ["camera-systems"],
    relatedIndustries: ["municipalities", "campgrounds", "multi-site-properties"],
  },
];

export const technologies = technologyCatalog.map((technology) => technology.name);

export const faqs = [
  {
    question: "What kinds of organizations does NextGridIT support?",
    answer:
      "NextGridIT works with medical offices, small and mid-sized businesses, municipalities, campgrounds, and multi-site properties across Upstate South Carolina.",
  },
  {
    question: "What geographic areas does NextGridIT serve?",
    answer:
      "Primary local coverage includes Seneca, Clemson, Anderson, Easley, and Greenville, South Carolina, with travel available for larger projects and specialty engagements.",
  },
  {
    question: "Does NextGridIT provide managed services contracts?",
    answer:
      "The site positions NextGridIT as project-led and business-first rather than as a generic one-size-fits-all MSP. Support can still include ongoing guidance where it makes sense.",
  },
  {
    question: "What compliance-related environments does NextGridIT support?",
    answer:
      "The technical work is commonly informed by HIPAA, PCI DSS, and NIST-style security practices, especially where documentation, identity, segmentation, and operational controls matter.",
  },
  {
    question: "Can NextGridIT help with both networks and cameras?",
    answer:
      "Yes. Camera deployments are often planned alongside switching, Wi-Fi, and broader infrastructure work so the systems fit together cleanly.",
  },
  {
    question: "Does NextGridIT offer security audits or penetration testing?",
    answer:
      "Yes. NextGridIT offers scoped security audits, black box pentests, and trusted-access pentests with remediation help and practical risk review for each finding.",
  },
  {
    question: "How do projects usually start?",
    answer:
      "Projects typically start with an intake conversation, a review of the current environment, and a practical plan focused on the most useful improvements first.",
  },
  {
    question: "Does NextGridIT handle one-time projects or only ongoing support?",
    answer:
      "The site is intentionally positioned around project-led engagements. One-time infrastructure, cloud, Wi-Fi, camera, documentation, and hardening work are all valid fits.",
  },
  {
    question: "What kinds of technology brands or platforms are commonly involved?",
    answer:
      "Common environments include Microsoft 365, Entra ID, Azure, AWS, Google Workspace, Apple devices, Ubiquiti UniFi, firewalls, IP cameras, local NVR systems, and local-first AI-assisted camera workflows.",
  },
];

export const caseStudies = [
  {
    title: "Inherited Network Cleanup for a Growing Organization",
    challenge:
      "An organization had a partially documented network with recurring reliability complaints, unclear ownership, and no clean separation between operational devices and guest traffic.",
    approach:
      "NextGridIT focused on network review, segmentation planning, documentation cleanup, and a phased remediation path that reduced disruption while restoring visibility.",
    outcomes: [
      "Clearer network boundaries and ownership",
      "Better supportability for future changes",
      "A more stable baseline for staff and guest connectivity",
    ],
  },
  {
    title: "Microsoft 365 Administration Reset After Organic Growth",
    challenge:
      "Accounts, permissions, and administration responsibilities had grown informally over time, creating risk and day-to-day confusion.",
    approach:
      "The engagement prioritized tenant review, identity cleanup, safer administration patterns, and documentation that the client could actually use afterward.",
    outcomes: [
      "Cleaner tenant administration",
      "More consistent access control practices",
      "Reduced operational confusion around ownership and change management",
    ],
  },
  {
    title: "Local-First Visibility for a Property Environment",
    challenge:
      "A site needed stronger visibility and coverage without defaulting to a cloud-heavy model that reduced local control.",
    approach:
      "NextGridIT aligned camera planning with the broader infrastructure design, focusing on coverage, retention needs, and practical local ownership.",
    outcomes: [
      "Better site visibility",
      "Camera design aligned with the network environment",
      "A deployment model centered on operational fit rather than trend chasing",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function getTechnology(slug: string) {
  return technologyCatalog.find((technology) => technology.slug === slug);
}
