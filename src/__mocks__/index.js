import Card from '../Card'

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
}
