export const SET_LYRICS = 'LyricsActionTypes/SET_LYRICS'
export interface SetLyricsAction {
    type: typeof SET_LYRICS
    lyrics: string
}

export const GET_LYRICS = 'LyricsActionTypes/GET_LYRICS'
export interface GetLyricsAction {
    type: typeof GET_LYRICS
    artist: string
    song: string
}

export const GET_LYRICS_REQUEST = 'LyricsActionTypes/GET_LYRICS_REQUEST'
export interface GetLyricsRequestAction {
    type: typeof GET_LYRICS_REQUEST
}

export const GET_LYRICS_SUCCESS = 'LyricsActionTypes/GET_LYRICS_SUCCESS'
export interface GetLyricsSuccessAction {
    type: typeof GET_LYRICS_SUCCESS
    lyrics: string
}

export const GET_LYRICS_FAILURE = 'LyricsActionTypes/GET_LYRICS_FAILURE'
export interface GetLyricsFailureAction {
    type: typeof GET_LYRICS_FAILURE
    error: Error | string
}

export type LyricsAction =
    | SetLyricsAction
    | GetLyricsAction
    | GetLyricsRequestAction
    | GetLyricsSuccessAction
    | GetLyricsFailureAction
