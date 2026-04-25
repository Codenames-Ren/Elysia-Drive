import { authRepository } from '../repositories//auth.repository'
import { verifyGoogleToken } from '../utils/google'

export const authService = {
    async login(data: any) {
        return authRepository.upsertUser(data)
    },

    async loginWithGoogle(idToken: string) {
        const profile = await verifyGoogleToken(idToken)

        return authRepository.upsertUser({
            email: profile.email,
            fullName: profile.fullName,
            avatarUrl: profile.avatarUrl,
            provider: 'google',
            providerId: profile.providerId
        })
    }
}