import { requester } from '../src/utils'

const request = requester('MY_TOKEN')

test('should return a Promise', async() => {
  request().then(res => expect(res).toBeTrue)
})
