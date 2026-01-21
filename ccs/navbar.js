class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(8px);
                    -webkit-backdrop-filter: blur(8px);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }
.nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo {
                    font-weight: 700;
                    font-size: 1.5rem;
                    color: #333;
                    text-decoration: none;
                    letter-spacing: 1px;
                }
.nav-links {
                    display: flex;
                    gap: 2rem;
                }
                .nav-link {
                    color: #555;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 0;
                    position: relative;
                }
                
                .nav-link:hover {
                    color: #333;
                }
                
                .nav-link:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: #333;
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover:after {
                    width: 100%;
                }
.mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                        flex-direction: column;
                        position: absolute;
                        top: 70px;
                        left: 0;
                        right: 0;
                        background-color: white;
                        padding: 2rem;
                        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
                    }
                    
                    .nav-links.active {
                        display: flex;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            
            <nav>
                <div class="nav-container">
                    <a href="/" class="logo">MK</a>
                    
                    <button class="mobile-menu-btn">
                        <i data-feather="menu"></i>
                    </button>
                    
                    <div class="nav-links">
                        <a href="#summary" class="nav-link">
                            <i data-feather="user"></i>
                            <span>Summary</span>
                        </a>
                        <a href="#experience" class="nav-link">
                            <i data-feather="briefcase"></i>
                            <span>Experience</span>
                        </a>
                        <a href="#achievements" class="nav-link">
                            <i data-feather="award"></i>
                            <span>Achievements</span>
                        </a>
                        <a href="#skills" class="nav-link">
                            <i data-feather="code"></i>
                            <span>Skills</span>
                        </a>
                        <a href="#certificates" class="nav-link">
                            <i data-feather="file-text"></i>
                            <span>Certificates</span>
                        </a>
                        <a href="#contact" class="nav-link">
                            <i data-feather="mail"></i>
                            <span>Contact</span>
                        </a>
                        <a href="https://github.com/Kvarc13/Kwarciany.eu.git" class="nav-link" download="Maciej_Kwarciany_CV.pdf">
                            <i data-feather="download"></i>
                            <span>Download CV</span>
                        </a>
</div>
                </div>
            </nav>
        `;
        
        // Mobile menu toggle
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            feather.replace();
        });
        
        // Close mobile menu when clicking a link
        this.shadowRoot.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);
