import {
    buildAsyncState,
    buildAsyncReducers,
    buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import newsService from '@/Services/Api/News/News'

export default {
    initialState: buildAsyncState('news'),
    action: buildAsyncActions('news/news', newsService),
    reducers: buildAsyncReducers({
        errorKey: 'news.error', // Optionally, if you scoped variables, you can use a key with dot notation
        loadingKey: 'news.loading',
    }),
}