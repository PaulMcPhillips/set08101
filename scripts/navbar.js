/* Get the navbar item that's been selected */
const navbarLinks = document.querySelectorAll('.navbar li a');
/* For each item in the list add en event listener */
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        /* Remove 'active' class from all links */
        navbarLinks.forEach(l => l.classList.remove('active'));
        /* Add 'active' class to the clicked link */
        link.classList.add('active');
    });
});