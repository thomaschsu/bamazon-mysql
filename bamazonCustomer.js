// Required npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// MySql connection credentials
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

// After connection, run and console log all products
connection.connect(function(err) {
    if (err) throw err;
    console.log("===================");
    console.log("Welcome to Bamazon!");
    console.log("===================");
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("#" + res[i].item_id + " | " + res[i].product_name + " | $" + res[i].price);
        }
        console.log("===================");
        // Function to read the products  
        readProducts();
    })
});

// Function to read products
function readProducts() {
    inquirer.prompt([{
            name: "item",
            type: "input",
            message: "Please enter the ID of the item that you want"
        },
        {
            name: "amount",
            type: "input",
            message: "How many would you like to buy?"
        }

    ]).then(function(answer) {
        connection.query("SELECT * FROM products WHERE ?", {
            item_id: answer.item
        }, function(err, res) {
            if (parseInt(answer.amount) > res[0].stock_quantity) {
                console.log("Sorry. Only " + res[0].stock_quantity + " left :(");
                connection.end();
            }
            else {
                console.log("Your purchase: " + res[0].product_name + ". The total cost is: $ " + parseInt(res[0].price) * parseInt(answer.amount));
                var quantityLeft = res[0].stock_quantity - answer.amount;
                console.log("Quantity left: " + quantityLeft);
                connection.query(
                    "UPDATE products SET ? WHERE ?", [{
                            stock_quantity: quantityLeft
                        },
                        {
                            item_id: answer.item
                        }
                    ],
                    function(error) {
                        if (error) throw err;
                    });
                console.log("Inventory updated. There are  " + quantityLeft + " left");
                readProducts();
            }
        })
    });
};