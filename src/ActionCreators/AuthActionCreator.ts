import * as actions from '@/ActionTypes/AuthActionTypes'
import { User } from '@/Models'

export function login(
    username: string,
    password: string,
    udid: string,
): actions.LoginAction {
    return {
        type: actions.LOGIN,
        username,
        password,
        udid,
    }
}

export function loginSuccess(
    token: string,
    refreshToken: string,
): actions.LoginSuccessAction {
    return {
        type: actions.LOGIN_SUCCESS,
        token,
        refreshToken,
    }
}

export function loginFailure(
    error: Error | string,
): actions.LoginFailureAction {
    return {
        type: actions.LOGIN_FAILURE,
        error,
    }
}

export function register(
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    udid: string,
): actions.RegisterAction {
    return {
        type: actions.REGISTER,
        username,
        password,
        firstname,
        lastname,
        udid,
    }
}

export function registerSuccess(
    token: string,
    refreshToken: string,
    user: User,
): actions.RegisterSuccessAction {
    return {
        type: actions.REGISTER_SUCCESS,
        token,
        refreshToken,
        user,
    }
}

export function registerFailure(
    error: Error | string,
): actions.RegisterFailureAction {
    return {
        type: actions.REGISTER_FAILURE,
        error,
    }
}
