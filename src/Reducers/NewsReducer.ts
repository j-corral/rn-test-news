/* eslint-disable prettier/prettier */
import * as actions from '@/ActionTypes/NewsActionTypes'
import { News } from '@/Models'
export interface NewsState {
    isLoading: boolean
    error?: any
    news?: News[]
}

const initialState: NewsState = {
    isLoading: false,
    error: null,
    news: [],
}

export default function newsReducer(
    state: NewsState = initialState,
    action: actions.NewsActions,
): NewsState {
    switch (action.type) {
    case actions.GET_NEWS:
        return {
            isLoading: true,
            error: null,
        }
    case actions.GET_NEWS_SUCCESS:
        //console.log('GET_NEWS_SUCCESS: ', action)
        return {
            isLoading: false,
            error: null,
            news: action.news,
        }
    case actions.GET_NEWS_FAILURE:
        return {
            isLoading: false,
            error: action.error,
        }
    default:
        return state
    }
}