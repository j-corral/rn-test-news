import * as actions from '@/ActionTypes/NewsActionTypes'
import { News } from '@/Models'

export function getNews(token: string) : actions.GetNewsAction {
    return {
        type: actions.GET_NEWS,
        token,
    }
}

export function getNewsSuccess(
    news: News[],
): actions.GetNewsSuccessAction {
    // console.log('getNewsSuccess: ', title)
    return {
        type: actions.GET_NEWS_SUCCESS,
        news: news
    }
}

export function getNewsFailure(
    error: Error | string,
): actions.GetNewsFailureAction {
    return {
        type: actions.GET_NEWS_FAILURE,
        error,
    }
}