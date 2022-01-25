import api from '@/Services'
import handleError from '@/Services/utils/handleError'

interface loginParamsProps {
    mail: string
    password: string
}

export default async (params: loginParamsProps) => {
    if (!params.mail) {
        return handleError({ message: 'Mail required' })
    }
    if (!params.password) {
        return handleError({ message: 'Password required' })
    }

    const response = await api.post('/auth/login', params)

    setTimeout(() => {
        console.log('Réponse: ', response)
    }, 3000)

    return response.data
}
