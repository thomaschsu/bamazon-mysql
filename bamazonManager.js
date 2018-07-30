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
    inquirer.prompt([
      {
        name: "Option",
        type: "list",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
      }
    // Connection to database using item_id
    ]).then(function(answer) {
        if (answer.Option === "View Products for Sale") {
            viewProducts();
        }
        else if (answer.Option === "View Low Inventory") {
            viewLow();
        }
        else if (answer.Option === "Add to Inventory") {
            addToInventory();
        }
        else if (answer.Option === "Add New Product") {
            addNewProduct();
        }
    })
};

function viewProducts() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("#" + res[i].item_id + " | " + res[i].product_name + " | Department: " + res[i].department_name + " | $" + res[i].price + " | " + res[i].stock_quantity + " Quantity");
        }
        connection.end();
    })
};

function viewLow() {
    connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("#" + res[i].item_id + " | " + res[i].product_name + " | Department: " + res[i].department_name + " | $" + res[i].price + " | " + res[i].stock_quantity + " Quantity");
        }
        connection.end();
    })
}