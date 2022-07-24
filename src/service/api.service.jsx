import axios from '@/utils/axios.utils'

class APIService {
  constructor(basePath) {
    this.basePath = basePath
  }

  async list(params) {
    const res = await axios.get(this.basePath + '/', { params })
    return res.data
  }

  async create(body) {
    const res = await axios.post(this.basePath + '/', body)
    return res.data
  }

  async get(id) {
    const res = await axios.get(`${this.basePath}/${id}`)
    return res.data
  }

  async update(id, body) {
    const res = await axios.patch(`${this.basePath}/${id}/`, body)
    return res.data
  }

  async update_custom(first_id, second_id, body) {
    const res = await axios.patch(`${this.basePath}/${first_id}/contact/${second_id}/`, body)
    return res.data
  }

  async remove(id) {
    const res = await axios.delete(`${this.basePath}/${id}/`)
    return res.data
  }
}

export default APIService
