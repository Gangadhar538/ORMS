create database ShoppingAppDB

use ShoppingAppDB
go

CREATE TABLE Admin (
    Admin_id int  primary key IDENTITY(1, 1),
    name nvarchar(50)  NOT NULL,
    password nvarchar(50)  NOT NULL,
);

CREATE TABLE customers (
    customer_id int  primary key IDENTITY(1, 1),
    customer_name varchar(50)  NOT NULL,
    email nvarchar(50)  NOT NULL,
    password nvarchar(50)  NOT NULL,
    delivery_address nvarchar(100)  NOT NULL,
    Phone_number nvarchar(10)
        constraint CK_MyTable_PhoneNumber check (Phone_number like '[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]'),
    
);

CREATE TABLE category (
    catgeroy_id int  primary key IDENTITY(100, 1),
    category_name nvarchar(20)  NOT NULL,
   
);

CREATE TABLE sub_category (
    sub_category_id int primary key  IDENTITY(200, 1),
    sub_category_name nvarchar(20)  NOT NULL,
    catgeroy_id int  NOT NULL,
);

CREATE TABLE product (
    product_id int  primary key  IDENTITY(300, 1),
    product_name varchar(100)  NOT NULL,
    price decimal(12,2)  NOT NULL,
    description varchar(1000)  NOT NULL,
    img image,
    sub_category_id int  NOT NULL,
);

CREATE TABLE shopping_cart (
    cart_id int  primary key  IDENTITY(400, 1),
    date_created datetime  NOT NULL,
    customer_id int  NOT NULL,
);

CREATE TABLE cart_items (
    cart_item_id int  primary key  IDENTITY(500, 1),
    quantity int  NOT NULL,
    cart_id int  NOT NULL,
    product_id int  NOT NULL,
);

--CREATE TABLE wishlist (
--    wishlist_id int  NOT NULL IDENTITY(600, 1),
--    date_created datetime  NOT NULL,
--    customer_id int  NOT NULL,
--    CONSTRAINT wishlist_pk PRIMARY KEY  (wishlist_id)
--);

--CREATE TABLE wishlist_items (
--    wishlist_items_id int  NOT NULL IDENTITY(700, 1),
--    wishlist_id int  NOT NULL,
--    product_id int  NOT NULL,
--    CONSTRAINT wishlist_items_pk PRIMARY KEY  (wishlist_items_id)
--);

CREATE TABLE orders (
    order_id int  primary key IDENTITY(800, 1),
    order_date datetime  NOT NULL,
    ship_date datetime  NOT NULL,
    cart_total decimal(15,2)  NOT NULL,
    customer_id int  NOT NULL,
);

CREATE TABLE order_details (
    order_details_id int  primary key IDENTITY(900, 1),
    quantity int  NOT NULL,
    unit_cost decimal(10,2)  NOT NULL,
    product_id int  NOT NULL,
    order_id int  NOT NULL,
);

-- foreign keys
-- Reference: cart_items_product (table: cart_items)
ALTER TABLE cart_items ADD CONSTRAINT cart_items_product
    FOREIGN KEY (product_id)
    REFERENCES product (product_id);

-- Reference: cart_items_shopping_cart (table: cart_items)
ALTER TABLE cart_items ADD CONSTRAINT cart_items_shopping_cart
    FOREIGN KEY (cart_id)
    REFERENCES shopping_cart (cart_id);

-- Reference: order_details_orders (table: order_details)
ALTER TABLE order_details ADD CONSTRAINT order_details_orders
    FOREIGN KEY (order_id)
    REFERENCES orders (order_id);

-- Reference: order_details_product (table: order_details)
ALTER TABLE order_details ADD CONSTRAINT order_details_product
    FOREIGN KEY (product_id)
    REFERENCES product (product_id);

-- Reference: orders_customers (table: orders)
ALTER TABLE orders ADD CONSTRAINT orders_customers
    FOREIGN KEY (customer_id)
    REFERENCES customers (customer_id);

-- Reference: product_sub_category (table: product)
ALTER TABLE product ADD CONSTRAINT product_sub_category
    FOREIGN KEY (sub_category_id)
    REFERENCES sub_category (sub_category_id);

-- Reference: shopping_cart_customers (table: shopping_cart)
ALTER TABLE shopping_cart ADD CONSTRAINT shopping_cart_customers
    FOREIGN KEY (customer_id)
    REFERENCES customers (customer_id);

-- Reference: sub_category_category (table: sub_category)
ALTER TABLE sub_category ADD CONSTRAINT 
    FOREIGN KEY (catgeroy_id)
    REFERENCES category (catgeroy_id);

