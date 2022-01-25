import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import Login from './Login'

// This state is common to all the "user" module, and can be modified by any "user" reducers
const loginInitialState = {
    login: {
        loading: false,
        error: null,
    },
}

export default buildSlice('auth', [Login], loginInitialState).reducer

export interface LoginState {
    login: {
        loading: boolean
        error: any
    }
}
