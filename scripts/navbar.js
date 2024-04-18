// Highlight the active page in the navigation bar
const navbarLinks = document.querySelectorAll('.navbar li a');
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        navbarLinks.forEach(l => l.classList.remove('active'));
        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});