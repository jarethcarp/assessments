-- #1
SELECT email FROM customers;

-- #2
SELECT id FROM orders WHERE customer_id = 1;

-- #3
SELECT SUM(num_cupcakes) FROM orders WHERE processed = false;

-- #4
SELECT cupcakes.name, SUM(orders.num_cupcakes) FROM cupcakes LEFT JOIN orders ON cupcakes.id = orders.cupcake_id GROUP BY cupcakes.name ORDER BY cupcakes.name;

-- #5
SELECT customers.email, SUM(orders.num_cupcakes) FROM customers LEFT JOIN orders ON customers.id = orders.customer_id GROUP BY customers.email ORDER BY SUM DESC;

-- #6
SELECT DISTINCT customers.fname, customers.lname, customers.email FROM customers LEFT JOIN orders ON customers.id = orders.customer_id WHERE cupcake_id = 5 AND processed = true;




