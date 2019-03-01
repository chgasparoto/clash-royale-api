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

  clan () {
    const data = {
      'tag': 'string',
      'name': 'string',
      'badgeId': 0,
      'type': 'string',
      'clanScore': 0,
      'requiredTrophies': 0,
      'donationsPerWeek': 0,
      'clanChestLevel': 0,
      'clanChestMaxLevel': 0,
      'members': 0,
      'location': {
        'id': 0,
        'name': 'string',
        'isCountry': true,
        'countryCode': 'string'
      },
      'description': 'string',
      'clanChestStatus': 'string',
      'clanChestPoints': 0,
      'memberList': [
        {
          'tag': 'string',
          'name': 'string',
          'expLevel': 0,
          'trophies': 0,
          'arena': {
            'id': 0,
            'name': 'string'
          },
          'role': 'leader',
          'clanRank': 0,
          'previousClanRank': 0,
          'donations': 0,
          'donationsReceived': 0,
          'clanChestPoints': 0
        },
        {
          'tag': 'string',
          'name': 'string',
          'expLevel': 0,
          'trophies': 0,
          'arena': {
            'id': 0,
            'name': 'string'
          },
          'role': 'elder',
          'clanRank': 0,
          'previousClanRank': 0,
          'donations': 0,
          'donationsReceived': 0,
          'clanChestPoints': 0
        }
      ]
    }

    return Promise.resolve(new Clan(data))
  }
}
