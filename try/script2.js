
    document.getElementById('milkForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const cowID = document.getElementById('cowID').value;
        const quantity = parseFloat(document.getElementById('quantity').value);
        const fatContent = parseFloat(document.getElementById('fatContent').value);
        const collectionDate = document.getElementById('collectionDate').value;
        const price = calculatePrice(quantity, fatContent); // Calculate price based on quantity and fat content

        // Insert data into the table
        const table = document.getElementById('collectionTable');
        const row = table.insertRow(-1);
        const cellCowID = row.insertCell(0);
        const cellQuantity = row.insertCell(1);
        const cellFatContent = row.insertCell(2);
        const cellCollectionDate = row.insertCell(3);
        const cellPrice = row.insertCell(4);

        cellCowID.textContent = cowID;
        cellQuantity.textContent = quantity;
        cellFatContent.textContent = fatContent;
        cellCollectionDate.textContent = collectionDate;
        cellPrice.textContent = '₹' + price.toFixed(2); // Display price with 2 decimal places
    });
