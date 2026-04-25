import { Elysia } from 'elysia'
import { authMiddleware } from '../middlewares/auth.middleware'
import { fileController } from '../controllers/file.controller'

export const fileRoutes = new Elysia({ prefix: '/files' })
    .get('/', fileController.getFiles, {
        beforeHandle: authMiddleware
    })

    .post('/upload', fileController.upload, {
        beforeHandle: authMiddleware
    })

    .delete('/:id', fileController.delete, {
        beforeHandle: authMiddleware
    })