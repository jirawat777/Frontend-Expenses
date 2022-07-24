import axios from 'axios'

const login = async (body) => {
  const res = await axios.post('/token/', body)
  return res.data
}

const refreshToken = async (body) => {
  const res = await axios.post('/token/refresh/', body)
  return res.data
}

export default {
  login,
  refreshToken
}
