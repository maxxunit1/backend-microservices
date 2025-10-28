// Logger Middleware
const loggerMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  
  console.log(`[${timestamp}] ${method} ${url}`);
  
  // Log response time
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${timestamp}] ${method} ${url} - ${res.statusCode} - ${duration}ms`);
  });
  
  next();
};

// Error Handler Middleware
const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  res.status(statusCode).json({
    success: false,
    error: message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

// Not Found Handler
const notFoundHandler = (req, res) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.method} ${req.url} not found`
  });
};

// Auth Middleware (Mock)
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'No token provided'
    });
  }
  
  // Mock token validation
  if (!token.startsWith('mock-jwt-token')) {
    return res.status(401).json({
      success: false,
      error: 'Invalid token'
    });
  }
  
  // Attach user to request
  req.user = {
    id: 1,
    email: 'user@example.com'
  };
  
  next();
};

// Validation Middleware
const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        success: false,
        error: error.details[0].message
      });
    }
    
    next();
  };
};

module.exports = {
  loggerMiddleware,
  errorHandler,
  notFoundHandler,
  authMiddleware,
  validateRequest
};

// Upgrade error handling in database layer - 2025-10-16 17:24:16
# Improved: 2025-10-16 17:24:16
# Additional configuration

// Correct notification system - 2025-10-27 14:00:10
if data is None:
    raise ValueError('Data cannot be None')
return validate_data(data)

// Optimize backup routine - 2025-10-28 13:47:41
# Improved readability
data = [
    item
    for item in collection
    if item.is_valid()
]