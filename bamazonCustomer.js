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

// After connection, run
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
  readProducts();
//   updateProducts();
})
});

// function updateProducts() {
//   console.log("Which product will you like to buy?");
//   var userQuanity = stock_quantity -1;
//   var userId = 1;
//   var query = connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//       {
//         stock_quantity: userQuanity
//       },
//       {
//         item_id: userId
//       }
//     ],
//     function(err, res) {
//       console.log(res.affectedRows + " products updated!\n");
//     }
//   );

//   console.log(query.sql);
// }


function readProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    var productNames = [];
    for (var i = 0; i < res.length; i++) {
        productNames.push("#" + res[i].item_id);
    }
    inquirer.prompt([
      {
        name: "purchase",
        message: "Which item would you like to purchase?",
        type: "list",
        choices: productNames
      }
    ]).then(function(response) {
      if (response.purchase == "#1")
        quantityCheck()
      else if (response.purchase == "#2")
        console.log("You selected #2");
      else if (response.purchase == "#3")
        console.log("You selected #3");
      else if (response.purchase == "#4")
        console.log("You selected #4");
      else if (response.purchase == "#5")
        console.log("You selected #5");
      else if (response.purchase == "#6")
        console.log("You selected #6");
      else if (response.purchase == "#7")
        console.log("You selected #7");
      else if (response.purchase == "#8")
        console.log("You selected #8");
      else if (response.purchase == "#9")
        console.log("You selected #9");
      else if (response.purchase == "#10")
        console.log("You selected #10");
      else
        console.log("Invalid Response");
    });
  });
}

function quantityCheck() {
  inquirer.prompt([
    {
      name: "quantity",
      message: "How many do you wish to purchase?",
      type: "input",
    }
  ]).then(function(response) {
    if (response.quantity == 1)
      console.log("Great");
    else
      console.log("Invalid Response");
  });
  connection.end();
}