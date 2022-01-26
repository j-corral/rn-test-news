import { News } from '@/Models'

export const GET_NEWS = 'NewsActionTypes/NEWS'
export interface GetNewsAction {
    type: typeof GET_NEWS
    token: string
}

export const GET_NEWS_SUCCESS = 'NewsActionTypes/NEWS_SUCCESS'
export interface GetNewsSuccessAction {
    type: typeof GET_NEWS_SUCCESS
    news: News[]
}

export const GET_NEWS_FAILURE = 'NewsActionTypes/NEWS_FAILURE'
export interface GetNewsFailureAction {
    type: typeof GET_NEWS_FAILURE
    error: Error | string
}

export type NewsActions = GetNewsAction | GetNewsSuccessAction | GetNewsFailureAction