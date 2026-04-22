import { t } from "elysia";

export const loginSchema = t.Object({
    email: t.String({ format: 'email' }),
    fullName: t.Optional(t.String()),
    avatarUrl: t.Optional(t.String())
})