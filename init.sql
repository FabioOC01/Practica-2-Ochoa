
CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10, 2) NOT NULL
);

-- Datos de ejemplo
INSERT INTO productos (nombre, precio) VALUES 
('Laptop HP OMEN', 1200.00),
('iPhone 14 Pro', 800.00),
('Tablet Huawei', 500.00),
('Auriculares Sony', 100.00),
('Monitor Lenovo', 300.00);
