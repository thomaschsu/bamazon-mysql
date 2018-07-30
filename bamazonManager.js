// Required npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// MySql connection credentials
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "P@ssw0rd89",
    database: "bamazon"
});

// After connection, run and console log all products
connection.connect(function(err) {
    if (err) throw err;
    console.log("=================================");
    console.log("Welcome to Bamazon MANAGER VIEW");
    console.log("=================================");
    readProducts();
});

// Function to read products
function readProducts() {
    inquirer.prompt([{
            name: "Option",
            type: "list",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        }
        // Connection to database using item_id
    ]).then(function(answer) {
        if (answer.Option === "View Products for Sale") {
            viewProducts();
        } else if (answer.Option === "View Low Inventory") {
            viewLow();
        } else if (answer.Option === "Add to Inventory") {
            addToInventory();
        } else if (answer.Option === "Add New Product") {
            createProduct();
        }
    });
}

function viewProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("#" + res[i].item_id + " | " + res[i].product_name + " | Department: " + res[i].department_name + " | $" + res[i].price + " | " + res[i].stock_quantity + " Quantity");
        }
        connection.end();
    });
}

function viewLow() {
    connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, res) {
        if (err) throw err;
        console.log("Showing items with a quantity less than 5:");
        for (var i = 0; i < res.length; i++) {
            console.log("#" + res[i].item_id + " | " + res[i].product_name + " | Department: " + res[i].department_name + " | $" + res[i].price + " | " + res[i].stock_quantity + " Quantity");
        }
        connection.end();
    });
}

function addToInventory() {
    inquirer.prompt([{
            name: "item",
            type: "input",
            message: "Enter the ID of the item that you want (1-10)",
        },
        {
            name: "quantityadd",
            type: "input",
            message: "How much quantity do you want to add?"
        }
        // Connection to database using item_id
    ]).then(function(answer) {
        connection.query("SELECT * FROM products WHERE ?", {
            item_id: answer.item
        }, function(err, res) {
            if (answer.item < 11 && answer.item > 0) {
                var quantityAdded = parseInt(res[0].stock_quantity) + parseInt(answer.quantityadd);
                console.log("New Quantity: " + quantityAdded);
                connection.query(
                    "UPDATE products SET ? WHERE ?", [{
                            stock_quantity: quantityAdded
                        },
                        {
                            item_id: answer.item
                        }
                    ],
                    function(error) {
                        if (error) throw err;
                    });
                readProducts();
            } else {
                console.log("Enter an ID from 1-10");
                connection.end();
            }
        });
    });
}

function createProduct() {
    inquirer.prompt([{
            name: "item",
            type: "input",
            message: "Enter the name of the item",
        },
        {
            name: "department",
            type: "input",
            message: "Enter the name of the department"
        },
        {
            name: "price",
            type: "input",
            message: "Please input the price"
        },
        {
            name: "quantity",
            type: "input",
            message: "How much quantity?"
        }
        // Connection to database using item_id
    ]).then(function(answer) {
        connection.query(
            "INSERT INTO products SET ?",
            {
              product_name: answer.item,
              department_name: answer.department,
              price: answer.price,
              stock_quantity: answer.quantity
            },
            function(err) {
              if (err) throw err;
              console.log("Your item was created successfully!");
              connection.end();
        }
    );
  });
}