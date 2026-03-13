import type { Hono } from 'hono'

export const registerRootRoutes = (app: Hono) => {
  app.get('/', (c) => {
    return c.text('Hello Hono!')
  })
}

