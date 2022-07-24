import axios from 'axios'

import store from '@/store'

import authService from '@/services/auth.service'
const { API_HOST } = import.meta.env

const instance = axios.create({
  baseURL: API_HOST,
  timeout: 6000
})

instance.interceptors.request.use(
  (config) => {
    const {
      auth: { accessToken }
    } = store.getState()

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (err) => Promise.reject(err)
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async function (error) {
    const originalRequest = error.config
    const { response } = error
    if (!response) {
      return Promise.reject(error)
    }

    const { data, status } = response

    if (status === 403 || status === 401) {
      originalRequest._retry = true

      try {
        const {
          auth: { refreshToken }
        } = store.getState()
        if (!refreshToken) {
          store.dispatch({
            type: 'auth/LOGOUT'
          })
          window.location.href = '/login'
          throw new Error('no refresh token')
        }

        const newTokens = await authService.refreshToken({ refresh: refreshToken })
        const { access } = newTokens
        store.dispatch.auth.SET_STATE({
          accessToken: access
        })

        originalRequest.headers.Authorization = `Bearer ${access}`
        axios.defaults.headers.common.Authorization = `Bearer ${access}`

        return axios(originalRequest)
      } catch (err) {
        return Promise.reject(err)
      }
    } else {
      if (data) {
        return Promise.reject(data)
      }
    }

    return Promise.reject(error)
  }
)

export default instance
