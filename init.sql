-- Create Items table
CREATE TABLE IF NOT EXISTS items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO items (name, price) VALUES
  ('Laptop', 999.00),
  ('Phone', 599.00),
  ('Headphones', 199.00);

-- Create index for better performance
CREATE INDEX idx_items_name ON items(name);