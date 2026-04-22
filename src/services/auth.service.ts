import { authRepository } from '../repositories//auth.repository'

export const authService = {
    async login(data: any) {
        return authRepository.upsertUser(data)
    }
}