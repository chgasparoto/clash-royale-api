import { requester } from '../src/utils'

test('should return a Promise', async() => {
  requester('bla').then(res => expect(res).toBeTrue)
})
