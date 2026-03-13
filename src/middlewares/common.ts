import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import type { Hono } from 'hono'

export const registerCommonMiddlewares = (app: Hono) => {
  app.use('*', logger())

  app.use(
    '*',
    cors({
      origin: '*', // adjust in production
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowHeaders: ['Content-Type', 'Authorization'],
      exposeHeaders: ['Content-Length', 'X-Request-Id'],
      maxAge: 3600,
      credentials: true
    })
  )
}

