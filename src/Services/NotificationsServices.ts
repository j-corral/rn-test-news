import api from '@/Services'

interface notificationsResponse {
    data: Object
}

export async function fetchNotifications(
    page: number,
    limit: number,
): Promise<notificationsResponse> {
    const response = await api.get(`/alerts?page=${page}&limit=${limit}`)

    return response
}