-- Reference: wishlist_customers (table: wishlist)
--ALTER TABLE wishlist ADD CONSTRAINT wishlist_customers
--    FOREIGN KEY (customer_id)
--    REFERENCES customers (customer_id);

-- Reference: wishlist_id (table: wishlist_items)
--ALTER TABLE wishlist_items ADD CONSTRAINT wishlist_id
--    FOREIGN KEY (wishlist_id)
--    REFERENCES wishlist (wishlist_id);

---- Reference: wishlist_items_product (table: wishlist_items)
--ALTER TABLE wishlist_items ADD CONSTRAINT wishlist_items_product
--    FOREIGN KEY (product_id)
--    REFERENCES product (product_id);

-- Inserting into Admin table
INSERT INTO Admin (name, password) 
VALUES 
('Admin1', 'adminpass1'),
('Admin2', 'adminpass2'),
('Admin3', 'adminpass3'),
('Admin4', 'adminpass4');

select * from Admin

ALTER TABLE customers
ALTER COLUMN Phone_number NVARCHAR(10);
-- Inserting into customers table
INSERT INTO customers (customer_name, email, password, delivery_address, Phone_number)
VALUES 
('Customer1', 'customer1@example.com', 'customerpass1', 'Address 1',1234567890),
('Customer2', 'customer2@example.com', 'customerpass2', 'Address 2',2345678901),
('Customer3', 'customer3@example.com', 'customerpass3', 'Address 3',3456789012),
('Customer4', 'customer4@example.com', 'customerpass4', 'Address 4',4567890123),
('Customer5', 'customer5@example.com', 'customerpass5', 'Address 5',5678901234),
('Customer6', 'customer6@example.com', 'customerpass6', 'Address 6',6789012345),
('Customer7', 'customer7@example.com', 'customerpass7', 'Address 7',7890123456),
('Customer8', 'customer8@example.com', 'customerpass8', 'Address 8',8901234567);

select *from customers

ALTER TABLE category
ALTER COLUMN category_name NVARCHAR(10);
-- Inserting into category table
INSERT INTO category (category_name)
VALUES 
('Men'),
('Women');

select *from category

ALTER TABLE sub_category
ALTER COLUMN sub_category_name NVARCHAR(20);
-- Inserting into sub_category table
INSERT INTO sub_category (sub_category_name, catgeroy_id)
VALUES 
('Shirts', 100),
('Pants', 100),
('Shorts', 100),
('Shoes', 100),
('T-shirts', 100),
('Sarees', 101),
('Pants', 101),
('Kurtas', 101),
('Shoes', 101),
('Tops', 101);

select * from sub_category

ALTER TABLE product
ALTER COLUMN img image null;
-- Inserting into product table
INSERT INTO product (product_name, price, description, img, sub_category_id)
VALUES 
('Denim Pants', 999.99, 'material : Jeans ,Size :36, color : black', NULL, 201),
('Netplay Shirt', 599.99, 'material : Cotton ,Size :XL , color: white', NULL, 200),
('Allen Solly Shirt', 1599.99, 'material: cotton , Size :L , color : black', NULL, 200),
('Nike Shorts', 540.99, 'material: cotton , Size :L , color : blue', NULL, 202),
('Adidas shorts', 2550.99, 'material: polyster , Size :XL , color : Navy Blue', NULL, 202),
('Kanchi Pattu sarees', 13460.99, 'material: silk , Size : free size, color : red pattern :saptha mukha', NULL, 205),
('Allen Solly Pants', 1670.99, 'material: jeans , Size :34 , color : black', NULL, 206),
('Nykaaa kurtas ', 2800.99, 'material: cotton , Size :L , color : pink pattern: swastik pattern', NULL, 207),
('Nike chunky shoes', 1990.99, ' Women Air max AP Lace-up Sneakers ,Size :7 , color : black', NULL, 208),
('Adidas Running shoes', 2100.99, ' Down Shifter 12 Road Running shoes,Size :8 , color : black', NULL, 208);

select *from product
-- Inserting into shopping_cart table
INSERT INTO shopping_cart (date_created, customer_id)
VALUES 
(GETDATE(), 1),
(GETDATE(), 2),
(GETDATE(), 3),
(GETDATE(), 4),
(GETDATE(), 5),
(GETDATE(), 6),
(GETDATE(), 7),
(GETDATE(), 8);

select *from Admin
select *from shopping_cart
select *from product
-- Inserting into cart_items table




-- Update specific product's image data
--UPDATE product
--SET img = BulkColumn
--FROM OPENROWSET(BULK N'C:\Path\To\Your\Image.jpg', SINGLE_BLOB) AS ProductImage
--WHERE product_id = [Your_Product_ID];

