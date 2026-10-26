# Oliver Architecture - Version 3

This project demonstrates a simple layered architecture in Express:

- `route -> controller -> service`
- Input validation middleware for `POST /api/users`
- Centralized error handling middleware

## Project Structure

- `src/app.js` - app bootstrap and middleware wiring
- `src/routes/userRoutes.js` - endpoint definitions
- `src/controllers/userController.js` - HTTP orchestration
- `src/services/userService.js` - business logic and in-memory data
- `src/middleware/validateCreateUser.js` - request validation
- `src/middleware/errorHandler.js` - centralized error handling

## Run

```powershell
npm install
npm start
```

Server starts on `http://localhost:3000`.

## Endpoints

- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users`

### POST payload

```json
{
  "name": "Luna",
  "email": "luna@example.com"
}
```

### Example test commands

```powershell
curl http://localhost:3000/api/users
curl http://localhost:3000/api/users/1
curl -Method POST http://localhost:3000/api/users -ContentType "application/json" -Body '{"name":"Luna","email":"luna@example.com"}'
```
