import { Hono } from 'hono'
import { registerCommonMiddlewares } from './middlewares/common'
import { registerRootRoutes } from './routes/root'
import { registerHealthRoutes } from './routes/health'
import { registerUserRoutes } from './routes/user'

export const createApp = () => {
  const app = new Hono()

  registerCommonMiddlewares(app)

  registerRootRoutes(app)
  registerHealthRoutes(app)
  registerUserRoutes(app)

  app.onError((err, c) => {
    console.error(`[Error] ${err.message}`)
    console.error(err.stack)

    if (process.env.NODE_ENV === 'production') {
      return c.json(
        {
          error: {
            message: 'Internal Server Error',
            id: crypto.randomUUID()
          }
        },
        500
      )
    }

    return c.json(
      {
        error: {
          message: err.message,
          stack: err.stack
        }
      },
      500
    )
  })

  app.notFound((c) =>
    c.json(
      {
        status: 404,
        message: 'Not Found'
      },
      404
    )
  )

  return app
}

