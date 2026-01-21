/* script.js - Handles rendering of the CV data */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. HERO SECTION ---
    if (document.getElementById('hero-name')) {
        document.getElementById('hero-name').textContent = cvData.personal.name;
        document.getElementById('hero-role').textContent = cvData.personal.role;
        document.getElementById('hero-desc').textContent = cvData.personal.heroDescription;
        
        const img = document.getElementById('hero-img');
        if (img) img.src = cvData.personal.profileImage;

        // Hero Buttons
        const heroBtns = document.getElementById('hero-buttons');
        if (heroBtns) {
            heroBtns.innerHTML = `
                <a href="mailto:${cvData.personal.email}" class="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center gap-2">
                    <i data-feather="mail"></i> Contact Me
                </a>
                <a href="${cvData.personal.cvPdfUrl}" target="_blank" class="px-6 py-3 bg-white text-primary-600 border border-primary-200 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <i data-feather="download"></i> Download CV
                </a>
            `;
        }
    }

    // --- 2. SUMMARY SECTION ---
    const summaryContainer = document.getElementById('summary-text');
    if (summaryContainer && cvData.summary.paragraphs) {
        summaryContainer.innerHTML = cvData.summary.paragraphs
            .map(p => `<p class="mb-4 text-secondary-700">${p}</p>`)
            .join('');
    }
    
    if (document.getElementById('summary-business')) {
        document.getElementById('summary-business').textContent = cvData.summary.businessExpertise;
    }
    if (document.getElementById('summary-tech')) {
        document.getElementById('summary-tech').textContent = cvData.summary.technicalExpertise;
    }

    // --- 3. EXPERIENCE SECTION ---
    const expList = document.getElementById('experience-list');
    if (expList && cvData.experience) {
        expList.innerHTML = cvData.experience.map(job => `
            <div class="relative pl-8 border-l-2 border-primary-200 pb-8 last:pb-0">
                <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-white shadow-sm"></div>
                <div class="bg-white p-6 rounded-lg shadow-sm border border-secondary-100">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900">${job.role}</h3>
                            <div class="text-primary-600 font-medium">${job.company}</div>
                        </div>
                        <span class="inline-block mt-2 md:mt-0 px-3 py-1 bg-secondary-100 text-secondary-600 text-sm rounded-full font-medium">
                            ${job.period}
                        </span>
                    </div>
                    <ul class="space-y-2">
                        ${job.description.map(desc => {
                            // Bold formatting helper
                            const formattedDesc = desc.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>');
                            return `<li class="flex items-start gap-3 text-secondary-600">
                                <i data-feather="check" class="w-5 h-5 text-primary-500 mt-0.5 shrink-0"></i>
                                <span>${formattedDesc}</span>
                            </li>`;
                        }).join('')}
                    </ul>
                </div>
            </div>
        `).join('');
    }

    // --- 4. SKILLS SECTION (New Tag Logic) ---
    const renderSkills = (skills, elementId) => {
        const container = document.getElementById(elementId);
        if (container && skills) {
            container.innerHTML = skills.map(skill => `
                <span class="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium border border-primary-100">
                    ${skill}
                </span>
            `).join('');
        }
    };

    // Note: Matches the new IDs in index.html: 'skills-tech-tags' and 'skills-analytical-tags'
    renderSkills(cvData.skills.technical, 'skills-tech-tags');
    renderSkills(cvData.skills.analytical, 'skills-analytical-tags');

    // --- 5. CERTIFICATES SECTION ---
    const certList = document.getElementById('certificates-list');
    if (certList && cvData.certificates) {
        certList.innerHTML = cvData.certificates.map(cert => `
            <div class="p-4 border border-secondary-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all group">
                <div class="flex items-start gap-3">
                    <i data-feather="award" class="text-primary-400 group-hover:text-primary-600 transition-colors"></i>
                    <div>
                        <h4 class="font-semibold text-gray-900 text-sm mb-1">${cert.name}</h4>
                        <p class="text-xs text-secondary-500 font-medium uppercase tracking-wide">${cert.issuer}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // --- 6. CONTACT & INTERESTS ---
    const contactList = document.getElementById('contact-list');
    if (contactList) {
        contactList.innerHTML = `
            <li><a href="mailto:${cvData.personal.email}" class="flex items-center gap-3 text-secondary-600 hover:text-primary-600 transition-colors"><i data-feather="mail" class="w-5 h-5"></i> ${cvData.personal.email}</a></li>
            <li><a href="tel:${cvData.personal.phone.replace(/\s/g, '')}" class="flex items-center gap-3 text-secondary-600 hover:text-primary-600 transition-colors"><i data-feather="phone" class="w-5 h-5"></i> ${cvData.personal.phone}</a></li>
            <li><a href="${cvData.personal.linkedin}" target="_blank" class="flex items-center gap-3 text-secondary-600 hover:text-primary-600 transition-colors"><i data-feather="linkedin" class="w-5 h-5"></i> LinkedIn Profile</a></li>
        `;
    }

    const interestsGrid = document.getElementById('interests-grid');
    if (interestsGrid && cvData.interests) {
        interestsGrid.innerHTML = cvData.interests.map(interest => `
            <div class="flex flex-col items-center justify-center p-4 bg-secondary-50 rounded-lg text-center hover:bg-primary-50 transition-colors">
                <span class="text-sm font-medium text-secondary-700">${interest.name}</span>
            </div>
        `).join('');
    }

    // --- 7. INITIALIZE ICONS ---
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});
