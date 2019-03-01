jest.mock('../src/index')

import Client from '../src/index'

const client = new Client()

describe('Clash Royale API', () => {
  test('should return cards data', async () => {
    const response = await client.cards()
    expect(response).toBeObject()
    expect(response.all).toBeArray()
    expect(response.epics).toBeArray()
    expect(response.rares).toBeArray()
    expect(response.all[0]).toContainAllKeys(['name', 'id', 'maxLevel', 'iconUrls'])
    expect(response.all[0].iconUrls).toBeObject()
    expect(response.all[0].iconUrls).toContainAllKeys(['medium'])
  })

  test('should return clans data', async () => {
    const response = await client.clans('hog')
    expect(response.all).toBeArray()
    expect(response.all[0]).toBeObject()
    expect(response.all[0]).toContainAllKeys(['tag', 'name', 'type', 'badgeId', 'clanScore', 'clanWarTrophies', 'location', 'requiredTrophies', 'donationsPerWeek', 'clanChestLevel', 'clanChestMaxLevel', 'members'])
    expect(response.all[0].location).toBeObject()
  })
})
