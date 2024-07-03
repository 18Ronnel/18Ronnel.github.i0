// Variables for products
var products = [
    { id: "product1", qty: "qty1", price: "150000.00" },
    { id: "product2", qty: "qty2", price: "70000.00" },
    { id: "product3", qty: "qty3", price: "150000.00" },
    { id: "product4", qty: "qty4", price: "90000.00" },
    { id: "product5", qty: "qty5", price: "100000.00" },
    { id: "product6", qty: "qty6", price: "90000.00" }
];

var carts = document.getElementById("carts");
var cash = document.getElementById("cash");
var change = document.getElementById("change");
var totalElement = document.getElementById("change");

// Function to add order
function addOrder() {
    var orderList = '';
    var total = 0;

    products.forEach(function(product) {
        var productId = product.id;
        var qtyId = product.qty;
        var price = parseFloat(product.price);

        var productQty = document.getElementById(qtyId).value;

        if (parseFloat(productQty) > 0) {
            var order = `${productQty} pc/s x ${productId} @ Php ${price.toFixed(2)} each = Php ${(productQty * price).toFixed(2)}\n`;
            orderList += order;
            total += productQty * price;
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

    if (!isNaN(cashTendered)) {
        if (cashTendered >= totalValue) {
            change.value = (cashTendered - totalValue).toFixed(2);
        } else {
            change.value = 'Insufficient cash';
        }
    }
}

// Event listener for cash input
cash.addEventListener("keyup", calculateChange);
