import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import News from './News'

const NewsInitialState = {
    news: {
        loading: false,
        error: null,
    },
}

export default buildSlice('news', [News], NewsInitialState).reducer

export interface NewsState {
    news: {
        loading: boolean
        error: any
    }
}
