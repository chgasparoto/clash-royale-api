import 'dotenv/config'

import Card from './Card'
import Clan from './Clan'
import Location from './Location'
import Player from './Player'
import Tournament from './Tournament'
import GlobalTournament from './GlobalTournament'

import { requester } from './utils'

class Client {
  constructor (token = null, request = requester) {
    this.token = token || process.env.CLASH_ROYALE_API_TOKEN
    this.request = requester(this.token)
  }

  async cards () {
    const response = await this.request('cards')
    return new Card(response)
  }

  async clans (params) {
    let query = params

    if (typeof params === 'string') {
      query = { name: params }
    }

    const response = await this.request('clans', query)
    return new Clan(response)
  }

  async clan (tag, path) {
    const response = await this.request(`clans/${encodeURIComponent(tag)}/${path || ''}`)
    return new Clan(response)
  }

  async locations (params = {}) {
    const response = await this.request('locations', params)
    return new Location(response)
  }

  async location (id, path, query) {
    const response = await this.request(`locations/${id}/${path || ''}`, query)
    return new Location(response)
  }

  async player (tag, path) {
    const response = await this.request(`players/${encodeURIComponent(tag)}/${path || ''}`)
    return new Player(response)
  }

  async tournaments (params) {
    let query = params

    if (typeof params === 'string') {
      query = { name: params }
    }

    const response = await this.request('/tournaments', query)
    return new Tournament(response)
  }

  async tournament (tag) {
    const response = await this.request(`/tournaments/${encodeURIComponent(tag)}`)
    return new Tournament(response)
  }

  async globaltournaments () {
    const response = await this.request('globaltournaments')
    return new GlobalTournament(response)
  }
}

export default Client
