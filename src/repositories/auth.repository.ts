import { db } from '../config/db'

export const authRepository = {
    upsertUser: (data: any) => {
        return db.user.upsert({
            where: { email: data.email },
            update: {
                fullName: data.fullName,
                avatarUrl: data.avatarUrl
            },
            create: {
                email: data.email,
                fullName: data.fullName,
                avatarUrl: data.avatarUrl
            }
        })
    }
}