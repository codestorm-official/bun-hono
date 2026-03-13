# Bun + Hono 🔥

A template for deploying a Bun + Hono API, production ready with bun binary compilation.

## ✨ Features

- [Bun](https://bun.sh) JavaScript Runtime
- [Hono](https://hono.dev/) Web Framework
- Binary compilation for production
- Logger Middleware
- CORS Support
- TypeScript

## 💻 Requirements

- [Bun](https://bun.sh) `>= 1.x` sudah terinstall di mesin lokal
- Git (opsional, kalau clone repo)

## 💁‍♀️ How to use

### 1. Clone & instal dependency

```bash
# Clone repo
git clone <repo-url> bun-hono
cd bun-hono

# Install dependencies
bun install
```

### 2. Setup environment variable

```bash
# Copy file contoh env
cp .env.example .env

# Edit nilai sesuai kebutuhan (opsional)
$EDITOR .env
```

**Variabel yang tersedia:**

- `PORT` – port HTTP server (default: `3000`)
- `NODE_ENV` – `development` / `production`

### 3. Jalankan server (development)

```bash
# Start development server dengan hot reload
bun run dev

# Akses di browser
# http://localhost:3000
```

### 4. Build & run (production lokal)

```bash
# Build the binary
bun run build

# Jalankan binary hasil build
./server

# Akses di browser
# http://localhost:3000
```

### Docker

```bash
# Build the image (includes binary compilation)
docker build -t bun-hono-api .

# Run the container
docker run -p 3000:3000 bun-hono-api
```

### Railway Deployment

The template is configured to automatically:
1. Build the binary during Docker build stage
2. Run the optimized binary in production

### Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check endpoint
- `GET /users` - User home
- `GET /users/profile` - User profile endpoint

## 🔧 Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)

In development:
- Uses hot reload
- Detailed error messages
- CORS allows all origins

In production:
- Runs compiled binary
- Limited error information
- Configured CORS
- Optimized for performance