DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
	id INT NOT NULL AUTO_INCREMENT,
    itemID INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (id)
    );

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Iphone X', 'Electronics', 800, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Limited Edition Citizen Watch', 'jewelry', 750, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('The Pragmatic Programmer', 'Books', 40, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Nike Air Max 2.0', 'Clothing', 125, 4);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('KOD J Cole', 'Music', 15, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Chocolate Chip Cookes', 'Food', 5, 7);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Core Max Ab Machine', 'Exercise', 50, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Bamazon Belexa', 'Electronics', 150, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('The Avengers Bootleg', 'Movies', 10, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Ready Player One Bootleg', 'Movies', 10, 4);

SELECT * FROM products;
