# Bamazon Application

Welcome to the greatest APP ever created. It uses the MYSQL NPM and the INQUIRER NPM. Both top notch packages.

So what exactly is Bamazon? Is it Amazon...? Not quite.

# Work Flow

Here we have the customer view:

The app prompts users with two messages.

![Gif 1](/images/1.gif)

   * The first message asks them the ID of the product they would like to buy.
   * The second message asks how many units of the product they would like to buy.
   * The application checks if the store has enough of the product to meet the customer's request.

Here is the manager view:

![Gif 2](/images/2.gif)

   * If a manager selects `View Products for Sale`, the app lists every available item.
   * If a manager selects `View Low Inventory`, then it lists all items with an inventory count lower than five.
   * If a manager selects `Add to Inventory`, the app displays a prompt that will let the manager "add more" of any item currently in the store.
   * If a manager selects `Add New Product`, it allows the manager to add a completely new product to the store.