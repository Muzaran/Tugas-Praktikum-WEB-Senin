document.addEventListener("DOMContentLoaded", function() {
    const itemForm = document.getElementById('item-form');
    const itemInput = document.getElementById('item-input');
    const itemPriceInput = document.getElementById('item-price');
    const itemImageInput = document.getElementById('item-image');
    const itemList = document.getElementById('item-list');
    const checkoutButton = document.getElementById('checkout');
    const paymentStatus = document.getElementById('payment-status');
    const items = [];

    itemForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const newItemText = itemInput.value.trim();
        const newItemPrice = itemPriceInput.value.trim();
        const newItemImage = itemImageInput.files[0];

        if (newItemText) {
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;

            if (newItemPrice) {
                newItem.textContent += ` (Rp ${newItemPrice})`;
            }

            if (newItemImage) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(newItemImage);
                img.style.maxWidth = '200px';
                newItem.appendChild(img);
            }

            const editButton = document.createElement('button');
            editButton.className = 'edit-item btn-link text-blue';
            editButton.innerHTML = '<i class="fa-solid fa-pencil"></i>';
            editButton.addEventListener('click', function() {
                const updatedText = prompt('Edit the item:', newItemText);
                if (updatedText) {
                    newItem.textContent = updatedText;

                    if (newItemPrice) {
                        newItem.textContent += ` (Rp ${newItemPrice})`;
                    }
                }
            });

            const removeButton = document.createElement('button');
            removeButton.className = 'remove-item btn-link text-red';
            removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            removeButton.addEventListener('click', function() {
                itemList.removeChild(newItem);
                const index = items.indexOf(newItem.textContent);
                if (index > -1) {
                    items.splice(index, 1);
                }
            });

            newItem.appendChild(editButton);
            newItem.appendChild(removeButton);
            itemList.appendChild(newItem);

            itemInput.value = '';
            itemPriceInput.value = '';
            itemImageInput.value = '';
            items.push(newItem.textContent);
        }
    });

    checkoutButton.addEventListener('click', function() {
        if (items.length > 0) {
            const totalItems = items.length;
            let totalPrice = 0;

            for (const item of items) {
                const priceMatch = item.match(/\(\$([\d.]+)\)/);
                if (priceMatch) {
                    const price = parseFloat(priceMatch[1]);
                    totalPrice += price;
                }
            }

            paymentStatus.textContent = `Checkout Berhasil! Total items: ${totalItems}, Total Price: Rp ${totalPrice.toFixed(2)}`;
            items.length = 0;
            itemList.innerHTML = '';
        } else {
            paymentStatus.textContent = 'No items to checkout.';
        }
    });
});