/* data.js - Edit this file to change your website content */

const cvData = {
    personal: {
        name: "Maciej Kwarciany",
        role: "Senior Business Analyst/ Web Traffic SME",
        heroDescription: ["Business-savvy, data-driven analyst with 6+ years of experience."," Combining strategic thinking with strong technical expertise, with a proven track record of translating complex data and system behavior into measurable revenue growth."],
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
            value: "LinkedIn", 
            link: "https://linkedin.com/in/maciej-kwarciany", 
            icon: "linkedin" 
        },
        { 
            value: "kwarciany.eu", 
            link: "https://kwarciany.eu", 
            icon: "globe" 
        },
        { 
            value: "Kraków, Poland", 
            link: "#", 
            icon: "map-pin" 
        }
    ],

    summary: {
        paragraphs: [
            "Data-driven business professional, blend of strategic thinker and technical expert. Skilled at bridging the gap between strategy and execution in technology-driven environments. Fluent in SQL and data analytics yet comfortable with leading high-impact discussions with senior stakeholders and enterprise-scale clients.",
            "Bringing a holistic approach to problem solving. Acting as a trusted technical advisor, especially in high-stakes, compliance-sensitive environments."
        ],
        businessExpertise: "Understanding of market dynamics, financial models, and corporate strategy. Ability to negotiate and close high-impact contracts, ensuring agreements are profitable and aligned with long-term company objectives.",
        technicalExpertise: "Knowledge of system architecture and data flows enables discussion of solution feasibility, troubleshooting bottlenecks, and ensuring technical builds align with company vision."
    },

    experience: [
         {
            company: "Commerce Media Tech (Zeropark)",
            role: "Senior Business Analyst",
            period: "12.2025 - Present",
            description: [
                "Spearheaded critical infrastructure changes for Key client (40% company revenue) resulting in a sustainable 85% YoY revenue increase.",
                "Technical Lead of Asana, Jira, Slack and Microsoft ecosystems migration, use of in-house methodologies delivered $75k+ operational savings.",
                "Developed number of MVP solutions and automations, now integrated into the core product infrastructure, improving scalability and reducing workload."
            ]
        },
        {
            company: "Commerce Media Tech (Zeropark)",
            role: "Business Analyst/ Key Account Manager",
            period: "05.2025 - 11.2025",
            description: [
                "Diagnosed and corrected misconfigured client integration, reducing data discrepancy by 20pp subsequently driving a 25% revenue uplift over next quarters.",
                "Engineered data-driven margin optimization that boosted profitability by 12% while maintaining competitive pricing.",
                "Architected custom real-time KPI dashboards using SQL and Python to simplify decision-making.",
            ],
        },
        {
            company: "Commerce Media Tech (Zeropark)",
            role: "Technical Key Account Manager",
            period: "06.2023 - 04.2025",
            description: [
                "Architected a proprietary Python matching engine to detect brand-related domain typos increasing inventory monetization by 20%.",
                "Acted as the primary technical liaison between C-suite stakeholders and engineering teams to roadmap high-priority product features.",
                "Managed enterprise-level client relationships, driving revenue growth for high-value accounts.",
                "Negotiated contracts and collaborated with C-level stakeholders to align technical solutions with business goals.",
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
            title: "Revenue Growth via Data Integrity",
            icon: "trending-up",
            description: "Identified and analyzed inconsistencies in web traffic routing from key customer. Rebuilt data flow and tracking logic, resulting in 85% increase in client revenue."
        },
        {
            title: "Linguistic Analysis Tool",
            icon: "cpu",
            description: "Built validation system to cross-reference millions of domain against brand keywords. This automated solution reduced analysis time from days to hours and directly drove inventory monetization increase by ~20%."
        },
        {
            title: "Revenue Optimization",
            icon: "trending-up",
            description: "Diagnosed and corrected misconfigured client integration using third-party server verification, cutting reported discrepancies by 40pp driving a 25% revenue uplift."
        },
        {
            title: "Process Innovation",
            icon: "zap",
            description: "Developed and introduced multiple MVP solutions that were later implemented company-wide, improving internal processes efficiency."
        },
        {
            title: "Volunteer Leadership",
            icon: "users",
            description: "Head Event Coordinator for \"Kraków Mountain Festival\", managing event operations, volunteer workflow, and equipment delivery coordination."
        }
    ],

    skills: {
        dataStack: ["SQL (PostgreSQL, AWS Athena)", "Python (Pandas, NumPy)", "Cloud Computing (VM/EC2)", "API Integrations" ,"Generative AI & LLMs", "Advanced Excel"],
        analytics: ["Google Analytics", "Power BI", "Data Visualization", "Web Traffic Analysis", "Fraud Detection", "Jira", "Asana", "Confluence"],
        business: ["MVP Development","Stakeholder Management", "Contract Negotiation", "Process Automation", "Revenue Optimization"]
    },

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
