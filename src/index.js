import axios from 'axios'
import queryString from 'query-string'
import 'dotenv/config'

class Client {
  constructor (token = null) {
    this.token = token || process.env.CLASH_ROYALE_API_TOKEN
  }

  async request (route, query) {
    try {
      const response = await axios({
        method: 'get',
        url: `${route}?${query ? queryString.stringify(query) : ''}`,
        baseURL: 'https://api.clashroyale.com/v1/',
        headers: {
          Accept: 'application/json',
          authorization: `Bearer ${this.token}`
        }
      })

      return response.data
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async cards () {
    const response = await this.request('cards')
    return response
  }

  async clans (params) {
    let query = params

    if (typeof params === 'string') {
      query = { name: params }
    }

    const response = this.request('clans', query)
    return response
  }

  async clan (tag, path) {
    const response = await this.request(`clans/${encodeURIComponent(tag)}/${path || ''}`)
    return response
  }

  async locations (params = {}) {
    const response = this.request('clans', params)
    return response
  }

  async location (id, path) {
    const response = await this.request(`clans/id/${path || ''}`)
    return response
  }

  async player (tag, path) {
    const response = await this.request(`clans/${encodeURIComponent(tag)}/${path || ''}`)
    return response
  }

  async tournaments (params) {
    let query = params

    if (typeof params === 'string') {
      query = { name: params }
    }

    const response = this.request('/tournaments', query)
    return response
  }

  async tournament (tag) {
    const response = this.request(`/tournaments/${encodeURIComponent(tag)}`)
    return response
  }

  async globaltournaments () {
    const response = await this.request('globaltournaments')
    return response
  }
}

export default Client
