import api from '@/Services'
import { News } from '@/Models/News'

interface newsResponse {
    // data: Object
    data: News[]
}

export async function fetchNews(params: Object): Promise<newsResponse> {
    const response = await api.get('/news', params)
    //console.log('news response: ', JSON.stringify(response))

    return response
}