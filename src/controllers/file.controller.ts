import { fileService } from "../services/file.service"

export const fileController = {
    async upload({ body, user }: any) {
        console.log('CTX USER:', user)

        const { file } = body

        const result = await fileService.upload(file, user.id)

        return {
            success: true,
            data: result
        }
    },

    //list file
    async getFiles({ user }: any) {
        const files = await fileService.getFiles(user.id)

        return {
            success: true,
            data: files
        }
    },

    //delete file
    async delete({ params, user }: any) {
        const result = await fileService.deleteFile(params.id, user.id)

        return {
            success: true,
            data: result
        }
    }
}