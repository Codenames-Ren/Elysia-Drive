import { supabase } from "../config/supabase";
import { db } from "../config/db";

export const fileService = {
    async upload(file: File, userId: string) {
        const fileName = `${Date.now()}-${file.name}`

        //upload to supabase
        const { data, error } = await supabase.storage
            .from('drive')
            .upload(fileName, file)

        if (error) throw error

        //get public URL
        const { data: publicUrl } = supabase.storage
            .from('drive')
            .getPublicUrl(fileName)

        //save to DB
        const saved = await db.file.create({
            data: {
                name: file.name,
                url: publicUrl.publicUrl,
                path: fileName,
                size: file.size,
                mimeType: file.type,
                userId
            }
        })

        return saved
    },

    //list file
    async getFiles(userId: string) {
        return db.file.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        })
    },

    //delete file
    async deleteFile(id: string, userId: string) {
        const file = await db.file.findFirst({
            where: { id, userId }
        })

        if (!file) {
            throw new Error('File not found')
        }

        //delete from supa bucket
        await supabase.storage.from('drive').remove([file.path])

        //delete from db
        await db.file.delete({
            where: { id }
        })

        return file
    }
}