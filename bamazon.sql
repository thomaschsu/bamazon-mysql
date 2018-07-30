DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Airbed", "Home and Kitchen", 35, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Clip on Light", "Home Improvement", 16, 1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Toaster", "Appliances", 21, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "Air Freshener", "Home Decor", 1, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Microwave", "Appliances", 115, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Vacuum Cleaner", "Home Improvement", 65, 13);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Light Bulb", "Home Improvement", 2, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Trash Can", "Trash and Recycling", 6, 22);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Towel", "Bath", 4, 1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "Soap", "Home and Garden", 16, 1);

SELECT * FROM products;