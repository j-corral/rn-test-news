import {
    buildAsyncState,
    buildAsyncReducers,
    buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import loginService from '@/Services/Api/Authentification/Login'

export default {
    initialState: buildAsyncState('login'),
    action: buildAsyncActions('authentification/login', loginService),
    reducers: buildAsyncReducers({
        errorKey: 'login.error', // Optionally, if you scoped variables, you can use a key with dot notation
        loadingKey: 'login.loading',
    }),
}
