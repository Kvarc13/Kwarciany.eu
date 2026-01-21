/* data.js */

const cvData = {
    personal: {
        name: "Maciej Kwarciany",
        role: "Technical Key Account Manager & Data Analyst",
        heroDescription: "Data-driven professional bridging the gap between commercial strategy and technical execution. Expert in utilizing Python and SQL to uncover revenue opportunities and optimize workflows in high-stakes environments.",
        cvPdfUrl: "/assets/Maciej_Kwarciany_CV.pdf",
        email: "Maciej.Kwarciany@gmail.com",
        phone: "+48 600 972 749",
        linkedin: "https://linkedin.com/in/maciej-kwarciany",
        profileImage: "/assets/profile.jpg"
    },
    summary: {
        paragraphs: [
            "Technical Key Account Manager and Data Analyst with a proven track record of bridging the gap between strategy and execution. I combine commercial acumen with hard technical skills (Python, SQL) to drive revenue and efficiency.",
            "Experienced in negotiating enterprise-level contracts while simultaneously building custom technical solutions to automate compliance and operational workflows."
        ],
        businessExpertise: "Market dynamics analysis, financial modeling, and corporate strategy. Skilled in negotiating and closing high-impact contracts that align with long-term company objectives.",
        technicalExpertise: "System architecture and data flow optimization. Ability to assess solution feasibility, troubleshoot technical bottlenecks, and translate business needs into technical requirements."
    },
    experience: [
        {
            company: "Commerce Media Tech (Zeropark)",
            role: "Technical Key Account Manager",
            period: "06.2023 - Present",
            description: [
                "**Engineered a typo-squatting detection tool** using Python (Levenshtein distance algorithm), identifying undervalued inventory and boosting monetization by ~40%.",
                "**Spearheaded critical data infrastructure migration** for a top-tier client, resolving routing inefficiencies and driving an 85% YoY revenue increase.",
                "Developed custom **SQL & Tableau dashboards** to visualize real-time KPIs, enabling C-level clients to optimize budget allocation instantly.",
                "Manage enterprise-level client relationships, negotiating contracts and aligning technical solutions with business goals.",
                "Partner with cross-functional teams to implement AI-driven tools for web traffic optimization."
            ]
        },
        {
            company: "Commerce Media Tech (Zeropark)",
            role: "Account Manager / Senior Account Manager",
            period: "06.2020 - 05.2023",
            description: [
                "Acted as the primary bridge between commercial clients and engineering teams, translating complex business needs into actionable technical roadmaps.",
                "**Maintained 95% client retention rate** during a period of rapid portfolio expansion.",
                "Collaborated with Product teams to prioritize and roadmap high-impact client features.",
                "Grew portfolio revenue by identifying upsell opportunities through data analysis."
            ]
        },
        {
            company: "Commerce Media Tech (Zeropark)",
            role: "Content Quality Specialist",
            period: "05.2019 - 04.2020",
            description: [
                "Conducted in-depth audits of ad traffic quality across publisher networks, manually implementing fraud detection measures.",
                "Developed internal guidelines for traffic filtering and content approval, which were later adopted as the company-wide standard."
            ]
        }
    ],
    // Achievements section merged into Experience for better context
    achievements: [], 
    skills: {
        // Changed to simple lists to avoid arbitrary "66/10" ratings
        technical: [
            "Python (Pandas, NumPy)",
            "SQL (PostgreSQL)",
            "AWS Athena",
            "Advanced Excel (VBA/Macros)",
            "System Architecture"
        ],
        analytical: [
            "Web Traffic Analysis",
            "Data Auditing & Fraud Detection",
            "Google Analytics",
            "Cloud Computing",
            "Tableau / Data Viz"
        ]
    },
    certificates: [
        { name: "Python for Data Science, AI & Development", issuer: "IBM | 2025" },
        { name: "Data Analysis with Python", issuer: "IBM | 2025" },
        { name: "Databases and SQL for Data Science", issuer: "IBM | 2025" },
        { name: "Generative AI Agents with Vertex AI", issuer: "Google Cloud | 2025" },
        { name: "Open Source Intelligence (OSINT)", issuer: "Niebezpiecznik.pl | 2021" }
    ],
    interests: [
        { name: "Brewing", img: "Brewing.png" },
        { name: "Diving", img: "Diving.png" },
        { name: "Mountains", img: "Mountains.png" },
        { name: "Travel", img: "Travel.png" },
        { name: "Sailing", img: "Sailing.png" },
        { name: "Climbing", img: "Climbing.png" }
    ]
};
