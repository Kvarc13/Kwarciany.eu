/* data.js - Edit this file to change your website content */
/* Wersja PRINT dopasowana pod: Senior Growth Analyst – Spark (Readdle) */

const cvData = {
    personal: {
        name: "Maciej Kwarciany",
        role: "Senior Data & Growth Analyst/ Web Traffic SME",
        heroDescription: ["Business-savvy, data-driven analyst with 6+ years of experience.", " Combining strategic thinking with strong technical expertise, with a proven track record of translating complex data and user behavior into measurable revenue growth. Building production-grade, self-serve analytics solutions end-to-end."],
        cvPdfUrl: "/assets/Maciej_Kwarciany_CV.pdf",
        profileImage: "/assets/profile.jpg",
    },

    contact: [
        { 
            value: "Maciej.Kwarciany@gmail.com", 
            link: "mailto:Maciej.Kwarciany@gmail.com", 
            icon: "mail" 
        },
        { 
            value: "+48 600 972 749", 
            link: "tel:+48600972749", 
            icon: "phone" 
        },
        { 
            value: "linkedin.com/in/maciej-kwarciany", 
            link: "https://linkedin.com/in/maciej-kwarciany", 
            icon: "linkedin" 
        },
        { 
            value: "kwarciany.eu", 
            link: "https://kwarciany.eu", 
            icon: "globe" 
        },
        { 
            value: "github.com/Kvarc13", 
            link: "https://github.com/Kvarc13", 
            icon: "github" 
        },
        { 
            value: "Kraków, Poland", 
            link: "#", 
            icon: "map-pin" 
        }
    ],

    summary: {
        paragraphs: [
            "Data-driven business professional, blend of strategic thinker and technical expert. Skilled at turning raw data into a reliable source of truth for revenue and growth decisions. Fluent in SQL and data analytics yet comfortable with leading high-impact discussions with senior stakeholders and enterprise-scale clients.",
            "Bringing a holistic approach to problem solving. Acting as a trusted analytical partner to product, marketing and engineering teams — proactively surfacing insights and opportunities, and shipping the self-serve tools that make them measurable."
        ],
        businessExpertise: "Understanding of market dynamics, monetization models, and corporate strategy. Proven ability to identify growth opportunities in data and turn them into initiatives with measurable revenue impact.",
        technicalExpertise: "Hands-on experience with data pipelines, cloud warehouses and event-level web traffic enables me to design measurement systems, ensure data integrity across tools, and validate the impact of initiatives end-to-end."
    },

    experience: [
         {
            company: "Commerce Media Tech (Zeropark)",
            role: "Senior Business Analyst",
            period: "12.2025 - Present",
            description: [
                "Architected a production-grade Claude LLM assisted self-serve analytics platform on AWS serverless (Lambda, MCP, DuckDB) — enabling non-technical stakeholders run complex analysis using natural language, cutting time-to-insight from days to minutes.",
                "Democratised data access across the organisation with a company-wide BI pipeline platform (Lambda, EventBridge, DuckDB) that replaced manual, multi-step report assembly with fully automated — covering every data source (Redshift, PostgreSQL, external APIs, SharePoint); new reports ship in hours not days. User no longer need to know Python or AWS infrastructure, just SQL.",
                "Scaled an LLM-powered brand-intelligence engine that turns mistyped-domain traffic into ready-to-launch advertiser offers — expanding coverage from ~10 manually researched brands to thousands (14.8M inventory domains scanned in minutes)",
                "Spearheaded critical infrastructure changes for Key client (40% company revenue) resulting in a sustainable 85% YoY revenue uplift.",
                "Technical Lead of Asana, Jira, Slack ecosystems migration. Migration ran fully in-house provided $25k+ operational savings."
            ]
        },
        {
            company: "Commerce Media Tech (Zeropark)",
            role: "Business Analyst/ Key Account Manager",
            period: "05.2025 - 11.2025",
            description: [
                "Diagnosed and corrected misconfigured client integration, reducing data discrepancy by 20pp subsequently driving a 25% revenue uplift over next quarters.",
                "Engineered data-driven pricing and margin optimization that boosted profitability by 12% while maintaining competitive positioning.",
                "Architected self-serve, real-time KPI dashboards using SQL and Python, enabling stakeholders to answer key questions without analyst involvement.",
            ],
        },
        {
            company: "Commerce Media Tech (Zeropark)",
            role: "Technical Key Account Manager",
            period: "06.2023 - 04.2025",
            description: [
                "Planned and implemented a proprietary Python matching engine to detect brand-related domain typos, increasing inventory monetization by 20%.",
                "Analyzed user acquisition funnels and traffic quality across sources, surfacing insights that shaped client bidding and budget strategy.",
                "Acted as the primary technical liaison between C-suite stakeholders and engineering teams to roadmap high-priority product features.",
                "Built custom analytics dashboards to track KPIs, enabling clients to scale budgets with real-time decision-making insights.",
            ]
        },
        {
            company: "Codewise Sp. z o.o.",
            role: "Account Manager / Senior Account Manager",
            period: "06.2020 - 05.2023",
            description: [
                "Acted as a bridge between clients and engineering teams, translating business needs into tech requirements.",
                "Collaborated with Product teams to roadmap client-requested features."
            ]
        },
        {
            company: "Codewise Sp. z o.o.",
            role: "Content Quality Specialist",
            period: "05.2019 - 04.2020",
            description: [
                "Conducted in-depth audits of ad traffic quality across publisher networks, implementing fraud detection measures.",
                "Developed internal guidelines for traffic filtering and content approval later adopted as a company-wide standard."
            ]
        }
    ],

    achievements: [
        {
            title: "Self-Serve Analytics Platform",
            icon: "message-circle",
            description: "Built a conversational reporting platform (Claude + MCP) on fully serverless AWS — OAuth-secured, with read-only SQL over an S3 data lake and one-click CSV exports. Established a source of truth stakeholders query themselves, cutting time-to-insight from days to minutes."
        },
        {
            title: "Revenue Growth via Data Integrity",
            icon: "trending-up",
            description: "Identified and analyzed inconsistencies in web traffic routing from key customer. Rebuilt data flow and tracking logic, resulting in 85% increase in client revenue."
        },
        {
            title: "Revenue Optimization via Client Integration Fixes",
            icon: "check-circle",
            description: "Diagnosed and corrected misconfigured client integration using third-party server verification, cutting reported discrepancies by 40pp driving a 25% revenue uplift."
        },
        {
            title: "Brand Intelligence Engine",
            icon: "cpu",
            description: "Built a brand intelligence pipeline: 3-step web crawler (Playwright + AWS Athena/Common Crawl + Wayback Machine) with LLM-based keyword enrichment, gated by human-labeled precision evalslution. Replaced manual research capped at ~100 brands that now runs across thousands with minimal human oversight."
        },
        {
            title: "Zero-Maintenance BI Pipelines",
            icon: "layers",
            description: "Replaced per-report scripts with one shared pipeline engine where each report is a single YAML config. New reports ship in hours not days. Lowered technical overhead to prepare new reports to minimal levels AWS infra & python are no longer required Simple SQL is sufficient."
        },
        {
            title: "Volunteer Leadership",
            icon: "users",
            description: "Head Event Coordinator for \"Kraków Mountain Festival\", managing event operations, volunteer workflow, and equipment delivery coordination."
        }
    ],

    skills: {
        analytics: [
            "SQL (PostgreSQL, Redshift, AWS Athena, DuckDB)",
            "BI & dashboards (Power BI, Google Analytics)",
            "Self-serve reporting & source-of-truth metric design",
            "Python (Pandas, NumPy)",
            "Funnel, cohort & retention analytics (churn modeling)",
            "Data QA & integrity validation (discrepancy audits, eval sets)",
            "Web Traffic Analysis (source validation, fraud detection)",
            "Marketing & attribution analytics (ad-tech: RTB, traffic quality)",
            "Advanced Excel (Power Query, pivot tables, nested formulas)",
        ],

        dataStack: [
            "Cloud data warehouses & lakes (Redshift, Athena, S3)",
            "AWS Serverless (Lambda, API Gateway, EventBridge)",
            "Infrastructure as Code (AWS SAM, CloudFormation)",
            "API Integrations (REST APIs & Webhooks)",
            "Web Scraping (Playwright, BeautifulSoup, Common Crawl)",
            "AI-augmented analytics & LLM-powered enrichment pipelines",
            "LLM agent design (Anthropic Claude SDK)",
            "Automated testing & data quality gates (pytest)",
        ],

        business: [
            "Monetization & pricing optimization",
            "Revenue optimization & data-driven decision making",
            "Technical ↔ Business Translation",
            "Strategic thought partnership with Product & Marketing",
            "Enterprise account ownership",
            "Cross-functional tooling (Jira, Asana, Confluence, Slack)",
            "Workflow & Process Automation",
        ]
    },

education: [
        {
            degree: "MA, Marketing and Market Communication; Product Management",
            school: "Cracow University of Economics",
            period: "2014 - 2016"
        },
        {
            degree: "BA, English Philology; English in Business Administration",
            school: "Andrzej Frycz Modrzewski Krakow University",
            period: "2011 - 2014"
        }
    ],

    certificates: [
        { name: "Python for Data Science, AI & Development", issuer: "IBM | Oct 2025" },
        { name: "Data Analysis with Python", issuer: "IBM | Sep 2025" },
        { name: "Databases and SQL for Data Science", issuer: "IBM | Aug 2025" },
        { name: "Generative AI Agents with Vertex AI", issuer: "Google Cloud | Feb 2025" },
        { name: "ChatGPT & Zapier: Agentic AI", issuer: "Vanderbilt University | Feb 2025" },
        { name: "Open Source Intelligence (OSINT)", issuer: "Niebezpiecznik.pl | Jun 2021" }
    ],

    interests: [
        { name: "Scuba-Diving", img: "assets/Diving.png" },
        { name: "Mountains", img: "assets/Mountains.png" },
        { name: "Cooking", img: "assets/Cooking.png" },
        { name: "Sailing", img: "assets/Sailing.png" },
        { name: "Climbing", img: "assets/Climbing.png" },
        { name: "Reading", img: "assets/Reading.png" },
        { name: "Cinema", img: "assets/Cinema.png" }
    ]
};
