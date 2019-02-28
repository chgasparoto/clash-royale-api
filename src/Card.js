import Response from './Response'

class Card extends Response {
  constructor (data) {
    super(data)

    this.cardLevels = {
      EPIC: 8,
      RARE: 11,
      COMMON: 13,
      LEGENDARY: 5
    }
  }

  filter (rarity) {
    return this.data.filter(card => card.maxLevel === rarity)
  }

  get epics () {
    return this.filter(this.cardLevels.EPIC)
  }

  get rares () {
    return this.filter(this.cardLevels.RARE)
  }

  get commons () {
    return this.filter(this.cardLevels.COMMON)
  }

  get legendaries () {
    return this.filter(this.cardLevels.LEGENDARY)
  }
}

export default Card
