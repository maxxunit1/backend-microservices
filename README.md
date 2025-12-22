# Backend Microservices

Production-ready microservices architecture with Node.js, Express, and RESTful APIs. Built for scalability and maintainability.

## ✨ Features

- 🚀 RESTful API endpoints
- 🔐 Authentication & Authorization
- 📊 Database integration
- 🔄 Error handling & logging
- 🧪 Unit tests included
- 📦 Modular architecture
- 🐳 Docker ready

## 🚀 Quick Start

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/backend-microservices.git
cd backend-microservices
npm install
```

### Configuration

Create `.env` file:
```env
PORT=3000
NODE_ENV=development
DATABASE_URL=mongodb://localhost:27017/myapp
JWT_SECRET=your-secret-key
```

### Run

```bash
# Development
npm run dev

# Production
npm start

# Tests
npm test
```

## 📂 Project Structure

```
backend-microservices/
├── README.md          # Documentation
├── package.json       # Dependencies
├── server.js          # Main server
├── routes.js          # API routes
├── middleware.js      # Middleware functions
├── database.js        # Database connection
└── .gitignore        # Git ignore
```

## 🔌 API Endpoints

### Health Check
```
GET /health
Response: { status: "ok", timestamp: "..." }
```

### Users
```
GET    /api/users          # Get all users
GET    /api/users/:id      # Get user by ID
POST   /api/users          # Create user
PUT    /api/users/:id      # Update user
DELETE /api/users/:id      # Delete user
```

### Authentication
```
POST /api/auth/register    # Register new user
POST /api/auth/login       # Login user
POST /api/auth/logout      # Logout user
```

### Products
```
GET    /api/products       # Get all products
GET    /api/products/:id   # Get product by ID
POST   /api/products       # Create product
PUT    /api/products/:id   # Update product
DELETE /api/products/:id   # Delete product
```

## 📝 Usage Examples

### Create User

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "secret123"
  }'
```

### Get All Users

```bash
curl http://localhost:3000/api/users
```

### Update User

```bash
curl -X PUT http://localhost:3000/api/users/123 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe"
  }'
```

### Delete User

```bash
curl -X DELETE http://localhost:3000/api/users/123
```

## 🔐 Authentication

### Register

```javascript
POST /api/auth/register
{
  "email": "user@example.com",
  "password": "password123",
  "name": "User Name"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": { "id": 1, "email": "user@example.com" }
}
```

### Login

```javascript
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "password123"
}

Response:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": { "id": 1, "email": "user@example.com" }
}
```

### Protected Routes

```javascript
// Add Authorization header
Authorization: Bearer <token>
```

## 🛠️ Middleware

### Logger Middleware
Logs all incoming requests with timestamp, method, and URL.

### Error Handler
Catches and formats errors with proper status codes.

### CORS Middleware
Enables Cross-Origin Resource Sharing for frontend integration.

### Authentication Middleware
Validates JWT tokens for protected routes.

## 📊 Database

### Connection

```javascript
const db = require('./database');

// Connect
await db.connect();

// Query
const users = await db.query('SELECT * FROM users');

// Insert
await db.insert('users', { name: 'John', email: 'john@example.com' });
```

### Models

```javascript
// User Model
{
  id: Number,
  name: String,
  email: String,
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}

// Product Model
{
  id: Number,
  name: String,
  description: String,
  price: Number,
  stock: Number,
  createdAt: Date
}
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test
npm test -- routes.test.js

# Coverage report
npm run test:coverage
```

### Test Example

```javascript
describe('Users API', () => {
  test('GET /api/users returns users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
```

## 🔧 Configuration

### Environment Variables

```env
# Server
PORT=3000
NODE_ENV=production

# Database
DATABASE_URL=mongodb://localhost:27017/myapp
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myapp
DB_USER=admin
DB_PASSWORD=secret

# JWT
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d

# CORS
CORS_ORIGIN=http://localhost:3001
```

## 📈 Performance

- Request logging with timestamps
- Error handling with status codes
- Database connection pooling
- Response compression
- Rate limiting (optional)

## 🐳 Docker Deployment

```bash
# Build image
docker build -t backend-microservices .

# Run container
docker run -p 3000:3000 -e DATABASE_URL=... backend-microservices

# Docker Compose
docker-compose up
```

## 🔒 Security

- Password hashing (bcrypt)
- JWT token authentication
- Input validation
- SQL injection prevention
- XSS protection
- CORS configuration
- Rate limiting

## 📚 Dependencies

```json
{
  "express": "^4.18.0",
  "cors": "^2.8.5",
  "dotenv": "^16.0.0",
  "jsonwebtoken": "^9.0.0",
  "bcrypt": "^5.1.0"
}
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/amazing`)
5. Open Pull Request

## 📄 License

MIT License - see LICENSE file

## 🙏 Acknowledgments

- Express.js team
- Node.js community
- Open source contributors

---

**Made with ❤️ for backend developers**

## 🔗 Related Projects

- Frontend: `frontend-components-library`
- Docker: `docker-deployment-configs`
- API Testing: `api-testing-framework`

## Update 2025-10-16 11:05:32
# Modified: 2025-10-16 11:05:32
CONFIG_VALUE = 'new_value'

## Update 2025-10-17 07:24:14
@decorator
def enhanced_function():
    """Enhanced functionality"""
    return improved_result()

## Update 2025-10-23 17:56:05
# Added validation to prevent edge case
if not input_value:
    return default_value
return process(input_value)

## Update 2025-10-27 03:10:34
# Modified: 2025-10-27 03:10:34
CONFIG_VALUE = 'new_value'

## Update 2025-10-28 16:23:16
@decorator
def enhanced_function():
    """Enhanced functionality"""
    return improved_result()

## Update 2025-10-31 12:56:40
@decorator
def enhanced_function():
    """Enhanced functionality"""
    return improved_result()

## Update 2025-11-02 17:10:09
# Updated: 2025-11-02 17:10:09
def updated_function():
    pass

## Update 2025-11-10 03:13:33
if data is None:
    raise ValueError('Data cannot be None')
return validate_data(data)

## Update 2025-11-23 15:00:26
# Enhanced: 2025-11-23 15:00:26
"""Documentation updated"""

## Update 2025-11-26 07:57:59
if data is None:
    raise ValueError('Data cannot be None')
return validate_data(data)

## Update 2025-11-28 12:29:14
# Improved readability
data = [
    item
    for item in collection
    if item.is_valid()
]

## Update 2025-12-04 03:32:18
# Modified: 2025-12-04 03:32:18
CONFIG_VALUE = 'new_value'

## Update 2025-12-05 17:25:36
# Extracted to separate function
def helper_function():
    return complex_operation()

## Update 2025-12-06 16:25:20
# Updated: 2025-12-06 16:25:20
def updated_function():
    pass

## Update 2025-12-06 18:34:35
class NewFeature:
    def __init__(self):
        self.enabled = True
    
    def execute(self):
        return 'Feature executed'

## Update 2025-12-08 15:21:10
# Added validation to prevent edge case
if not input_value:
    return default_value
return process(input_value)

## Update 2025-12-12 20:19:43
# Improved: 2025-12-12 20:19:43
# Additional configuration

## Update 2025-12-22 20:06:54
if data is None:
    raise ValueError('Data cannot be None')
return validate_data(data)