import 'dotenv/config'

import Card from './Card'
import Clan from './Clan'
import Location from './Location'
import Player from './Player'
import Tournament from './Tournament'

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

    const response = await this.request(this.token, 'clans', query)
    return new Clan(response)
  }

  async clan (tag, path) {
    const response = await this.request(this.token, `clans/${encodeURIComponent(tag)}/${path || ''}`)
    return new Clan(response)
  }

  async locations (params = {}) {
    const response = this.request(this.token, 'clans', params)
    return new Location(response)
  }

  async location (id, path) {
    const response = await this.request(this.token, `clans/id/${path || ''}`)
    return new Location(response)
  }

  async player (tag, path) {
    const response = await this.request(this.token, `clans/${encodeURIComponent(tag)}/${path || ''}`)
    return new Player(response)
  }

  async tournaments (params) {
    let query = params

    if (typeof params === 'string') {
      query = { name: params }
    }

    const response = this.request(this.token, '/tournaments', query)
    return new Tournament(response)
  }

  async tournament (tag) {
    const response = this.request(this.token, `/tournaments/${encodeURIComponent(tag)}`)
    return new Tournament(response)
  }

  async globaltournaments () {
    const response = await this.request(this.token, 'globaltournaments')
    return new Tournament(response)
  }
}

export default Client
