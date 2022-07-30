import axios from 'axios'
const { VITE_API_HOST } = import.meta.env

// const authService = new APIService('/user/partnermonitor')

const DEFAULT_STATE = {
  accessToken: null,
  refreshToken: null,
  profile: null,
  isLogin: false
}
export const auth = {
  state: { ...DEFAULT_STATE },
  reducers: {
    SET_AUTH_STATE (state, payload) {
      return {
        ...state,
        ...payload
      }
    },
    LOGOUT () {
      return {
        ...DEFAULT_STATE
      }
    },
    SET_PROFILE (state, payload) {
      return {
        ...state,
        profile: payload
      }
    },
    IS_LOGIN (state, payload) {
      return {
        ...state,
        isLogin: payload
      }
    }
  },
  effects: dispatch => ({
    async login (payload) {
      // const res = await authService.login(payload)
      const header = {
        username: payload.username,
        password: payload?.password
      }
      const response = await axios.post(
        `${VITE_API_HOST}/auth/api/token/`,
        header
      )
      const { access, refresh } = response.data

      dispatch.auth.SET_PROFILE(payload?.username)
      dispatch.auth.IS_LOGIN(true)
      dispatch.auth.SET_AUTH_STATE({
        accessToken: access,
        refreshToken: refresh
      })
      return response
    },
    async logout () {
      dispatch.auth.LOGOUT()

    }
  }),
  selectors: slice => ({
    isAuthenticated () {
      return slice(auth => auth.accessToken !== null)
    }
  })
}
