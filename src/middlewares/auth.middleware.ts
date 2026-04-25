import { verifyToken } from '../utils/jwt'

export const authMiddleware = (ctx: any) => {
    const authHeader = ctx.headers.authorization

    if (!authHeader) {
        ctx.set.status = 401
        return { message: 'Unauthorized' }
    }

    const token = authHeader.split(' ')[1]

    if (!token) {
        ctx.set.status = 401
        return { message: 'Invalid token' }
    }

    try {
        const user = verifyToken(token)

        ctx.user = user

    } catch {
        ctx.set.status = 401
        return { message: 'Invalid token' }
    }
}