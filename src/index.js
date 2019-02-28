import 'dotenv/config'

import Card from './Card'

import { requester } from './utils'

class Client {
  constructor (token = null, request = requester) {
    this.token = token || process.env.CLASH_ROYALE_API_TOKEN
    this.request = requester
  }

  async cards () {
    const response = await this.request(this.token, 'cards')
    return new Card(response)
  }

  async clans (params) {
    let query = params

    if (typeof params === 'string') {
      query = { name: params }
    }

    const response = this.request(this.token, 'clans', query)
    return response
  }

  async clan (tag, path) {
    const response = await this.request(this.token, `clans/${encodeURIComponent(tag)}/${path || ''}`)
    return response
  }

  async locations (params = {}) {
    const response = this.request(this.token, 'clans', params)
    return response
  }

  async location (id, path) {
    const response = await this.request(this.token, `clans/id/${path || ''}`)
    return response
  }

  async player (tag, path) {
    const response = await this.request(this.token, `clans/${encodeURIComponent(tag)}/${path || ''}`)
    return response
  }

  async tournaments (params) {
    let query = params

    if (typeof params === 'string') {
      query = { name: params }
    }

    const response = this.request(this.token, '/tournaments', query)
    return response
  }

  async tournament (tag) {
    const response = this.request(this.token, `/tournaments/${encodeURIComponent(tag)}`)
    return response
  }

  async globaltournaments () {
    const response = await this.request(this.token, 'globaltournaments')
    return response
  }
}

export default Client
