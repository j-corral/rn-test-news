import api from '@/Services'
import handleError from '@/Services/utils/handleError'

interface loginParamsProps {
    email: string
    password: string
}

export default async (params: loginParamsProps) => {
    if (!params.email) {
        return handleError({ message: 'Mail required' })
    }
    if (!params.password) {
        return handleError({ message: 'Password required' })
    }

    const response = await api.post('/auth/token', params)


    setTimeout(() => {
        console.log('Réponse: ', response)
    }, 3000)

    return response.data
}
