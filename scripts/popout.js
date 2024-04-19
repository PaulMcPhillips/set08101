/* Get all images */
const thumbnails = document.querySelectorAll('.imgitem img');
/* Get the modal */
const modal = document.getElementById('myModal');
/* Get the image for the modal */
const modalImage = document.getElementById('modalImage');

/* For each image add an event listener */
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', (e) => {
        /* Prevent the href call from opening the image in a new page */
        e.preventDefault();
        /* Display the modal */
        modal.style.display = 'block';
        modalImage.src = thumb.parentNode.href;
    });
});

/* Hide the modal by changing its display back to none */
function closeModal() {
    modal.style.display = 'none';
}