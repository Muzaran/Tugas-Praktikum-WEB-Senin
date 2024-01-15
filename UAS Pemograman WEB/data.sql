-- Tabel Category
CREATE TABLE Category (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Tabel Product
CREATE TABLE Product (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  stock INT NOT NULL,
  categoryId INT,
  FOREIGN KEY (categoryId) REFERENCES Category(id) ON DELETE CASCADE
);

-- Tabel Supplier
CREATE TABLE Supplier (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL
);

-- Tabel PurchaseTransaction
CREATE TABLE PurchaseTransaction (
  id INT AUTO_INCREMENT PRIMARY KEY,
  productId INT,
  supplierId INT,
  quantity INT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (productId) REFERENCES Product(id) ON DELETE CASCADE,
  FOREIGN KEY (supplierId) REFERENCES Supplier(id) ON DELETE CASCADE
);

-- Tabel OutgoingTransaction
CREATE TABLE OutgoingTransaction (
  id INT AUTO_INCREMENT PRIMARY KEY,
  productId INT,
  quantity INT NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (productId) REFERENCES Product(id) ON DELETE CASCADE
);
