   // Function to calculate the price based on fat content and quantity
   function calculatePrice() {
    var quantity = parseFloat(document.getElementById('quantity').value);
    var fat_content = parseFloat(document.getElementById('fat_content').value);
    var price_per_litre;

    // Your pricing logic based on fat content
    if (fat_content >= 3.5) {
        price_per_litre = 50; // Example price for fat content >= 3.5
    } else {
        price_per_litre = 40; // Example price for fat content < 3.5
    }

    var price = quantity * price_per_litre;
    
    // Update the price field in the form
    document.getElementById('price').value = price.toFixed(2);
}