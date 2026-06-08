const navItems = [
    { href: "index.html", label: "Home" },
    { href: "beliefs.html", label: "Beliefs" },
    { href: "degree-distinctives.html", label: "Education" },
    { href: "resume.html", label: "Resume" },
    { href: "christian-ministry.html", label: "Ministry" },
    { href: "communication.html", label: "Communication" },
    { href: "cultural-engagement.html", label: "Culture" },
    { href: "resources.html", label: "Resources" },
];

const currentPath = window.location.pathname;
const currentPage = currentPath.split("/").pop() || "index.html";
const decodedPath = decodeURIComponent(currentPath);
const basePath = decodedPath.includes("/daniel study/") || decodedPath.includes("/genesis study/") ? "../" : "";
const headerTarget = document.querySelector("[data-site-header]");

if (headerTarget) {
        const navLinks = navItems
            .map(({ href, label }) => {
                const activeClass = href === currentPage ? ' class="active" aria-current="page"' : "";
                return `<a href="${basePath}${href}"${activeClass}>${label}</a>`;
            })
            .join("");

        const navHtml = `
            <a class="logo" href="${basePath}index.html">Ben Huser</a>
            <nav aria-label="Primary navigation">
                ${navLinks}
            </nav>
        `;

        // Inject into the nearest <header> if present so header CSS applies.
        // If there is no <header> ancestor (some pages use a plain div placeholder),
        // replace the placeholder with a real <header> so the header CSS targets it.
        const headerAncestor = headerTarget.closest("header");
        if (headerAncestor) {
            headerAncestor.innerHTML = navHtml;
        } else {
            headerTarget.outerHTML = `<header>${navHtml}</header>`;
        }
}