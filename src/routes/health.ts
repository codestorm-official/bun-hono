import type { Hono } from 'hono'

export const registerHealthRoutes = (app: Hono) => {
  app.get('/health', (c) => {
    return c.json({
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    })
  })
}

