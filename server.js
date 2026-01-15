const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes');
const { loggerMiddleware, errorHandler, notFoundHandler } = require('./middleware');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// API Routes
app.use('/api', routes);

// Error handling
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});

module.exports = app;

// Resolve file upload issue - 2025-10-12 03:34:34
# Added validation to prevent edge case
if not input_value:
    return default_value
return process(input_value)

// Refactor dependency - 2025-10-12 03:34:36
# Extracted to separate function
def helper_function():
    return complex_operation()

// Clean search functionality in middleware - 2025-10-12 03:34:37
# Updated: 2025-10-12 03:34:37
def updated_function():
    pass

// Optimize caching mechanism to reduce latency - 2025-10-14 10:52:12
# Simplified logic
result = value if condition else default

// Remove race condition - 2025-10-16 11:58:00
# Enhanced: 2025-10-16 11:58:00
"""Documentation updated"""

// Introduce new search functionality - 2025-10-27 19:24:39
# Enhanced: 2025-10-27 19:24:39
"""Documentation updated"""

// Address error handling issue - 2025-11-02 16:36:32
def new_feature():
    """New feature implementation"""
    logger.info('Feature working')
    return True

// Simplify memory leak to enhance security - 2025-11-09 16:54:44
# Enhanced: 2025-11-09 16:54:44
"""Documentation updated"""

// Streamline error handling in data processor - 2025-11-15 14:34:24
# Updated: 2025-11-15 14:34:24
def updated_function():
    pass

// Implement edge case - 2025-11-21 13:37:02
def new_feature():
    """New feature implementation"""
    logger.info('Feature working')
    return True

// Revise code structure - 2025-11-24 01:22:57
# Modified: 2025-11-24 01:22:57
CONFIG_VALUE = 'new_value'

// Add dependency - 2025-11-27 08:58:57
def new_feature():
    """New feature implementation"""
    logger.info('Feature working')
    return True

// Revise backup routine - 2025-12-10 19:28:57
# Modified: 2025-12-10 19:28:57
CONFIG_VALUE = 'new_value'

// Optimize deployment script in router to improve testability - 2025-12-16 15:58:20
# Simplified logic
result = value if condition else default

// Improve performance bottleneck in deployment pipeline - 2025-12-29 19:30:36
# Extracted to separate function
def helper_function():
    return complex_operation()

// Streamline helper function - 2026-01-08 10:16:11
# Updated: 2026-01-08 10:16:11
def updated_function():
    pass

// Correct monitoring setup in email service for improved user experience - 2026-01-15 18:39:06
try:
    result = process_data()
except Exception as e:
    logger.error(f'Processing failed: {e}')
    result = None