# ZyakaExpress : Food Delivery System

## Overview
ZyakaExpress is a microservices-based food delivery system. It consists of several independent services, an API gateway, and is fully containerized using Docker. CI/CD is managed via GitHub Actions.

---

## Project Structure

- **services/**
  - **user-service**: Manages user data and authentication details.
  - **auth-service**: Handles authentication and authorization.
  - **restaurant-service**: Manages restaurant data.
  - **order-service**: Handles order processing and management.
- **api-gateway/**: Central entry point for all client requests, routing them to the appropriate service.
- **.github/workflows/**: Contains CI/CD workflow for building and pushing Docker images.

---

## Services

### user-service
- **Tech Stack**: Node.js, Express, Prisma, PostgreSQL, JWT, bcrypt
- **Docker**: Exposes port 5000
- **Main script**: `src/index.js`

### auth-service
- **Tech Stack**: Node.js, Express, Prisma, JWT, bcrypt, axios
- **Docker**: Exposes port 5001
- **Main script**: `src/index.js`

### restaurant-service
- **Tech Stack**: Node.js, Express, Mongoose, MongoDB
- **Docker**: Exposes port 5002
- **Main script**: `index.js`

### order-service
- **Tech Stack**: Node.js, Express, Mongoose, MongoDB
- **Docker**: Exposes port 5003
- **Main script**: `index.js`

---

## API Gateway

- **Tech Stack**: Node.js, Express, http-proxy-middleware, axios, morgan
- **Docker**: Exposes port 8080
- **Main script**: `index.js`
- **Routes**:
  - `/api/v1/users` → user-service
  - `/api/v1/auth` → auth-service
  - `/api/v1/restaurant` → restaurant-service
  - `/api/v1/order` → order-service

---

## Docker & Deployment

- **docker-compose.yml**: Orchestrates all services and the API gateway.
- **Dockerfiles**: Each service and the API gateway has its own Dockerfile for containerization.
- **Environment Variables**: Each service uses environment variables for configuration (e.g., `DATABASE_URL`, `JWT_SECRET`, `MONGO_URI`).

---

## CI/CD

- **GitHub Actions**: Workflow in `.github/workflows/docker-push.yml`
  - On push to `main`, builds and pushes Docker images for each service and the API gateway to Docker Hub.
  - Triggers deployment hooks for each service via Render.

---

## Getting Started

1. **Clone the repository**
2. **Set up environment variables** for each service (see `docker-compose.yml` for required variables).
3. **Build and run with Docker Compose**:
   ```sh
   docker-compose up --build
   ```
4. **Access the API Gateway** at `http://localhost:8080`

---
