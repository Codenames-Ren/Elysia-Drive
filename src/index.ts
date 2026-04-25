import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { authRoutes } from './routes/auth.route';
import { fileRoutes } from './routes/file.route';

const app = new Elysia()
    .use(cors())
    .use(swagger({
        path: '/docs',
        documentation: {
            info: {
                title: 'Elysia-Drive Backend Documentation',
                version: '1.0.0'
            }
        }
    }))

    .get("/", () => ({
        success: true,
        status: "Server is healthy"
    }))

    .use(authRoutes)
    .use(fileRoutes)

const PORT = Number(process.env.PORT) || 3000;

app.listen({
    port: PORT,
    hostname: '0.0.0.0'
});

console.log(`🦊 Server running on port ${PORT}`);