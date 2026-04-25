import { Elysia, t } from 'elysia'
import { authController } from '../controllers/auth.controller'

export const authRoutes = new Elysia({ prefix: '/auth' })
    .post('/google', authController.googleLogin, {
        body: t.Object({
            idToken: t.String()
        })
    })