export const siteConfig = {
  name: "NextGridIT",
  legalName: "NextGridIT Systems LLC",
  url: "https://www.nextgridit.com",
  phone: "+1-864-780-0202",
  phoneDisplay: "864-780-0202",
  email: "contact@nextgridit.com",
  region: "Upstate South Carolina",
  serviceArea: ["Seneca", "Clemson", "Anderson", "Easley", "Greenville"],
  founded: "2026",
  tagline:
    "Helping Upstate South Carolina businesses take back control of their IT — from MSP transitions and vendor lockout recovery to HIPAA security assessments and vulnerability remediation.",
  sameAs: [
    "https://github.com/sparksbenjamin/nextgridit",
    "https://www.linkedin.com/company/nextgridit",
  ],
  googleBusinessUrl: "",
} as const;

export type ProcessStep = {
  title: string;
  description: string;
  duration: string;
};

export type Service = {
  slug: string;
  shortLabel: string;
  title: string;
  summary: string;
  description: string;
  audience: string;
  outcomes: string[];
  deliverables: string[];
  process: ProcessStep[];
  pricing: string;
  delivery: string;
  buyerPersonas: string[];
  relatedCaseStudies: string[];
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
    slug: "msp-transition",
    shortLabel: "MSP Transition",
    title: "MSP Transition and Vendor Independence",
    summary:
      "We help you take back control of your IT — from firing your MSP to standing up your own systems, ensuring nothing gets left behind.",
    description:
      "Many businesses outgrow their MSP but don't know how to leave. NextGridIT guides organizations through the full transition: auditing what the MSP currently manages, identifying the right internal hires or replacement systems, coordinating the cutover, and verifying that the former provider no longer has access to anything. The goal is a clean break where you own every system, every credential, and every document.",
    audience:
      "Best fit for small and mid-sized businesses that feel stuck with an MSP that isn't delivering, organizations that have grown past break-fix support, and companies that want to bring IT in-house but need someone to manage the transition.",
    outcomes: [
      "Complete separation from the former MSP with verified credential and access revocation",
      "Clear ownership of all systems, documentation, and administrative access",
      "A supported hiring process for internal IT staff or a path to a better provider relationship",
    ],
    deliverables: [
      "MSP dependency audit — what they manage, what you own, where the gaps are",
      "Transition plan with timeline, cutover coordination, and verification steps",
      "Post-transition verification confirming no residual access or orphaned systems",
    ],
    process: [
      { title: "Discovery and audit", description: "We catalog everything the MSP currently manages — systems, credentials, vendor relationships, and documentation gaps. You get a clear picture of what you actually own versus what your provider controls.", duration: "1-2 weeks" },
      { title: "Transition planning", description: "We build a cutover plan with timeline, staffing recommendations, and risk points identified up front. If you need to hire internal IT, we help define the role and support the hiring process.", duration: "1-2 weeks" },
      { title: "Cutover execution", description: "We coordinate the transition — migrating services, resetting credentials, standing up new management systems, and ensuring the former MSP's access is completely revoked across every system.", duration: "1-3 weeks" },
      { title: "Verification and handoff", description: "We verify that no residual access exists, all documentation is complete, and your team has everything needed to operate independently going forward.", duration: "1 week" },
    ],
    pricing: "Project-based. Typical MSP transition engagements range from $3,000-$8,000 depending on environment complexity and the number of systems involved.",
    delivery: "Hybrid. On-site for discovery and cutover in Upstate SC; remote for planning, documentation, and follow-up. Travel available for clients outside the region.",
    buyerPersonas: [
      "Business owners who feel stuck with an MSP that isn't delivering",
      "Office managers tired of paying for reactive support with no strategic direction",
      "Organizations that have grown past break-fix but don't know how to bring IT in-house",
    ],
    relatedCaseStudies: ["msp-transition"],
    relatedIndustries: ["small-business", "medical-offices", "municipalities"],
    relatedLocations: ["seneca-sc", "clemson-sc", "greenville-sc"],
    technologies: ["Microsoft 365", "Active Directory", "DNS management", "Backup systems"],
    faq: [
      {
        question: "How do we know if we're ready to leave our MSP?",
        answer:
          "If your MSP is reactive instead of proactive, if you can't get a straight answer about what they actually manage, or if you're paying for support but not getting strategic guidance — you're probably ready. We can do an assessment first before committing to a transition.",
      },
      {
        question: "What if we still need some outside support after transitioning?",
        answer:
          "That's common. The goal isn't necessarily going fully solo — it's making sure you own your systems and choose your support relationships deliberately instead of being locked in by default.",
      },
    ],
  },
  {
    slug: "vendor-lockout-recovery",
    shortLabel: "Vendor Lockout Recovery",
    title: "Vendor Lockout Recovery",
    summary:
      "When your IT provider walks away and takes your credentials with them, we break back in and hand you the keys — legally.",
    description:
      "Vendor lockout happens more often than anyone talks about. A provider walks away, gets fired, or simply stops responding — and suddenly you can't access your own network, cameras, firewall, or cloud services. NextGridIT recovers access to systems you legally own. Every engagement starts with proper authorization documentation so there's a clear paper trail if questions arise later.",
    audience:
      "Best fit for municipalities, small businesses, medical practices, and any organization that has lost access to systems they own because a vendor or former IT provider walked away.",
    outcomes: [
      "Recovered administrative access to all systems the organization legally owns",
      "Documented authorization trail protecting both the client and NextGridIT",
      "New credential sets and access controls that the organization controls going forward",
    ],
    deliverables: [
      "Authorization documentation signed before any recovery work begins",
      "System-by-system access recovery with verified credential handoff",
      "Security reset — new administrative credentials, revoked former access, updated documentation",
    ],
    process: [
      { title: "Authorization and scoping", description: "We require signed authorization documentation from someone with legal authority for the organization before any recovery work begins. This protects everyone involved and creates a clear paper trail.", duration: "1-2 days" },
      { title: "System identification", description: "We inventory every system the organization owns but cannot access — network equipment, cameras, cloud accounts, firewalls, domain registrations — and map the recovery path for each.", duration: "1-3 days" },
      { title: "Access recovery", description: "We recover administrative access system by system, using appropriate methods for each platform. Every recovery is documented and verified.", duration: "1-2 weeks" },
      { title: "Credential reset and handoff", description: "New administrative credentials are created, former provider access is revoked across every system, and everything is documented and handed over to the organization.", duration: "2-3 days" },
    ],
    pricing: "Project-based. Urgent engagements typically range from $2,000-$6,000 depending on the number and type of systems involved. Emergency response available.",
    delivery: "On-site preferred for authorization and physical system recovery in Upstate SC. Remote available for cloud-based recovery. Emergency response within 24 hours for local clients.",
    buyerPersonas: [
      "Municipal leaders who lost access after a vendor walked away",
      "Business owners whose former IT provider won't hand over credentials",
      "Property managers locked out of camera and network systems",
    ],
    relatedCaseStudies: ["vendor-lockout-recovery"],
    relatedIndustries: ["municipalities", "small-business", "medical-offices"],
    relatedLocations: ["seneca-sc", "anderson-sc", "greenville-sc"],
    technologies: ["Network equipment", "IP cameras and NVR systems", "Firewalls", "Cloud services"],
    faq: [
      {
        question: "Is it legal to break back into our own systems?",
        answer:
          "Yes, when you own the systems and can demonstrate ownership. NextGridIT requires proper authorization documentation before any recovery work begins — signed by someone with legal authority for the organization. This protects everyone involved.",
      },
      {
        question: "What kinds of systems can you recover access to?",
        answer:
          "Common targets include network switches, routers, firewalls, wireless controllers, camera systems and NVRs, cloud accounts, and domain registrations. If it's equipment or a service your organization owns, there's usually a path to recovery.",
      },
    ],
  },
  {
    slug: "hipaa-security-assessment",
    shortLabel: "HIPAA Assessment",
    title: "HIPAA Security Assessment for Medical Practices",
    summary:
      "Security assessments for medical offices and healthcare-adjacent practices that need to demonstrate compliance — not just check boxes.",
    description:
      "NextGridIT conducts HIPAA security assessments grounded in real-world healthcare experience. Having assessed over 100 medical offices and currently supporting Medicaid compliance operations under MARS-E and NIST 800-53, the assessment process focuses on what actually reduces risk — not what looks good on a compliance shelf. Findings are prioritized by real exploitability and business impact, with a remediation plan your practice can actually execute.",
    audience:
      "Best fit for independent medical practices, dental offices, specialty clinics, and healthcare-adjacent organizations in Upstate SC that need a real HIPAA security assessment — not a form letter.",
    outcomes: [
      "Identified security gaps mapped to HIPAA Security Rule requirements",
      "Prioritized remediation plan ordered by real risk, not theoretical severity",
      "Documentation that supports audit readiness without overwhelming a small practice",
    ],
    deliverables: [
      "Comprehensive security assessment with findings mapped to HIPAA Security Rule",
      "Risk-based remediation roadmap with practical implementation steps",
      "Assessment documentation suitable for compliance records and audit support",
    ],
    process: [
      { title: "Scoping and preparation", description: "We define the assessment scope, identify the systems and data flows involved, and coordinate scheduling to minimize disruption to patient care.", duration: "3-5 days" },
      { title: "Assessment and analysis", description: "We assess the environment against HIPAA Security Rule requirements — covering access controls, encryption, audit logging, backup, physical safeguards, and policy gaps. Findings are mapped to specific regulatory requirements.", duration: "1-2 weeks" },
      { title: "Risk prioritization", description: "Findings are ranked by real exploitability and business impact, not theoretical severity. You get a clear picture of what matters most and what can wait.", duration: "3-5 days" },
      { title: "Remediation roadmap", description: "We deliver a practical remediation plan with implementation steps, effort estimates, and documentation suitable for compliance records and audit preparation.", duration: "3-5 days" },
    ],
    pricing: "Project-based. HIPAA security assessments for small to mid-sized practices typically range from $3,000-$7,000 depending on the number of systems and locations involved.",
    delivery: "Hybrid. On-site for physical security review and stakeholder interviews in Upstate SC; remote for technical assessment, analysis, and documentation delivery.",
    buyerPersonas: [
      "Practice managers at independent medical offices facing a compliance deadline",
      "Office administrators who know they need a real assessment, not a form letter",
      "Healthcare-adjacent organizations (dental, specialty, billing) that handle PHI",
    ],
    relatedCaseStudies: [],
    relatedIndustries: ["medical-offices"],
    relatedLocations: ["clemson-sc", "anderson-sc", "greenville-sc"],
    technologies: ["Tenable.sc", "NIST 800-53", "MARS-E", "Archer GRC"],
    faq: [
      {
        question: "What's the difference between a HIPAA security assessment and a compliance audit?",
        answer:
          "A compliance audit checks whether you meet specific regulatory requirements. A security assessment finds the actual risks in your environment — many of which overlap with compliance requirements, but the focus is on what a real attacker would exploit, not what a checklist asks for.",
      },
      {
        question: "How long does an assessment take?",
        answer:
          "Typical engagements run 2-4 weeks depending on the size of the practice and the scope of systems involved. The goal is thoroughness without disrupting patient care.",
      },
    ],
  },
  {
    slug: "vulnerability-assessment",
    shortLabel: "Vulnerability Assessment",
    title: "Vulnerability Assessment and Remediation Planning",
    summary:
      "Find what's actually vulnerable in your environment and get a prioritized plan to fix it — not a 200-page report that sits on a shelf.",
    description:
      "NextGridIT provides scoped vulnerability assessments using the same tools and processes used in enterprise compliance environments — Tenable.sc, risk-based prioritization, and cross-team remediation coordination. The difference is the output: findings are ranked by real exploitability and business impact, with a remediation plan your team can actually execute. Optional follow-up helps you close the gaps instead of just cataloging them.",
    audience:
      "Best fit for small and mid-sized businesses, medical practices, municipalities, and any organization that knows they have security gaps but needs someone to identify, prioritize, and help fix them.",
    outcomes: [
      "Clear visibility into what's actually vulnerable — not just what a scanner flags",
      "Prioritized remediation plan ordered by real risk and business impact",
      "Optional validation after fixes are applied to confirm gaps are actually closed",
    ],
    deliverables: [
      "Scoped vulnerability scan and assessment with executive and technical summaries",
      "Risk-based remediation roadmap with implementation priority and effort estimates",
      "Optional remediation support and post-fix validation",
    ],
    process: [
      { title: "Scoping", description: "We define the assessment boundaries — external, internal, or both — and agree on the systems in scope, timing, and any constraints around production environments.", duration: "2-3 days" },
      { title: "Scanning and discovery", description: "We run scoped vulnerability scans using the same tools and processes used in enterprise compliance environments. Results are filtered for real findings, not noise.", duration: "3-5 days" },
      { title: "Analysis and prioritization", description: "Every finding is evaluated for real exploitability and business impact — not just CVSS score. You get a prioritized list that reflects what an actual attacker would target.", duration: "3-5 days" },
      { title: "Remediation planning and delivery", description: "We deliver a remediation roadmap with clear steps, effort estimates, and priority ordering. Optional follow-up helps you close the gaps and validates that fixes actually work.", duration: "3-5 days" },
    ],
    pricing: "Project-based. Vulnerability assessments typically range from $2,500-$6,000 depending on scope (external-only vs. external+internal) and the number of systems involved.",
    delivery: "Remote-first for scanning and analysis. On-site available for internal scanner deployment and stakeholder briefings in Upstate SC.",
    buyerPersonas: [
      "IT directors who know they have gaps but need someone to identify and prioritize them",
      "Compliance officers who need documented vulnerability findings for audit support",
      "Business owners who want a security checkup without committing to a full penetration test",
    ],
    relatedCaseStudies: [],
    relatedIndustries: ["small-business", "medical-offices", "municipalities"],
    relatedLocations: ["seneca-sc", "anderson-sc", "greenville-sc"],
    technologies: ["Tenable.sc", "NIST 800-53", "Risk-based prioritization", "Remediation tracking"],
    faq: [
      {
        question: "What's the difference between a vulnerability assessment and a penetration test?",
        answer:
          "A vulnerability assessment scans for known weaknesses and prioritizes them. A penetration test actively tries to exploit those weaknesses to prove real-world impact. Many organizations start with a vulnerability assessment and move to penetration testing for specific high-risk areas.",
      },
      {
        question: "Do we need to install anything on our network?",
        answer:
          "It depends on the scope. External assessments require no internal access. Internal assessments may require a scanner deployment, which can be done with minimal footprint and removed after the engagement.",
      },
    ],
  },
  {
    slug: "infrastructure-hardening",
    shortLabel: "Infrastructure Hardening",
    title: "Infrastructure Hardening and Security Cleanup",
    summary:
      "Close the gaps in identity, mail, network edges, and inherited infrastructure before someone else finds them first.",
    description:
      "NextGridIT leads infrastructure hardening programs for organizations that need stronger control without falling into generic MSP packaging. Engagements include identity and mail controls, externally visible service review, environment cleanup, baseline hardening, edge-system governance, and documentation that makes the environment easier to defend under pressure. This is not break-fix support — it's a deliberate effort to reduce your attack surface and operational confusion.",
    audience:
      "Best fit for organizations that inherited messy infrastructure, businesses that have grown faster than their IT controls, and teams that need a stronger defensive baseline before their next audit or growth phase.",
    outcomes: [
      "Reduced exposure across identity, mail, network edge, and inherited infrastructure",
      "Clearer ownership around public-facing systems, administrator pathways, and vendor coordination",
      "A defensible baseline for future audits, threat response, and controlled growth",
    ],
    deliverables: [
      "Infrastructure hardening assessment with prioritized remediation guidance",
      "Perimeter review across mail, DNS, identity, and network edge",
      "Documentation cleanup, ownership mapping, and operational handoff notes",
    ],
    process: [
      { title: "Environment review", description: "We audit the current state of identity, mail, DNS, network edge, and inherited infrastructure. The goal is to map what's exposed, what's undocumented, and what's been left in a default or insecure state.", duration: "1-2 weeks" },
      { title: "Prioritization and planning", description: "Findings are ranked by real risk and business impact. We build a hardening plan that tackles the most dangerous exposures first, with clear steps and effort estimates.", duration: "3-5 days" },
      { title: "Hardening execution", description: "We work through the hardening plan — tightening access controls, cleaning up defaults, improving documentation, and closing the gaps that create the most risk.", duration: "2-4 weeks" },
      { title: "Verification and documentation", description: "We verify that hardening changes are effective, document the new baseline, and deliver operational handoff notes that make the environment easier to defend going forward.", duration: "3-5 days" },
    ],
    pricing: "Project-based. Infrastructure hardening engagements typically range from $4,000-$10,000 depending on environment complexity and the scope of systems involved.",
    delivery: "Hybrid. On-site for environment review and stakeholder coordination in Upstate SC; remote for execution, analysis, and documentation. Travel available outside the region.",
    buyerPersonas: [
      "Organizations that inherited messy infrastructure and need a stronger defensive baseline",
      "Businesses that have grown faster than their IT controls can support",
      "Teams preparing for an audit or compliance review who need their environment defensible",
    ],
    relatedCaseStudies: ["m365-admin-reset"],
    relatedIndustries: ["small-business", "municipalities", "medical-offices"],
    relatedLocations: ["seneca-sc", "clemson-sc", "anderson-sc"],
    technologies: ["Microsoft 365", "Active Directory", "DNS", "Firewalls"],
    faq: [
      {
        question: "Do you replace an internal IT team?",
        answer:
          "Not necessarily. NextGridIT can supplement internal teams, coordinate with outside providers, or provide hands-on hardening leadership where no dedicated security function exists.",
      },
      {
        question: "Is this just break-fix support under a different name?",
        answer:
          "No. The model is designed around reducing exposure, improving control, and creating better defensive conditions rather than waiting for emergencies to stack up.",
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
      "NextGridIT helps organizations plan, improve, and support cloud environments with an emphasis on Microsoft 365, Entra ID, Azure, and practical identity administration. Work can include tenant cleanup, MFA rollout, secure collaboration setup, mailbox and account administration, cloud migration planning, and documentation. Having migrated over 4,000 Microsoft 365 accounts with zero data loss, the focus is on doing it right the first time.",
    audience:
      "Best fit for organizations that depend on Microsoft 365 but need cleaner administration, better identity controls, or a safer migration path — especially those recovering from a rushed or neglected setup.",
    outcomes: [
      "Improved tenant hygiene and account security",
      "Easier Microsoft 365 administration and support",
      "Reduced risk around identity, email, and collaboration systems",
    ],
    deliverables: [
      "Tenant review and remediation roadmap",
      "Identity and access control improvements",
      "Administration standards and support documentation",
    ],
    process: [
      { title: "Tenant review", description: "We audit the current Microsoft 365 tenant — identity configuration, mail settings, account hygiene, license allocation, and security defaults. The goal is to find what's risky, what's wasted, and what's undocumented.", duration: "3-5 days" },
      { title: "Remediation planning", description: "We build a prioritized plan covering MFA enforcement, stale account cleanup, administrative role tightening, and any migration or consolidation needs.", duration: "2-3 days" },
      { title: "Execution and cleanup", description: "We work through the remediation plan — enforcing MFA, removing stale accounts, tightening admin roles, cleaning up mail routing, and documenting what the client actually owns.", duration: "1-2 weeks" },
      { title: "Documentation and handoff", description: "We deliver administration standards, support documentation, and a clean tenant that's easier to manage and defend going forward.", duration: "2-3 days" },
    ],
    pricing: "Project-based. Microsoft 365 cleanup and hardening engagements typically range from $2,000-$6,000 depending on tenant size and complexity. Migration projects quoted separately.",
    delivery: "Remote-first for most Microsoft 365 work. On-site available for planning sessions and stakeholder coordination in Upstate SC.",
    buyerPersonas: [
      "Organizations that depend on Microsoft 365 but need cleaner administration",
      "Businesses recovering from a rushed or neglected tenant setup",
      "Practices that need better identity controls for compliance",
    ],
    relatedCaseStudies: ["m365-admin-reset"],
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
    title: "Network Infrastructure and Wi-Fi Deployment",
    summary:
      "Wired and wireless infrastructure delivery, segmentation, and network operations for businesses that need reliable connectivity.",
    description:
      "NextGridIT designs, upgrades, and deploys business and property networks with a focus on reliable performance, segmented access, maintainable infrastructure, and strong execution. Work often includes Ubiquiti and UniFi deployments, public and guest Wi-Fi separation, multi-building connectivity planning, firewall coordination, and practical deployment sequencing. Past projects range from full Wi-Fi coverage under budget to multi-site WAN upgrades with zero downtime.",
    audience:
      "Best fit for offices, municipalities, campgrounds, hospitality-style properties, and multi-building sites where coverage, segmentation, and coordinated infrastructure rollout matter.",
    outcomes: [
      "Improved Wi-Fi coverage and network reliability",
      "Cleaner separation of guest, staff, device, and payment traffic",
      "Better network documentation and deployment sequencing for future growth",
    ],
    deliverables: [
      "Network assessment and topology guidance",
      "Coverage, segmentation, hardware, and deployment recommendations",
      "Deployment notes and environment documentation",
    ],
    process: [
      { title: "Site assessment", description: "We walk the property, evaluate the existing network, identify coverage gaps, and map the physical layout. For outdoor and multi-building sites, this includes signal testing and cable path planning.", duration: "1-3 days" },
      { title: "Design and planning", description: "We design the network topology — coverage, segmentation, hardware selection, and deployment sequencing. Guest, staff, device, and payment traffic get clean separation from the start.", duration: "3-5 days" },
      { title: "Deployment", description: "We deploy the network — switching, access points, VLANs, firewalls, and guest access. Deployment is sequenced to minimize downtime and verify coverage at each step.", duration: "1-3 weeks" },
      { title: "Testing and documentation", description: "We verify coverage, test segmentation, and deliver documentation including topology diagrams, credential records, and deployment notes for future support.", duration: "2-3 days" },
    ],
    pricing: "Project-based. Network deployments typically range from $3,000-$12,000 depending on property size, number of buildings, and hardware requirements. Hardware costs are separate and quoted per project.",
    delivery: "On-site required for assessment and deployment in Upstate SC and surrounding region. Remote available for planning and documentation.",
    buyerPersonas: [
      "Property owners who need Wi-Fi that actually works beyond the front desk",
      "Municipalities that need public Wi-Fi with proper guest separation",
      "Businesses with flaky networks and no documentation for what they have",
    ],
    relatedCaseStudies: [],
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
    slug: "security-audits-pentesting",
    shortLabel: "Penetration Testing",
    title: "Vulnerability Assessment and Penetration Testing",
    summary:
      "Black box and trusted-access security testing with remediation help and real-world risk review for each finding.",
    description:
      "NextGridIT provides scoped security audits and penetration testing for organizations that need more than a vulnerability dump. Engagements can include black box testing, trusted-access pentests, targeted exposure review, and follow-up remediation support. Each finding is written with practical business context so the client understands what is actually risky, what is mostly noise, and what to fix first. As an active bug bounty researcher on Microsoft and HackerOne platforms, the testing methodology reflects real-world attack techniques — not just scanner output.",
    audience:
      "Best fit for organizations that need a clearer picture of real exposure before a project, after a major change, before outside review, or as part of a broader security improvement effort.",
    outcomes: [
      "Validated external exposure through black box testing from an attacker perspective",
      "Reviewed internal trust assumptions and escalation paths through trusted-access pentests",
      "Prioritized remediation work with practical business context attached to every finding",
    ],
    deliverables: [
      "Scoping notes, rules of engagement, and assessment summary",
      "Findings report with real-world risk review and remediation guidance",
      "Optional validation help after fixes are applied so the work actually closes out cleanly",
    ],
    process: [
      { title: "Scoping and rules of engagement", description: "We define the test scope — black box, trusted-access, or targeted — and establish rules of engagement, timing windows, and communication protocols.", duration: "2-3 days" },
      { title: "Testing and exploitation", description: "We execute the assessment using real-world attack techniques informed by active bug bounty research. Every finding is validated and documented with evidence, not scanner screenshots.", duration: "1-2 weeks" },
      { title: "Analysis and reporting", description: "Findings are analyzed for real business impact and written with practical remediation guidance. You understand what's actually risky, what's noise, and what to fix first.", duration: "3-5 days" },
      { title: "Remediation support", description: "Optional follow-up helps your team implement fixes and validates that the work actually closes out cleanly. We don't just hand over a report and disappear.", duration: "1-2 weeks" },
    ],
    pricing: "Project-based. Penetration tests typically range from $4,000-$12,000 depending on scope (black box vs. trusted-access vs. targeted), number of systems, and whether remediation support is included.",
    delivery: "Remote-first for external testing. On-site available for trusted-access testing and debriefings in Upstate SC and surrounding region. Travel available for clients outside the area.",
    buyerPersonas: [
      "Organizations that need a clearer picture of real exposure before a project or after a major change",
      "Compliance-driven teams that need validated findings, not just scanner output",
      "Companies evaluating their security posture with real-world attack simulation",
    ],
    relatedCaseStudies: [],
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
    ],
  },
  {
    slug: "camera-systems",
    shortLabel: "Surveillance Systems",
    title: "Camera Systems and Surveillance Infrastructure",
    summary:
      "Camera, sensor, and local capture infrastructure designed for sites that need visibility without surrendering footage to a third-party cloud.",
    description:
      "NextGridIT designs and supports surveillance systems where on-site visibility, local processing, and tailored coverage matter. Projects include full camera installs, site planning, integration with broader network infrastructure, local NVR design, and controlled AI-assisted video workflows where appropriate. The preference is local-first control — you own your footage, your retention policies, and your system.",
    audience:
      "Best fit for properties, small businesses, municipalities, and specialty sites that need stronger perimeter visibility without handing everything to a third-party cloud platform.",
    outcomes: [
      "Improved visibility across entrances, public spaces, and operational areas",
      "More control of footage, sensor telemetry, and system ownership close to the site",
      "Surveillance infrastructure coordinated with the underlying network design",
    ],
    deliverables: [
      "Site coverage planning and deployment recommendations",
      "Camera, NVR, and sensor installation scope",
      "Local-first processing and retention guidance where relevant",
    ],
    process: [
      { title: "Site survey", description: "We walk the property, identify coverage requirements for entrances, public spaces, and operational areas, and map camera placement, cable paths, and NVR location.", duration: "1-2 days" },
      { title: "Design and planning", description: "We design the surveillance system — camera selection, NVR capacity, retention policies, and network integration. The preference is local-first control where you own your footage and your system.", duration: "2-3 days" },
      { title: "Installation", description: "We install cameras, NVR, switching, and cabling. Installation is coordinated with any network work so the systems fit together cleanly from the start.", duration: "1-2 weeks" },
      { title: "Testing and handoff", description: "We verify coverage, test recording and retention, and deliver documentation including camera maps, credential records, and retention configuration.", duration: "1-2 days" },
    ],
    pricing: "Project-based. Camera system deployments typically range from $2,500-$10,000 for labor and configuration. Hardware costs are separate and quoted per project.",
    delivery: "On-site required for survey and installation in Upstate SC and surrounding region. Remote available for NVR configuration and documentation.",
    buyerPersonas: [
      "Property owners who need visibility without surrendering footage to a third-party cloud",
      "Municipalities that need perimeter and public space surveillance",
      "Businesses that want camera systems coordinated with their network infrastructure",
    ],
    relatedCaseStudies: [],
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
  {
    slug: "private-ai",
    shortLabel: "Private AI",
    title: "Private and On-Premise AI Consulting",
    summary:
      "Guidance on deploying local AI solutions that keep your data inside your environment — from model selection to hardware and workflow design.",
    description:
      "NextGridIT consults on private AI deployments for organizations that want the leverage of modern language models without sending sensitive data to third-party platforms. Services include model selection guidance, hardware and infrastructure planning, inference workflow design, and operational controls for environments where data privacy matters. This is a consulting engagement — we help you design and plan the right approach for your environment, whether that's a single GPU workstation or a multi-node cluster.",
    audience:
      "Best fit for organizations exploring AI adoption but concerned about data privacy, security teams evaluating private inference options, and businesses that want a realistic assessment of what local AI can and cannot do for them today.",
    outcomes: [
      "A realistic assessment of whether local AI fits your use case and budget",
      "Infrastructure and hardware planning for on-premise model serving",
      "A practical deployment roadmap instead of vaporware promises",
    ],
    deliverables: [
      "AI readiness assessment — what local AI can realistically do for your environment",
      "Hardware, model, and infrastructure recommendations",
      "Deployment roadmap with governance and workflow considerations",
    ],
    process: [
      { title: "Use case assessment", description: "We evaluate whether local AI fits your specific use case and budget. This is an honest assessment — some workflows work well today, others still need cloud-scale models. You get a clear answer, not vaporware.", duration: "3-5 days" },
      { title: "Infrastructure planning", description: "For viable use cases, we plan the hardware, model selection, and infrastructure requirements. Many useful models run on consumer-grade hardware — you don't always need expensive GPU clusters.", duration: "3-5 days" },
      { title: "Deployment design", description: "We design the inference workflow, operational controls, and data governance for your environment. The focus is on keeping your data inside your environment while getting the leverage of modern AI.", duration: "3-5 days" },
      { title: "Roadmap and handoff", description: "We deliver a practical deployment roadmap with governance considerations, hardware specifications, and a clear timeline. This is a consulting engagement — you own the plan and the infrastructure.", duration: "2-3 days" },
    ],
    pricing: "Project-based. Private AI consulting engagements typically range from $3,000-$8,000 depending on use case complexity and infrastructure requirements. Does not include hardware costs.",
    delivery: "Remote-first for assessment and planning. On-site available for infrastructure review in Upstate SC.",
    buyerPersonas: [
      "Organizations exploring AI adoption but concerned about data privacy",
      "Security teams evaluating private inference options for sensitive workflows",
      "Businesses that want a realistic assessment of what local AI can actually do for them",
    ],
    relatedCaseStudies: [],
    relatedIndustries: ["small-business", "medical-offices"],
    relatedLocations: ["greenville-sc", "clemson-sc", "anderson-sc"],
    technologies: ["Local LLM deployment", "GPU infrastructure", "Private inference workflows"],
    faq: [
      {
        question: "Is local AI ready for production use in small businesses?",
        answer:
          "It depends heavily on the use case. Some workflows — document search, code assistance, internal knowledge bases — work well today. Others still need cloud-scale models. An honest assessment of what's real versus what's hype is part of the consulting process.",
      },
      {
        question: "Do we need expensive GPU hardware?",
        answer:
          "Not necessarily. Many useful models run on consumer-grade hardware. The right approach depends on your use case, data volume, and performance requirements — which is exactly what the assessment covers.",
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
    title: "Medical Offices and Healthcare Practices",
    summary:
      "HIPAA security assessments, Microsoft 365 cleanup, and compliance-aware support for independent medical practices.",
    description:
      "Medical offices often need cleaner Microsoft 365 administration, better access controls, more dependable backups, and better operational documentation — without adding enterprise overhead. NextGridIT supports the technical side of these environments with practical, confidentiality-aware execution grounded in real healthcare compliance experience, including daily Medicaid operations under MARS-E and NIST 800-53.",
    needs: [
      "HIPAA security assessments that find real risks, not just check boxes",
      "Safer identity and email administration",
      "Documentation and operational cleanup for audit readiness",
    ],
    relatedServices: [
      "hipaa-security-assessment",
      "microsoft-365",
      "infrastructure-hardening",
      "vulnerability-assessment",
    ],
  },
  {
    slug: "small-business",
    title: "Small and Mid-Sized Businesses",
    summary:
      "MSP transitions, vendor independence, IT cleanup, and security hardening for businesses that need a technical partner who shows up.",
    description:
      "Small businesses often outgrow reactive vendor support before they're ready for a full internal IT department. NextGridIT helps bridge that gap with MSP transitions, vendor lockout recovery, infrastructure cleanup, and security hardening that improves reliability without overcomplicating the environment. You don't need enterprise solutions — you need someone who understands your situation and actually fixes things.",
    needs: [
      "A clean break from an MSP that isn't delivering",
      "Security hardening and vulnerability assessments that make sense for your size",
      "Project guidance for growth and cleanup without overselling",
    ],
    relatedServices: [
      "msp-transition",
      "vendor-lockout-recovery",
      "infrastructure-hardening",
      "microsoft-365",
    ],
  },
  {
    slug: "municipalities",
    title: "Municipal and Public-Sector Organizations",
    summary:
      "Vendor lockout recovery, public Wi-Fi, camera systems, and NIST-informed security for local government operations.",
    description:
      "Municipal teams often need public-facing connectivity, more reliable infrastructure, stronger operational documentation, and practical security improvements across constrained budgets. NextGridIT has direct experience helping municipalities recover from vendor abandonment and build infrastructure that the organization actually controls. NIST-informed security improvements fit government compliance requirements without enterprise pricing.",
    needs: [
      "Recovery from vendor lockout and abandoned IT providers",
      "Public Wi-Fi and segmented network design",
      "NIST-informed security improvements within budget constraints",
    ],
    relatedServices: [
      "vendor-lockout-recovery",
      "network-wifi",
      "camera-systems",
      "vulnerability-assessment",
    ],
  },
  {
    slug: "campgrounds",
    title: "Campgrounds and Guest Connectivity",
    summary:
      "Wi-Fi coverage, guest access separation, and infrastructure design for properties that need reliable connectivity for visitors.",
    description:
      "Campgrounds and similar guest environments need practical network coverage, guest access separation, equipment planning, and support for multi-building or outdoor connectivity. In areas where ISPs drop off a modem and call it done, NextGridIT focuses on realistic deployment planning that actually works across the property — not just at the front desk.",
    needs: [
      "Reliable guest Wi-Fi coverage across the entire property",
      "Staff and guest network separation",
      "Outdoor and multi-building connectivity planning that goes beyond ISP defaults",
    ],
    relatedServices: ["network-wifi", "camera-systems", "infrastructure-hardening"],
  },
  {
    slug: "multi-site-properties",
    title: "Multi-Site and Multi-Building Properties",
    summary:
      "Consistent infrastructure, centralized visibility, and scalable network and camera systems across distributed locations.",
    description:
      "Multi-site properties and distributed organizations need consistent connectivity, clear ownership, good documentation, and systems that can be supported without confusion. NextGridIT helps create cleaner infrastructure and operating baselines across those environments — whether it's three buildings on one property or offices across the region.",
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
  faq: { question: string; answer: string }[];
};

export const locations: LocationPage[] = [
  {
    slug: "seneca-sc",
    city: "Seneca",
    title: "IT Support, Security, and Network Services in Seneca, SC",
    summary:
      "Local IT, MSP transition, vendor lockout recovery, security assessments, and network support for organizations in and around Seneca, South Carolina.",
    description:
      "NextGridIT is based in Seneca and provides on-site IT, security, and network services to businesses and organizations across Oconee County. Seneca sits at the intersection of reliable power (Duke Energy nuclear at Lake Keowee), Tier 1 fiber infrastructure, and proximity to Greenville, Atlanta, and Charlotte — making it a strategic location for both local service delivery and regional infrastructure projects. Whether it's recovering from a vendor lockout, transitioning away from an MSP, or hardening infrastructure for compliance, NextGridIT delivers hands-on support from right here in the community.",
    county: "Oconee County",
    coordinates: [-82.96, 34.68194],
    nearbyCities: ["Clemson", "Anderson", "Greenville"],
    focus: [
      "Vendor lockout recovery for municipalities and businesses",
      "MSP transitions and IT independence",
      "Network infrastructure and Wi-Fi deployment",
    ],
    relatedServices: [
      "vendor-lockout-recovery",
      "msp-transition",
      "network-wifi",
      "camera-systems",
    ],
    faq: [
      {
        question: "What IT services does NextGridIT offer in Seneca, SC?",
        answer:
          "NextGridIT is based in Seneca and provides MSP transition, vendor lockout recovery, network infrastructure, camera systems, HIPAA security assessments, vulnerability assessments, and Microsoft 365 support for businesses across Oconee County.",
      },
      {
        question: "Can NextGridIT help my business transition away from an MSP in Seneca?",
        answer:
          "Yes. MSP transition is one of our core services. We help Seneca-area businesses assess their current MSP relationship, plan the transition, ensure all credentials and access are transferred, and set up independent IT management.",
      },
      {
        question: "Do you provide on-site IT support in Seneca?",
        answer:
          "Yes. Since NextGridIT is based in Seneca, on-site support is available for local businesses without travel fees. We also provide remote support for ongoing projects.",
      },
      {
        question: "What industries do you serve in Oconee County?",
        answer:
          "We work with small businesses, municipalities, healthcare practices, construction companies, and multi-site properties throughout Oconee County and the Seneca area.",
      },
    ],
  },
  {
    slug: "clemson-sc",
    city: "Clemson",
    title: "HIPAA Assessments, Microsoft 365, and IT Security in Clemson, SC",
    summary:
      "Microsoft 365 administration, HIPAA security assessments, and compliance-aware IT support for organizations in Clemson, South Carolina.",
    description:
      "Clemson's mix of university-affiliated organizations, healthcare practices, and growing small businesses creates specific IT needs — especially around Microsoft 365 administration and HIPAA compliance for practices that aren't served by the hospital system. NextGridIT helps Clemson organizations improve Microsoft 365 administration, navigate HIPAA security requirements, and build a stronger security posture with practical, project-led support.",
    county: "Pickens and Anderson Counties",
    coordinates: [-82.814777, 34.68493],
    nearbyCities: ["Seneca", "Anderson", "Greenville"],
    focus: [
      "HIPAA security assessments for independent medical practices",
      "Microsoft 365 tenant cleanup and identity hardening",
      "Compliance-aware IT support",
    ],
    relatedServices: [
      "hipaa-security-assessment",
      "microsoft-365",
      "infrastructure-hardening",
      "vulnerability-assessment",
    ],
    faq: [
      {
        question: "Do you provide HIPAA security assessments in Clemson, SC?",
        answer:
          "Yes. We perform HIPAA security assessments for independent medical practices and healthcare organizations in the Clemson area that need compliance documentation, risk assessments, and remediation planning outside of the hospital system.",
      },
      {
        question: "Can you help with Microsoft 365 administration for Clemson businesses?",
        answer:
          "Yes. We help Clemson-area organizations clean up Microsoft 365 tenants, implement proper identity management with Entra ID, set up conditional access, and improve overall M365 security and administration.",
      },
      {
        question: "What makes NextGridIT different from the university IT department?",
        answer:
          "NextGridIT serves the broader Clemson community, not the university itself. We help local businesses, medical practices, and organizations that don't have access to university IT resources. Our focus is on small and mid-sized organizations that need project-based IT and security support.",
      },
      {
        question: "Do you serve healthcare practices not affiliated with the hospital system in Clemson?",
        answer:
          "Yes. Many independent practices in the Clemson area are not served by hospital IT departments. We provide HIPAA security assessments, compliance documentation, and IT support specifically for those independent practices.",
      },
    ],
  },
  {
    slug: "anderson-sc",
    city: "Anderson",
    title: "Network Infrastructure, Security, and IT Support in Anderson, SC",
    summary:
      "Network upgrades, security hardening, vulnerability assessments, and IT support for organizations in Anderson, South Carolina.",
    description:
      "Anderson's growing business community needs reliable network infrastructure and practical security improvements — not enterprise-priced solutions that don't fit. NextGridIT supports Anderson-area organizations with network upgrades, vulnerability assessments, security hardening, and documentation-driven cleanup projects. With many businesses operating across Anderson County's mix of urban and rural areas, network reliability and ISP coverage gaps are common problems that need hands-on solutions.",
    county: "Anderson County",
    coordinates: [-82.64167, 34.50333],
    nearbyCities: ["Clemson", "Greenville", "Seneca"],
    focus: [
      "Network upgrades and ISP coverage gap solutions",
      "Vulnerability assessments and security hardening",
      "MSP transitions for growing businesses",
    ],
    relatedServices: [
      "network-wifi",
      "vulnerability-assessment",
      "infrastructure-hardening",
      "msp-transition",
    ],
    faq: [
      {
        question: "What IT services are available in Anderson, SC?",
        answer:
          "NextGridIT provides network infrastructure upgrades, vulnerability assessments, security hardening, MSP transitions, and IT support for businesses throughout Anderson County. We focus on practical improvements rather than enterprise-priced solutions.",
      },
      {
        question: "Can you help with ISP coverage gaps in Anderson County?",
        answer:
          "Yes. Many Anderson County businesses operate in areas where ISP coverage drops off after the modem is installed. We help design network solutions that work around ISP limitations, including proper Wi-Fi deployment, network segmentation, and connectivity planning.",
      },
      {
        question: "Do you offer vulnerability assessments for Anderson businesses?",
        answer:
          "Yes. We run scoped vulnerability assessments using professional scanning tools, deliver a prioritized remediation plan, and can help execute the fixes. This is especially valuable for businesses that don't have dedicated security staff.",
      },
      {
        question: "How much does IT consulting cost in Anderson?",
        answer:
          "NextGridIT works on a project-based pricing model. We scope the work upfront and provide a clear estimate before starting. Contact us with your location, timeline, and the main problem you need solved, and we'll provide a straightforward assessment.",
      },
    ],
  },
  {
    slug: "easley-sc",
    city: "Easley",
    title: "IT Infrastructure, Camera Systems, and Support in Easley, SC",
    summary:
      "Infrastructure planning, camera deployments, Microsoft 365 support, and IT services for businesses in Easley, South Carolina.",
    description:
      "Easley-area businesses often need camera systems, network infrastructure, and practical IT support that scales with their growth. Between Pickens County's mix of small businesses and properties that need surveillance coverage, and organizations that need Microsoft 365 help after a rushed setup, NextGridIT provides tailored engagements — not generic packages pushed through a one-size-fits-all model.",
    county: "Pickens County",
    coordinates: [-82.60694, 34.82333],
    nearbyCities: ["Greenville", "Anderson", "Clemson"],
    focus: [
      "Camera system planning and installation",
      "Infrastructure cleanup and network support",
      "Microsoft 365 administration and cloud projects",
    ],
    relatedServices: ["camera-systems", "microsoft-365", "infrastructure-hardening"],
    faq: [
      {
        question: "What IT services does NextGridIT offer in Easley, SC?",
        answer:
          "NextGridIT provides camera system planning and installation, infrastructure cleanup, network support, Microsoft 365 administration, and IT support for businesses in the Easley and Pickens County area.",
      },
      {
        question: "Can you install security camera systems in Easley?",
        answer:
          "Yes. We plan and install local-first camera systems that don't require cloud subscriptions. Systems are designed to be maintainable by the business owner, with proper NVR setup, storage planning, and network segmentation.",
      },
      {
        question: "Do you help with Microsoft 365 setup and cleanup in Easley?",
        answer:
          "Yes. Many Easley-area businesses set up Microsoft 365 quickly and never properly configured it. We help with tenant cleanup, identity management, email security, and making sure the environment is properly administered.",
      },
      {
        question: "What types of businesses do you work with in Pickens County?",
        answer:
          "We work with small businesses, retail, medical offices, construction companies, and multi-site properties throughout Pickens County. Our focus is on organizations that need practical IT support without enterprise pricing.",
      },
    ],
  },
  {
    slug: "greenville-sc",
    city: "Greenville",
    title: "Business IT, Security Assessments, and Network Services in Greenville, SC",
    summary:
      "Business IT support, HIPAA assessments, Microsoft 365, vulnerability assessments, and network services for Greenville, South Carolina.",
    description:
      "Greenville is the economic center of Upstate South Carolina, and its businesses need technically strong IT partners who understand compliance, security, and infrastructure — not just helpdesk ticketing. NextGridIT works with Greenville-area businesses on HIPAA security assessments, Microsoft 365 migrations and cleanup, vulnerability assessments, and network design. Greenville also serves as a hub for organizations across the region that need a security assessment or MSP transition but don't have local expertise in-house.",
    county: "Greenville County",
    coordinates: [-82.3940104, 34.8526176],
    nearbyCities: ["Easley", "Anderson", "Clemson"],
    focus: [
      "HIPAA security assessments for healthcare practices",
      "Microsoft 365 migration and administration",
      "Vulnerability assessments and penetration testing",
    ],
    relatedServices: [
      "hipaa-security-assessment",
      "microsoft-365",
      "vulnerability-assessment",
      "security-audits-pentesting",
    ],
    faq: [
      {
        question: "What IT and security services does NextGridIT offer in Greenville, SC?",
        answer:
          "NextGridIT provides HIPAA security assessments, Microsoft 365 migrations, vulnerability assessments, penetration testing, network design, and MSP transition services for Greenville-area businesses.",
      },
      {
        question: "Can you perform a HIPAA security assessment for my Greenville medical practice?",
        answer:
          "Yes. We perform HIPAA security assessments for healthcare practices throughout Greenville County. Our assessments include risk analysis, policy gap identification, remediation planning, and compliance documentation aligned with NIST 800-53 and MARS-E frameworks.",
      },
      {
        question: "Do you offer penetration testing in Greenville, SC?",
        answer:
          "Yes. We provide penetration testing and vulnerability assessments for Greenville businesses. Our lead consultant has 100+ certifications and active bug bounty experience with Microsoft MSRC and HackerOne, bringing real-world security research depth to every engagement.",
      },
      {
        question: "Can you help my Greenville business transition away from an MSP?",
        answer:
          "Yes. MSP transition is one of our core services. We help Greenville businesses evaluate their current MSP relationship, plan the transition, manage the credential and access handoff, and establish independent IT operations.",
      },
    ],
  },
];

export const technologyCatalog: TechnologyEntry[] = [
  {
    slug: "microsoft-365",
    name: "Microsoft 365",
    category: "Cloud and Identity",
    summary: "Tenant administration, collaboration tooling, email, identity cleanup, and day-to-day cloud support.",
    relatedServices: ["microsoft-365", "infrastructure-hardening", "hipaa-security-assessment"],
    relatedIndustries: ["medical-offices", "small-business", "multi-site-properties"],
  },
  {
    slug: "entra-id",
    name: "Entra ID",
    category: "Cloud and Identity",
    summary: "Identity, MFA, role cleanup, conditional access planning, and administration standards.",
    relatedServices: ["microsoft-365", "infrastructure-hardening"],
    relatedIndustries: ["medical-offices", "small-business", "municipalities"],
  },
  {
    slug: "azure",
    name: "Azure",
    category: "Cloud and Identity",
    summary: "Azure-connected workloads, identity integration, migration planning, and administration support.",
    relatedServices: ["microsoft-365", "infrastructure-hardening"],
    relatedIndustries: ["medical-offices", "small-business", "multi-site-properties"],
  },
  {
    slug: "aws",
    name: "AWS",
    category: "Cloud and Identity",
    summary: "Practical support for AWS workloads that are part of the broader client operating environment.",
    relatedServices: ["microsoft-365", "infrastructure-hardening"],
    relatedIndustries: ["small-business", "multi-site-properties"],
  },
  {
    slug: "google-workspace",
    name: "Google Workspace",
    category: "Cloud and Identity",
    summary: "Email, collaboration, and account administration in mixed-platform environments.",
    relatedServices: ["microsoft-365", "infrastructure-hardening"],
    relatedIndustries: ["small-business", "campgrounds"],
  },
  {
    slug: "apple-environments",
    name: "Apple Environments",
    category: "Infrastructure",
    summary: "Support for Apple devices and mixed-platform environments where local administration still matters.",
    relatedServices: ["microsoft-365", "infrastructure-hardening"],
    relatedIndustries: ["small-business", "medical-offices"],
  },
  {
    slug: "windows-server",
    name: "Windows Server",
    category: "Infrastructure",
    summary: "Support for legacy and active Windows Server environments, cleanup, modernization, and role review.",
    relatedServices: ["infrastructure-hardening", "msp-transition"],
    relatedIndustries: ["small-business", "medical-offices", "municipalities"],
  },
  {
    slug: "active-directory",
    name: "Active Directory",
    category: "Infrastructure",
    summary: "Directory cleanup, group policy review, account hygiene, and handoff documentation.",
    relatedServices: ["infrastructure-hardening", "msp-transition", "microsoft-365"],
    relatedIndustries: ["medical-offices", "small-business", "municipalities"],
  },
  {
    slug: "backup-systems",
    name: "Backup Systems",
    category: "Infrastructure",
    summary: "Backup review, retention planning, recovery expectations, and supportability improvements.",
    relatedServices: ["infrastructure-hardening", "msp-transition"],
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
    relatedServices: ["network-wifi", "infrastructure-hardening"],
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
    slug: "tenable-sc",
    name: "Tenable.sc",
    category: "Security and Compliance",
    summary: "Vulnerability scanning, risk-based prioritization, and remediation tracking used in enterprise compliance environments.",
    relatedServices: ["vulnerability-assessment", "hipaa-security-assessment"],
    relatedIndustries: ["medical-offices", "small-business", "municipalities"],
  },
  {
    slug: "nist-800-53",
    name: "NIST 800-53",
    category: "Security and Compliance",
    summary: "Security control assessment and documentation aligned with NIST 800-53 requirements.",
    relatedServices: ["hipaa-security-assessment", "vulnerability-assessment", "infrastructure-hardening"],
    relatedIndustries: ["medical-offices", "municipalities"],
  },
  {
    slug: "hipaa-compliance",
    name: "HIPAA Compliance",
    category: "Security and Compliance",
    summary: "HIPAA Security Rule assessments, documentation, and remediation planning for medical practices.",
    relatedServices: ["hipaa-security-assessment", "infrastructure-hardening"],
    relatedIndustries: ["medical-offices"],
  },
  {
    slug: "firewalls",
    name: "Firewalls",
    category: "Security and Compliance",
    summary: "Policy review, segmentation coordination, ingress and egress cleanup, and practical rule hardening.",
    relatedServices: ["network-wifi", "infrastructure-hardening"],
    relatedIndustries: ["medical-offices", "small-business", "municipalities"],
  },
  {
    slug: "mfa-and-access-controls",
    name: "MFA and Access Controls",
    category: "Security and Compliance",
    summary: "Identity hardening and role cleanup tied to practical administration rather than checkbox theater.",
    relatedServices: ["infrastructure-hardening", "microsoft-365"],
    relatedIndustries: ["medical-offices", "small-business", "municipalities"],
  },
  {
    slug: "documentation-and-standards",
    name: "Documentation and Standards",
    category: "Security and Compliance",
    summary: "Operational documentation, ownership clarity, and cleaner handoff materials for future support.",
    relatedServices: ["infrastructure-hardening", "msp-transition"],
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
    slug: "local-ai-processing",
    name: "Local AI Processing",
    category: "Cameras and Local AI",
    summary: "On-site analysis and local-first processing options for visibility and secure AI workflows where ownership matters.",
    relatedServices: ["camera-systems", "private-ai"],
    relatedIndustries: ["municipalities", "campgrounds", "multi-site-properties"],
  },
];

export const technologies = technologyCatalog.map((technology) => technology.name);

export const faqs = [
  {
    question: "What kinds of organizations does NextGridIT support?",
    answer:
      "NextGridIT supports medical practices, small and mid-sized businesses, municipalities, campgrounds, and multi-site properties across Upstate South Carolina. The common thread is organizations that need technically strong, compliance-aware IT support without enterprise overhead.",
  },
  {
    question: "What geographic areas does NextGridIT serve?",
    answer:
      "NextGridIT is based in Seneca, SC and provides on-site services across Seneca, Clemson, Anderson, Easley, and Greenville. Remote and project-based work is available throughout South Carolina and beyond — including travel when the project requires it.",
  },
  {
    question: "Does NextGridIT provide ongoing support contracts?",
    answer:
      "NextGridIT is built around project-led engagements — MSP transitions, security assessments, vendor lockout recovery, infrastructure hardening, and network deployments. Ongoing support is available where it makes sense, but the goal is to make you self-sufficient, not to keep you on a retainer forever.",
  },
  {
    question: "What compliance frameworks does NextGridIT work with?",
    answer:
      "The technical work is commonly informed by HIPAA, PCI DSS, NIST 800-53, and MARS-E — especially where documentation, identity, segmentation, and operational controls matter. This comes from direct experience in Medicaid compliance operations.",
  },
  {
    question: "Can NextGridIT help with both networks and cameras?",
    answer:
      "Yes. Camera deployments are often planned alongside switching, Wi-Fi, and broader infrastructure work so the systems fit together cleanly.",
  },
  {
    question: "Does NextGridIT offer penetration testing?",
    answer:
      "Yes. NextGridIT provides scoped penetration testing — both black box (external attacker perspective) and trusted-access (internal review) — with remediation help and practical risk review for each finding. Active bug bounty research on Microsoft and HackerOne platforms keeps the methodology current.",
  },
  {
    question: "How do projects usually start?",
    answer:
      "Projects typically start with a conversation about what's not working, a review of the current environment, and a practical plan focused on the most impactful improvements first. No pressure, no hard sell — just an honest assessment of whether NextGridIT is the right fit.",
  },
  {
    question: "What does vendor lockout recovery involve?",
    answer:
      "When an IT provider walks away and takes your credentials with them, NextGridIT recovers access to the systems you legally own. Every engagement starts with signed authorization documentation, then proceeds through system-by-system access recovery, credential resets, and verification that the former provider no longer has access.",
  },
  {
    question: "What kinds of technology platforms does NextGridIT work with?",
    answer:
      "Common environments include Microsoft 365, Entra ID, Azure, Active Directory, Ubiquiti UniFi, IP cameras and NVR systems, Tenable.sc, and various firewall platforms. The focus is on practical, well-supported technology — not trendy solutions that create vendor dependency.",
  },
];

export const caseStudies = [
  {
    slug: "msp-transition",
    title: "MSP Transition for a Growing Business",
    challenge:
      "A company had outgrown its MSP relationship. The provider was handling support but not driving the IT strategy the business needed. Leadership wanted to bring IT in-house but didn't know where to start — and couldn't risk losing access to anything during the transition.",
    approach:
      "NextGridIT audited everything the MSP managed, identified the right type of internal IT hire for the organization's size and needs, and supported the company through the hiring process. During the transition, all systems were documented and verified. When the cutover happened, credentials were reset and the former MSP's access was confirmed revoked across every system.",
    outcomes: [
      "Complete separation from the former MSP with zero access residuals",
      "New internal IT hire supported through onboarding with full documentation",
      "All systems under the organization's own control for the first time",
    ],
  },
  {
    slug: "vendor-lockout-recovery",
    title: "Vendor Lockout Recovery for a Municipality",
    challenge:
      "A city's IT provider walked away after deploying the WiFi and camera infrastructure — and took all the administrative credentials with them. The city owned the equipment but couldn't manage it, update it, or even change a password.",
    approach:
      "NextGridIT required proper authorization documentation signed by the mayor before any recovery work began, establishing a clear legal paper trail. Access was recovered system by system — network equipment, camera systems, and management platforms. New administrative credentials were created, former provider access was revoked, and everything was documented and handed over.",
    outcomes: [
      "Full administrative control returned to the city",
      "Documented authorization trail protecting both the city and NextGridIT",
      "New credential sets and security controls that the city owns going forward",
    ],
  },
  {
    slug: "m365-admin-reset",
    title: "Microsoft 365 Administration Reset After Organic Growth",
    challenge:
      "Accounts, permissions, and administration responsibilities had grown informally over time, creating risk and day-to-day confusion. No one was sure who had access to what, and the tenant had drifted into an unmanageable state.",
    approach:
      "The engagement prioritized tenant review, identity cleanup, safer administration patterns, and documentation that the client could actually use afterward. MFA was enforced, stale accounts were removed, and administrative roles were tightened to the minimum necessary.",
    outcomes: [
      "Cleaner tenant administration with documented ownership",
      "More consistent access control practices with MFA enforced",
      "Reduced operational confusion around identity and change management",
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

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug);
}