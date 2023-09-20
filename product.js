function addProduct() {
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productQuantity = parseInt(document.getElementById('productQuantity').value);

    if (productName && productDescription && !isNaN(productPrice) && !isNaN(productQuantity) && productPrice >= 0 && productQuantity > 0) {
        const orderItems = document.getElementById('orderItems');
        const newRow = orderItems.insertRow();

        const nameCell = newRow.insertCell(0);
        const descriptionCell = newRow.insertCell(1);
        const priceCell = newRow.insertCell(2);
        const quantityCell = newRow.insertCell(3);
        const amountCell = newRow.insertCell(4);

        const productTotal = productPrice * productQuantity;

        nameCell.innerHTML = productName;
        descriptionCell.innerHTML = productDescription;
        priceCell.innerHTML = `$${productPrice.toFixed(2)}`;
        quantityCell.innerHTML = productQuantity;
        amountCell.innerHTML = `$${productTotal.toFixed(2)}`;

        // Clear input fields
        document.getElementById('productName').value = '';
        document.getElementById('productDescription').value = '';
        document.getElementById('productPrice').value = '';
        document.getElementById('productQuantity').value = '';

        // Update the total amount
        updateTotal();
    } else {
        alert('Please fill in all fields with valid values before adding to the order.');
    }
}

function updateTotal() {
    const orderItems = document.getElementById('orderItems').rows;
    let totalAmount = 0;

    for (let i = 0; i < orderItems.length; i++) {
        const amountCell = orderItems[i].cells[4];
        totalAmount += parseFloat(amountCell.innerHTML.replace('$', ''));
    }

    document.getElementById('orderTotal').textContent = `Total: $${totalAmount.toFixed(2)}`;
}