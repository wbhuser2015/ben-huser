const navItems = [
    { href: "index.html", label: "Home" },
    { href: "christian-ministry.html", label: "Ministry" },
    { href: "communication.html", label: "Communication" },
    { href: "cultural-engagement.html", label: "Culture" },
    { href: "degree-distinctives.html", label: "Degree" },
    { href: "beliefs.html", label: "Beliefs" },
    { href: "resume.html", label: "Resume" }
];

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const headerTarget = document.querySelector("[data-site-header]");

if (headerTarget) {
    const navLinks = navItems
        .map(({ href, label }) => {
            const activeClass = href === currentPage ? ' class="active" aria-current="page"' : "";
            return `<a href="${href}"${activeClass}>${label}</a>`;
        })
        .join("");

    headerTarget.innerHTML = `
        <header>
            <a class="logo" href="index.html">Ben Huser</a>
            <nav aria-label="Primary navigation">
                ${navLinks}
            </nav>
        </header>
    `;
}
