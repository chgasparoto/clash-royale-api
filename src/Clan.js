import Response from './Response'

class Clan extends Response {
  constructor (data) {
    super(data)
    this.memberList = this.data.memberList || false
  }

  get members () {
    return this.memberList
  }

  get leader () {
    if (!this.memberList) {
      return false
    }

    return this.memberList.filter(item => item.role === 'leader')[0]
  }

  get coleaders () {
    if (!this.memberList) {
      return false
    }

    return this.memberList.filter(item => item.role === 'coleader')
  }

  get elders () {
    if (!this.memberList) {
      return false
    }

    return this.memberList.filter(item => item.role === 'elder')
  }
}

export default Clan
