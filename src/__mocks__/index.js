import Card from '../Card'
import Clan from '../Clan'

export default class Client {
  cards () {
    const data = [
      {
        name: 'The Log',
        id: 28000011,
        maxLevel: 5,
        iconUrls: {
          medium: 'https://api-assets.clashroyale.com/cards/300/_iDwuDLexHPFZ_x4_a0eP-rxCS6vwWgTs6DLauwwoaY.png'
        }
      }
    ]

    return Promise.resolve(new Card(data))
  }

  clans () {
    const data = [{
      tag: '#R9PV8L',
      name: 'BR',
      type: 'inviteOnly',
      badgeId: 16000058,
      clanScore: 44887,
      clanWarTrophies: 3251,
      location:
      {
        id: 57000038,
        name: 'Brazil',
        isCountry: true,
        countryCode: 'BR'
      },
      requiredTrophies: 4300,
      donationsPerWeek: 14070,
      clanChestLevel: 1,
      clanChestMaxLevel: 0,
      members: 44
    }]

    return Promise.resolve(new Clan(data))
  }
}
