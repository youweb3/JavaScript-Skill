const addButton = document.getElementById('addImage');

addButton.addEventListener("click", function() {

    const imageUrl = document.getElementById('image-url').value;

    if (imageUrl) {
        const galleryItem = document.createElement(`div`);
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = imageUrl;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        removeButton.onclick = () => {
            document.getElementById('gallery').removeChild(galleryItem);
        };

        galleryItem.appendChild(img);
        galleryItem.appendChild(removeButton);

        document.getElementById('gallery').appendChild(galleryItem);

        // Clear the input field after adding the image
        document.getElementById('image-url').value = '';
    }
});