DROP DATABASE IF EXISTS productsDB

CREATE DATABASE 	IF NOT EXISTS productsDB

USE productsDB

DROP TABLE IF EXISTS productstable

CREATE TABLE  productstable (

ID INT(25) NOT NULL AUTO_INCREMENT,
item_id VARCHAR(25) NULL,
product_name VARCHAR(25) NULL,
dept_name VARCHAR(25) NULL,
price DECIMAL (10,2) NULL,
stock_quantity INT NULL,
PRIMARY KEY (id)

);

INSERT INTO productstable (item_id, product_name, dept_name, price, stock_quantity)
VALUES ("itemEx", "productEx", "deptEx", 0.00, 0 );

INSERT INTO productstable (item_id, product_name, dept_name, price, stock_quantity)
VALUES ("itemEx", "productEx", "deptEx", 0.00, 0 );

INSERT INTO productstable (item_id, product_name, dept_name, price, stock_quantity)
VALUES ("itemEx", "productEx", "deptEx", 0.00, 0 );

INSERT INTO productstable (item_id, product_name, dept_name, price, stock_quantity)
VALUES ("itemEx", "productEx", "deptEx", 0.00, 0 );

INSERT INTO productstable (item_id, product_name, dept_name, price, stock_quantity)
VALUES ("itemEx", "productEx", "deptEx", 0.00, 0 );

INSERT INTO productstable (item_id, product_name, dept_name, price, stock_quantity)
VALUES ("itemEx", "productEx", "deptEx", 0.00, 0 );

INSERT INTO productstable (item_id, product_name, dept_name, price, stock_quantity)
VALUES ("itemEx", "productEx", "deptEx", 0.00, 0 );

INSERT INTO productstable (item_id, product_name, dept_name, price, stock_quantity)
VALUES ("itemEx", "productEx", "deptEx", 0.00, 0 );

INSERT INTO productstable (item_id, product_name, dept_name, price, stock_quantity)
VALUES ("itemEx", "productEx", "deptEx", 0.00, 0 );

INSERT INTO productstable (item_id, product_name, dept_name, price, stock_quantity)
VALUES ("itemEx", "productEx", "deptEx", 0.00, 0 );
