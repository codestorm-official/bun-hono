import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.json({
    message: 'Welcome to Bun + Hono API',
  });
});

app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    uptime: process.uptime(),
    env: Bun.env.NODE_ENV ?? 'development',
  });
});

app.get('/users', (c) => {
  return c.json({
    message: 'User home',
  });
});

app.get('/users/profile', (c) => {
  return c.json({
    message: 'User profile',
  });
});

const port = Number(Bun.env.PORT ?? 3000);

export default {
  port,
  fetch: app.fetch,
};