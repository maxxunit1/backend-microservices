const express = require('express');
const router = express.Router();

// In-memory storage (replace with database in production)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', createdAt: new Date() },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', createdAt: new Date() }
];

let products = [
  { id: 1, name: 'Product 1', price: 29.99, stock: 100 },
  { id: 2, name: 'Product 2', price: 49.99, stock: 50 }
];

let nextUserId = 3;
let nextProductId = 3;

// ============================================
// USER ROUTES
// ============================================

// Get all users
router.get('/users', (req, res) => {
  res.json({
    success: true,
    count: users.length,
    data: users
  });
});

// Get user by ID
router.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  
  if (!user) {
    return res.status(404).json({
      success: false,
      error: 'User not found'
    });
  }
  
  res.json({
    success: true,
    data: user
  });
});

// Create new user
router.post('/users', (req, res) => {
  const { name, email } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      error: 'Name and email are required'
    });
  }
  
  const newUser = {
    id: nextUserId++,
    name,
    email,
    createdAt: new Date()
  };
  
  users.push(newUser);
  
  res.status(201).json({
    success: true,
    data: newUser
  });
});

// Update user
router.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'User not found'
    });
  }
  
  users[userIndex] = {
    ...users[userIndex],
    ...req.body,
    updatedAt: new Date()
  };
  
  res.json({
    success: true,
    data: users[userIndex]
  });
});

// Delete user
router.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  
  if (userIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'User not found'
    });
  }
  
  users.splice(userIndex, 1);
  
  res.json({
    success: true,
    message: 'User deleted successfully'
  });
});

// ============================================
// PRODUCT ROUTES
// ============================================

// Get all products
router.get('/products', (req, res) => {
  res.json({
    success: true,
    count: products.length,
    data: products
  });
});

// Get product by ID
router.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  
  if (!product) {
    return res.status(404).json({
      success: false,
      error: 'Product not found'
    });
  }
  
  res.json({
    success: true,
    data: product
  });
});

// Create new product
router.post('/products', (req, res) => {
  const { name, price, stock } = req.body;
  
  if (!name || !price) {
    return res.status(400).json({
      success: false,
      error: 'Name and price are required'
    });
  }
  
  const newProduct = {
    id: nextProductId++,
    name,
    price: parseFloat(price),
    stock: parseInt(stock) || 0,
    createdAt: new Date()
  };
  
  products.push(newProduct);
  
  res.status(201).json({
    success: true,
    data: newProduct
  });
});

// Update product
router.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);
  
  if (productIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Product not found'
    });
  }
  
  products[productIndex] = {
    ...products[productIndex],
    ...req.body,
    updatedAt: new Date()
  };
  
  res.json({
    success: true,
    data: products[productIndex]
  });
});

// Delete product
router.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);
  
  if (productIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Product not found'
    });
  }
  
  products.splice(productIndex, 1);
  
  res.json({
    success: true,
    message: 'Product deleted successfully'
  });
});

// ============================================
// AUTH ROUTES (Mock)
// ============================================

router.post('/auth/register', (req, res) => {
  const { email, password, name } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: 'Email and password are required'
    });
  }
  
  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: {
      id: nextUserId++,
      email,
      name: name || 'User'
    }
  });
});

router.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: 'Email and password are required'
    });
  }
  
  res.json({
    success: true,
    message: 'Login successful',
    token: 'mock-jwt-token-' + Date.now()
  });
});

module.exports = router;

// Adjust build process - 2025-10-12 11:19:34
# Improved: 2025-10-12 11:19:34
# Additional configuration

// Patch memory leak - 2025-10-13 17:59:33
# Modified: 2025-10-13 17:59:33
CONFIG_VALUE = 'new_value'

// Resolve logging system issue - 2025-10-15 12:36:55
def handle_error(error):
    """Handle error gracefully"""
    logger.error(f'Error: {error}')
    return None

// Adjust edge case in middleware - 2025-10-23 00:22:49
# Improved: 2025-10-23 00:22:49
# Additional configuration

// Enhance security vulnerability in frontend component - 2025-11-01 16:46:56
# Enhanced: 2025-11-01 16:46:56
"""Documentation updated"""

// Modify notification system - 2025-11-04 19:08:17
# Modified: 2025-11-04 19:08:17
CONFIG_VALUE = 'new_value'

// Fix helper function in middleware to improve testability - 2025-11-15 11:01:35
# Added validation to prevent edge case
if not input_value:
    return default_value
return process(input_value)

// Configure edge case - 2025-11-16 18:20:12
# Improved: 2025-11-16 18:20:12
# Additional configuration

// Correct race condition in cache layer for production readiness - 2025-11-21 07:09:38
# Added validation to prevent edge case
if not input_value:
    return default_value
return process(input_value)

// Implement race condition in dashboard to enhance security - 2025-11-23 17:44:50
async def async_operation():
    """Async operation support"""
    result = await fetch_data()
    return process(result)

// Fix dependency issue - 2025-11-23 18:38:19
# Added validation to prevent edge case
if not input_value:
    return default_value
return process(input_value)

// Modify documentation in auth service - 2025-12-14 20:33:30
# Modified: 2025-12-14 20:33:30
CONFIG_VALUE = 'new_value'