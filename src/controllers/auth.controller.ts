import { authService } from '../services/auth.service'
import { signToken } from '../utils/jwt'

export const authController = {
    async login({ body }: any) {
        const user = await authService.login(body)

        const token = signToken({
            id: user.id,
            email: user.email
        })

        return {
            success: true,
            data: user,
            token: token
        }
    },

    async googleLogin({ body }: any) {
        const { idToken } = body

        const user = await authService.loginWithGoogle(idToken)

        const token = signToken({
            id: user.id,
            email: user.email
        })

        return {
            success: true,
            data: user,
            token
        }
    }
}