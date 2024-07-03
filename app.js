// Variables for products
var products = [
    { id: "product1", qty: "qty1", price: "price1" },
    { id: "product2", qty: "qty2", price: "price2" },
    // Add more products as needed
];

var carts = document.getElementById("carts");
var totalElement = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

// Function to add order
function addOrder() {
    var orderList = '';
    var total = 0;

    products.forEach(function(product) {
        var productName = document.getElementById(product.id).querySelector('h3').textContent;
        var productQty = document.getElementById(product.qty).value;
        var productPrice = parseFloat(document.getElementById(product.price).textContent);

        if (parseFloat(productQty) > 0) {
            var order = `${productQty} pc/s x ${productName} @ Php ${productPrice.toFixed(2)} each = Php ${(productQty * productPrice).toFixed(2)}\n`;
            orderList += order;
            total += productQty * productPrice;
        }
    });

    carts.textContent = orderList;
    totalElement.textContent = `Total: Php ${total.toFixed(2)}`;
}

// Event listeners for quantity inputs
products.forEach(function(product) {
    document.getElementById(product.qty).addEventListener("keyup", addOrder);
});

// Function to calculate change
function calculateChange() {
    var totalValue = parseFloat(totalElement.textContent.split('Php ')[1]);
    var cashTendered = parseFloat(cash.value);

    if (cashTendered >= totalValue) {
        change.value = (cashTendered - totalValue).toFixed(2);
    } else {
        change.value = 'Insufficient cash';
    }
}

// Event listener for cash input
cash.addEventListener("keyup", calculateChange);
