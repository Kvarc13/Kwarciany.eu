/* script.js */

document.addEventListener('DOMContentLoaded', function() {
    renderContent();
    
    // Initialize Feather icons after content is loaded
    feather.replace();
    
    // Intersection Observer for animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));

    // Smooth scroll offset logic
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });
});

function renderContent() {
    // 1. Hero
    document.getElementById('hero-img').src = cvData.personal.profileImage;
    document.getElementById('hero-name').textContent = cvData.personal.name;
    document.getElementById('hero-role').textContent = cvData.personal.role;
    document.getElementById('hero-desc').textContent = cvData.personal.heroDescription;
    
    const heroBtns = document.getElementById('hero-buttons');
    heroBtns.innerHTML = `
        <a href="#contact" class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
            <i data-feather="mail"></i> Contact Me
        </a>
        <a href="#experience" class="border border-primary-500 text-primary-500 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
            <i data-feather="briefcase"></i> My Experience
        </a>
        <a href="${cvData.personal.cvPdfUrl}" target="_blank" class="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
            <i data-feather="download"></i> Download CV
        </a>
    `;

    // 2. Summary
    const summaryDiv = document.getElementById('summary-text');
    cvData.summary.paragraphs.forEach(p => {
        const pTag = document.createElement('p');
        pTag.className = "mb-4";
        pTag.textContent = p;
        summaryDiv.appendChild(pTag);
    });
    document.getElementById('summary-business').textContent = cvData.summary.businessExpertise;
    document.getElementById('summary-tech').textContent = cvData.summary.technicalExpertise;

    // 3. Experience
    const expList = document.getElementById('experience-list');
    cvData.experience.forEach(job => {
        const html = `
            <div class="bg-white rounded-xl shadow-md overflow-hidden">
                <div class="p-6">
                    <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                            <h3 class="text-2xl font-bold text-primary-700">${job.company}</h3>
                            <p class="text-secondary-600">${job.role}</p>
                        </div>
                        <div class="mt-2 md:mt-0">
                            <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">${job.period}</span>
                        </div>
                    </div>
                    <ul class="space-y-2 list-disc pl-5">
                        ${job.description.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        expList.insertAdjacentHTML('beforeend', html);
    });

    // 4. Achievements
    const achList = document.getElementById('achievements-list');
    cvData.achievements.forEach(ach => {
        const html = `
            <div class="bg-white rounded-xl shadow-md p-6">
                <div class="flex items-start gap-4">
                    <div class="bg-primary-100 p-3 rounded-full">
                        <i data-feather="${ach.icon}" class="text-primary-600"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold mb-2">${ach.title}</h3>
                        <p>${ach.description}</p>
                    </div>
                </div>
            </div>
        `;
        achList.insertAdjacentHTML('beforeend', html);
    });

    // 5. Skills
    const renderSkill = (skill) => `
        <div>
            <div class="flex justify-between mb-1">
                <span class="text-secondary-700">${skill.name}</span>
                <span class="text-primary-600">${skill.level}/10</span>
            </div>
            <div class="w-full bg-secondary-200 rounded-full h-2.5">
                <div class="bg-primary-500 h-2.5 rounded-full" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `;
    
    document.getElementById('skills-tech').innerHTML = cvData.skills.technical.map(renderSkill).join('');
    document.getElementById('skills-analytical').innerHTML = cvData.skills.analytical.map(renderSkill).join('');

    // 6. Certificates
    const certList = document.getElementById('certificates-list');
    cvData.certificates.forEach(cert => {
        const html = `
            <div class="border border-secondary-200 rounded-lg p-4">
                <h3 class="text-lg font-semibold mb-2">${cert.name}</h3>
                <p class="text-secondary-600 mb-2">${cert.issuer}</p>
            </div>
        `;
        certList.insertAdjacentHTML('beforeend', html);
    });

    // 7. Contact Info
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = `
        <li class="flex items-center gap-3">
            <i data-feather="mail" class="text-primary-500"></i>
            <a href="mailto:${cvData.personal.email}" class="hover:text-primary-500 transition-colors">${cvData.personal.email}</a>
        </li>
        <li class="flex items-center gap-3">
            <i data-feather="phone" class="text-primary-500"></i>
            <a href="tel:${cvData.personal.phone.replace(/\s/g, '')}" class="hover:text-primary-500 transition-colors">${cvData.personal.phone}</a>
        </li>
        <li class="flex items-center gap-3">
            <i data-feather="linkedin" class="text-primary-500"></i>
            <a href="${cvData.personal.linkedin}" target="_blank" class="hover:text-primary-500 transition-colors">LinkedIn Profile</a>
        </li>
    `;

    // 8. Interests
    const intGrid = document.getElementById('interests-grid');
    const baseUrl = "https://huggingface.co/spaces/MaciejKW/data-alchemist-cv-portal/resolve/main/images/";
    
    cvData.interests.forEach(int => {
        const html = `
            <div class="flex flex-col items-center">
                <div class="interest-icon bg-primary-100 p-3 rounded-full mb-2">
                    <img src="${baseUrl}${int.img}" alt="${int.name}" class="w-6 h-6">
                </div>
                <span class="text-sm text-center">${int.name}</span>
            </div>
        `;
        intGrid.insertAdjacentHTML('beforeend', html);
    });
}
