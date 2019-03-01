jest.mock('../src/index')

import Client from '../src/index'

const client = new Client()

describe('Clash Royale API', () => {
  test('should return cards data', async () => {
    const response = await client.cards()
    expect(response).toBeObject()
    expect(response.all).toBeArray()
    expect(response.legendaries).toBeArray()
    expect(response.commons).toBeArray()
    expect(response.epics).toBeArray()
    expect(response.rares).toBeArray()
    expect(response.all[0]).toContainAllKeys(['name', 'id', 'maxLevel', 'iconUrls'])
    expect(response.all[0].iconUrls).toBeObject()
    expect(response.all[0].iconUrls).toContainAllKeys(['medium'])
  })

  test('should return clans data', async () => {
    const response = await client.clans('hog')
    expect(response.all).toBeArray()
    expect(response.leader).toBeFalse()
    expect(response.coleaders).toBeFalse()
    expect(response.elders).toBeFalse()
    expect(response.all[0]).toBeObject()
    expect(response.all[0]).toContainAllKeys([
      'tag',
      'name',
      'type',
      'badgeId',
      'clanScore',
      'clanWarTrophies',
      'location',
      'requiredTrophies',
      'donationsPerWeek',
      'clanChestLevel',
      'clanChestMaxLevel',
      'members'
    ])
    expect(response.all[0].location).toBeObject()
  })

  test('should return specific clan data', async () => {
    const response = await client.clan('#R9PV8L')
    expect(response.all).toBeObject()
    expect(response.all).toContainAllKeys([
      'tag',
      'name',
      'badgeId',
      'type',
      'clanScore',
      'requiredTrophies',
      'donationsPerWeek',
      'clanChestLevel',
      'clanChestMaxLevel',
      'members',
      'location',
      'description',
      'clanChestStatus',
      'clanChestPoints',
      'memberList'
    ])
    expect(response.all.memberList).toBeArray()
    expect(response.leader).toBeObject()
    expect(response.leader).toContainAllKeys([
      'tag',
      'name',
      'expLevel',
      'trophies',
      'arena',
      'role',
      'clanRank',
      'previousClanRank',
      'donations',
      'donationsReceived',
      'clanChestPoints'
    ])
    expect(response.coleaders).toBeArray()
    expect(response.elders).toBeArray()
    expect(response.members).toBeArray()
  })
})
