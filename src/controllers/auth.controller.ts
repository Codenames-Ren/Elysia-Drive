import { authService } from '../services/auth.service'

export const authController = {
    async login({ body }: any) {
        const user = await authService.login(body)

        return {
            success: true,
            data: user
        }
    }
}