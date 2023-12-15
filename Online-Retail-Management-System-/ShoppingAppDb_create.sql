-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2023-12-03 12:49:45.042

-- tables
-- Table: Admin
CREATE TABLE Admin (
    Admin_id int  NOT NULL IDENTITY(1, 1),
    name nvarchar  NOT NULL,
    password nvarchar(max)  NOT NULL,
    CONSTRAINT Admin_pk PRIMARY KEY  (Admin_id)
);

-- Table: cart_items
CREATE TABLE cart_items (
    cart_item_id int  NOT NULL IDENTITY(700, 1),
    quantity int  NOT NULL,
    cart_id int  NOT NULL,
    product_id int  NOT NULL,
    CONSTRAINT cart_items_pk PRIMARY KEY  (cart_item_id)
);

-- Table: category
CREATE TABLE category (
    catgeroy_id int  NOT NULL IDENTITY(300, 1),
    category_name nvarchar  NOT NULL,
    CONSTRAINT category_pk PRIMARY KEY  (catgeroy_id)
);

-- Table: customers
CREATE TABLE customers (
    customer_id int  NOT NULL IDENTITY(1, 1),
    customer_name nvarchar  NOT NULL,
    email nvarchar  NOT NULL,
    password nvarchar  NOT NULL,
    delivery_address nvarchar  NOT NULL,
    Phone_number int  NOT NULL,
    CONSTRAINT customers_pk PRIMARY KEY  (customer_id)
);

-- Table: order_details
CREATE TABLE order_details (
    order_details_id int  NOT NULL IDENTITY(500, 1),
    quantity int  NOT NULL,
    unit_cost money  NOT NULL,
    product_id int  NOT NULL,
    order_id int  NOT NULL,
    CONSTRAINT order_details_pk PRIMARY KEY  (order_details_id)
);

-- Table: orders
CREATE TABLE orders (
    order_id int  NOT NULL IDENTITY(400, 1),
    order_date date  NOT NULL,
    ship_date date  NOT NULL,
    cart_total decimal(10,2)  NOT NULL,
    customer_id int  NOT NULL,
    CONSTRAINT orders_pk PRIMARY KEY  (order_id)
);

-- Table: product
CREATE TABLE product (
    product_id int  NOT NULL IDENTITY(200, 1),
    product_name varchar(255)  NOT NULL,
    price decimal(12,2)  NOT NULL,
    description varchar(1000)  NOT NULL,
    img image  NOT NULL,
    sub_category_id int  NOT NULL,
    CONSTRAINT product_pk PRIMARY KEY  (product_id)
);

-- Table: shopping_cart
CREATE TABLE shopping_cart (
    cart_id int  NOT NULL IDENTITY(600, 1),
    date_created datetime  NOT NULL,
    customer_id int  NOT NULL,
    CONSTRAINT shopping_cart_pk PRIMARY KEY  (cart_id)
);

-- Table: sub_category
CREATE TABLE sub_category (
    sub_category_id int  NOT NULL IDENTITY(900, 1),
    sub_category_name nvarchar  NOT NULL,
    catgeroy_id int  NOT NULL,
    CONSTRAINT sub_category_pk PRIMARY KEY  (sub_category_id)
);

-- Table: wishlist
CREATE TABLE wishlist (
    wishlist_id int  NOT NULL IDENTITY(800, 1),
    date_created datetime  NOT NULL,
    customer_id int  NOT NULL,
    CONSTRAINT wishlist_pk PRIMARY KEY  (wishlist_id)
);

-- Table: wishlist_items
CREATE TABLE wishlist_items (
    wishlist_items_id int  NOT NULL IDENTITY(900, 1),
    wishlist_id int  NOT NULL,
    product_id int  NOT NULL,
    CONSTRAINT wishlist_items_pk PRIMARY KEY  (wishlist_items_id)
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
ALTER TABLE sub_category ADD CONSTRAINT sub_category_category
    FOREIGN KEY (catgeroy_id)
    REFERENCES category (catgeroy_id);

-- Reference: wishlist_customers (table: wishlist)
ALTER TABLE wishlist ADD CONSTRAINT wishlist_customers
    FOREIGN KEY (customer_id)
    REFERENCES customers (customer_id);

-- Reference: wishlist_id (table: wishlist_items)
ALTER TABLE wishlist_items ADD CONSTRAINT wishlist_id
    FOREIGN KEY (wishlist_id)
    REFERENCES wishlist (wishlist_id);

-- Reference: wishlist_items_product (table: wishlist_items)
ALTER TABLE wishlist_items ADD CONSTRAINT wishlist_items_product
    FOREIGN KEY (product_id)
    REFERENCES product (product_id);

-- End of file.

