class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #333;
                    color: white;
                    padding: 4rem 2rem;
                    text-align: center;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }
.footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .footer-logo {
                    font-size: 1.75rem;
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                    color: white;
                    letter-spacing: 1px;
                    font-family: 'Playfair Display', serif;
                }
.footer-links {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    margin-bottom: 2rem;
                    flex-wrap: wrap;
                }
                .footer-link {
                    color: rgba(255,255,255,0.7);
                    text-decoration: none;
                    transition: all 0.3s ease;
                    position: relative;
                    padding: 0.25rem 0;
                }
                
                .footer-link:hover {
                    color: white;
                }
                
                .footer-link:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: white;
                    transition: width 0.3s ease;
                }
                
                .footer-link:hover:after {
                    width: 100%;
                }
.social-links {
                    display: flex;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                .social-link {
                    color: white;
                    background-color: rgba(255,255,255,0.1);
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
                }
                
                .social-link:hover {
                    background-color: white;
                    color: #333;
                    transform: translateY(-5px) scale(1.1);
                }
                .copyright {
                    color: rgba(255,255,255,0.5);
                    font-size: 0.875rem;
                    letter-spacing: 0.5px;
                }
</style>
            
            <footer>
                <div class="footer-content">
                    <div class="footer-logo">Maciej Kwarciany</div>
                    
                    <div class="footer-links">
                        <a href="#summary" class="footer-link">Summary</a>
                        <a href="#experience" class="footer-link">Experience</a>
                        <a href="#achievements" class="footer-link">Achievements</a>
                        <a href="#skills" class="footer-link">Skills</a>
                        <a href="#certificates" class="footer-link">Certificates</a>
<a href="#contact" class="footer-link">Contact</a>
<a href="https://github.com/Kvarc13/Kwarciany.eu.git" class="footer-link" download="Maciej_Kwarciany_CV.pdf">Download CV</a>
</div>
                    
                    <div class="social-links">
                        <a href="https://linkedin.com/in/maciej-kwarciany" target="_blank" class="social-link">
                            <i data-feather="linkedin"></i>
                        </a>
                        <a href="mailto:Maciej.Kwarciany@gmail.com" class="social-link">
                            <i data-feather="mail"></i>
                        </a>
                        <a href="tel:+48600972749" class="social-link">
                            <i data-feather="phone"></i>
                        </a>
                    </div>
                    
                    <p class="copyright">© ${new Date().getFullYear()} Maciej Kwarciany. All rights reserved.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
