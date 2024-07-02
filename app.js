// Variables for products
var products = [
    { id: "product1", qty: "qty1", price: "price1" },
    { id: "product2", qty: "qty2", price: "price2" },
    { id: "product3", qty: "qty3", price: "price3" },
    { id: "product4", qty: "qty4", price: "price4" },
    { id: "product5", qty: "qty5", price: "price5" },
    { id: "product6", qty: "qty6", price: "price6" }
];

var carts = document.getElementById("carts");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

// Function to add order
function addOrder() { 
    var orderList = '';
    var total = 0;

    products.forEach(function(product) {
        var productName = document.getElementById(product.id).textContent;
        var productQty = document.getElementById(product.qty).value;
        var productPrice = parseFloat(document.getElementById(product.price).textContent);

        if (parseFloat(productQty) > 0) {
            var order = `${productQty} pc/s x ${productName} @ ${productPrice.toFixed(2)} each = Php ${(productQty * productPrice).toFixed(2)}\n`;
            orderList += order;
            total += productQty * productPrice;
        }
    });

    carts.textContent = orderList + `\nTotal: Php ${total.toFixed(2)}`;
}

// Event listeners for quantity inputs
products.forEach(function(product) {
    document.getElementById(product.qty).addEventListener("keyup", addOrder);
});

// Function to calculate change
function calculateChange() {
    var total = parseFloat(carts.textContent.split('Total: Php ')[1]);
    var cashTendered = parseFloat(cash.value);

    if (cashTendered >= total) {
        change.value = (cashTendered - total).toFixed(2);
    } else {
        change.value = 'Insufficient cash';
    }
}

// Event listener for cash input
cash.addEventListener("keyup", calculateChange);
