function switchImage() {
    var currentImage = document.getElementById('profile-image');
    var secondImage = document.getElementById('second-image');

    // Check if the current image is visible
    if (currentImage.style.display !== 'none') {
        currentImage.style.display = 'none';
        secondImage.style.display = 'block';
    } else {
        currentImage.style.display = 'block';
        secondImage.style.display = 'none';
    }
}