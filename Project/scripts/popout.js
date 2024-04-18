const thumbnails = document.querySelectorAll('.imgitem img');
const modal = document.getElementById('myModal');
const modalImage = document.getElementById('modalImage');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        modalImage.src = thumb.parentNode.href;
    });
});

function closeModal() {
    modal.style.display = 'none';
}