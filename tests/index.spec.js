import Client from '../src/index'

const client = new Client()

describe('Clash Royale API', () => {
  test('should return cards data', async () => {
    const response = await client.cards()
    expect(response.items).toBeArray()
    expect(response.items[0]).toBeObject()
    expect(response.items[0]).toContainAllKeys(['name', 'id', 'maxLevel', 'iconUrls'])
    expect(response.items[0].iconUrls).toBeObject()
    expect(response.items[0].iconUrls).toContainAllKeys(['medium'])
  })

  test('should return clans data', async () => {
    const response = await client.clans('hog')
    expect(response.items).toBeArray()
    expect(response.items[0]).toBeObject()
    expect(response.items[0]).toContainAllKeys(['tag', 'name', 'type', 'badgeId', 'clanScore', 'clanWarTrophies', 'location', 'requiredTrophies', 'donationsPerWeek', 'clanChestLevel', 'clanChestMaxLevel', 'members'])
    expect(response.items[0].location).toBeObject()
  })
})
