class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const currentPage = window.location.pathname.split('/').pop(); // Get the current page filename
        this.innerHTML = `
            <header>
                <div class="inner">
                <h3 class="header">Philosophist</h3>
                <div class="nav nav-header justify-content-center">
                    <a class="nav-link ${currentPage === 'index.html' ? 'active' : ''}" href="index.html">Home</a>
                    <a class="nav-link ${currentPage === 'family.html' ? 'active' : ''}" href="family.html">Family</a>
                    <a class="nav-link ${currentPage === 'tech.html' ? 'active' : ''}" href="tech.html">Tech</a>
                    <a class="nav-link ${currentPage === 'games.html' ? 'active' : ''}" href="games.html">Games</a>
                </div>
                </div>
            </header>
        `;
    }
}

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="inner">
                    <a href="https://github.com/philosophist73" target="_blank" class="fa fa-github"></a>
                    <a href="https://www.facebook.com/profile.php?id=100079738346924" target="_blank" class="fa fa-facebook"></a>
                    <a href="https://twitter.com/phil0s0phist" target="_blank" class="fa fa-twitter"></a>
                    <a href="https://www.linkedin.com/in/williambonnell/" target="_blank" class="fa fa-linkedin"></a>
                    <a href="https://www.youtube.com/@williambonnell3469" target="_blank" class="fa fa-youtube"></a>
                    <a href="https://www.reddit.com/user/philosophist73" target="_blank" class="fa fa-reddit"></a>

                    <p>William Bonnell</p>
                </div>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer);
customElements.define('header-component', Header);
