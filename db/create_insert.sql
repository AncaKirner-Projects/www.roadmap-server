
CREATE TABLE roadmap.product
 (
id INT(6) AUTO_INCREMENT PRIMARY KEY,
prod_name VARCHAR(100) NOT NULL,
prod_description VARCHAR(10000),
price DECIMAL(10,2) NOT NULL,
prod_number INT,
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roadmap.category
 (
id INT(6) AUTO_INCREMENT PRIMARY KEY,
category_name VARCHAR(100) NOT NULL,
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roadmap.product_category
 (
category_id INT(6) NOT NULL,
product_id INT(6) NOT NULL,
FOREIGN KEY fk_prod(product_id) REFERENCES product(prod_id),
FOREIGN KEY fk_cat(category_id) REFERENCES category(cat_id),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO roadmap.category(category_name) VALUES("Fishing");
INSERT INTO roadmap.category(category_name) VALUES("Gifts");
INSERT INTO roadmap.category(category_name) VALUES("Food");
INSERT INTO roadmap.category(category_name) VALUES("Appliances");

INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Aluminum Alloy Fishing Tackle Hook", "2,5" , 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Penn Spinfisher Fishing Reel", 240 , 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Abu Garcia Veritas Rods", 130 , 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Watersnake Combat Electric Motor Bow Mount", 650.6 , 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Mirage Rock Gripper Fishing Shoes", 60.8 , 15);

INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("9 Birthday Cake Truffles Cake Balls With Hidden Messages", 77 , 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Birthday Postcard Glass Block", 56 , 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Year You Were Born Mug", 49 , 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Infinity Birthstone Bracelet", 78 , 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Picnic Backpack", 289 , 15);

INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Kellogg's Raisin Bran Crunch, Breakfast Cereal", 4.5 , 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Cowboy Rib Steaks", 88 , 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Naturally Raised Ground Iowa Pork",56 , 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Supreem Milk 1.5 Liter", 24 , 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Ananda Butter 100 gm", 6 , 15);

INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Whirlpool Top Load Washer", 1200 , 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Whirlpool 24.7 cu. ft. French Door Refrigerator", 3500 , 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Honeywell - Mistmate 0.5 Gal. Cool Mist Humidifier", 300, 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("iRobot - Roomba 690 App-Controlled Robot Vacuum", 1800 , 15);
INSERT INTO roadmap.product(prod_name, price, prod_number) 
VALUES("Crock-Pot® - 8-Quart Slow Cooker", 2455 , 15);


INSERT INTO roadmap.product_category(category_id, product_id) VALUES(1, 1);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(1, 2);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(1, 3);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(1, 4);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(1, 5);

INSERT INTO roadmap.product_category(category_id, product_id) VALUES(2, 6);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(2, 7);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(2, 8);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(2, 9);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(2, 10);

INSERT INTO roadmap.product_category(category_id, product_id) VALUES(3, 11);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(3, 12);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(3, 13);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(3, 14);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(3, 15);

INSERT INTO roadmap.product_category(category_id, product_id) VALUES(4, 16);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(4, 17);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(4, 18);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(4, 19);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(4, 20);

INSERT INTO roadmap.product_category(category_id, product_id) VALUES(2, 1);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(2, 2);

INSERT INTO roadmap.product_category(category_id, product_id) VALUES(3, 1);
INSERT INTO roadmap.product_category(category_id, product_id) VALUES(3, 2);

select * from roadmap.product;
select * from roadmap.category;
select * from roadmap.product_category;

truncate table roadmap.product;
truncate table roadmap.product_category;

drop table roadmap.product;
drop table roadmap.category;
