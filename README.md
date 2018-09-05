# Bamazon Application

### Description
Welcome to the greatest APP ever created. It uses the MySQL NPM and the Inquirer NPM. Both top notch packages. So what exactly is Bamazon? Is it Amazon...? Not quite. It's a made up storefront with the ability to read products, buy products, add products, and all keep track of inventory. Pretty neat, huh?

- - -

### Work Flow

1. User imports products into MySQL.
2. Modify the password in JS files for the MySQL NPM package
3. Run NPM to install MySQL and Inquirer
4. Use CLI to run the JS files using Node.
5. Enjoy!

- - -

### Demo

##### Here we have the customer view:

The app prompts users with two messages.

![Image 01](/images/image01.gif)

   1. The first message asks them the ID of the product they would like to buy.
   2. The second message asks how many units of the product they would like to buy.
   3. The application checks if the store has enough of the product to meet the customer's request.

##### Here is the manager view:

![Image 02](/images/image02.gif)

   1. If a manager selects `View Products for Sale`, the app lists every available item.
   2. If a manager selects `View Low Inventory`, then it lists all items with an inventory count lower than five.
   3. If a manager selects `Add to Inventory`, the app displays a prompt that will let the manager "add more" of any item currently in the store.
   4. If a manager selects `Add New Product`, it allows the manager to add a completely new product to the store.

   - - -

   ### Skills Used
   1. JavaScript
   2. MySQL
   3. Node.js / NPM
   4. CLI
