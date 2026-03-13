import { Hono } from 'hono'

const userRoutes = new Hono()

userRoutes.get('/', (c) => c.text('User Home'))

userRoutes.get('/profile', (c) =>
  c.json({
    name: 'John Doe'
  })
)

export const registerUserRoutes = (app: Hono) => {
  app.route('/users', userRoutes)
}

