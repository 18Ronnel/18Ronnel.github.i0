// Define products array
var products = [
    { id: "product1", qtyId: "qty1", price: 150000.00 },
    { id: "product2", qtyId: "qty2", price: 70000.00 },
    { id: "product3", qtyId: "qty3", price: 150000.00 },
    { id: "product4", qtyId: "qty4", price: 90000.00 },
    { id: "product5", qtyId: "qty5", price: 100000.00 },
    { id: "product6", qtyId: "qty6", price: 90000.00 }
];

var carts = document.getElementById("carts");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

// Function to add order
function addOrder() {
    var orderList = '';
    var total = 0;

    products.forEach(function(product) {
        var productId = product.id;
        var qtyId = product.qtyId;
        var price = product.price;

        var productName = document.getElementById(productId).querySelector('.product-label').textContent;
        var productQty = document.getElementById(qtyId).value;

        if (parseFloat(productQty) > 0) {
            var order = `${productQty} pc/s x ${productName} @ Php ${price.toFixed(2)} each = Php ${(productQty * price).toFixed(2)}\n`;
            orderList += order;
            total += productQty * price;
        }
    });

    carts.textContent = orderList;
    document.getElementById("total").textContent = `Total: Php ${total.toFixed(2)}`;
}

// Event listeners for quantity inputs
products.forEach(function(product) {
    var qtyId = product.qtyId;
    document.getElementById(qtyId).addEventListener("keyup", addOrder);
});

// Function to calculate change
function calculateChange() {
    var totalValue = parseFloat(document.getElementById("total").textContent.split('Php ')[1]);
    var cashTendered = parseFloat(cash.value);

    if (cashTendered >= totalValue) {
        change.value = (cashTendered - totalValue).toFixed(2);
    } else {
        change.value = 'Insufficient cash';
    }
}

// Event listener for cash input
cash.addEventListener("keyup", calculateChange);
