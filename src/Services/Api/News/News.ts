import api from '@/Services'
import handleError from '@/Services/utils/handleError'

interface newsParamsProps {
    token: string
}

export default async (params: newsParamsProps) => {
    if (params?.token?.length <= 0) {
        return handleError({ message: 'Token required' })
    }

    const response = await api.post('news', params)

    setTimeout(() => {
        console.log('Réponse: ', response)
    }, 3000)

    return response.data
}
