document.addEventListener("DOMContentLoaded", function() {
    const itemForm = document.getElementById('item-form');
    const itemInput = document.getElementById('item-input');
    const itemList = document.getElementById('item-list');
    
    itemForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const newItemText = itemInput.value.trim();

        if (newItemText) {
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-item btn-link text-red';
            removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

            removeButton.addEventListener('click', function() {
                itemList.removeChild(newItem);
            });

            newItem.appendChild(removeButton);
            itemList.appendChild(newItem);

            itemInput.value = '';
        }
    });
});