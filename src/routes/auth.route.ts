import { Elysia } from 'elysia'
import { authController } from '../controllers/auth.controller'
import { loginSchema } from '../models/auth.models'

export const authRoutes = new Elysia({ prefix: '/auth' })
    .post('/login', authController.login, {
        body: loginSchema
    })