
// Example script (can be expanded with lightbox or other effects)
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            alert('Clicked on an image!');
        });
    });
});
    