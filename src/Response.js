export default class Response {
  constructor (data) {
    this.data = data.items || data
  }

  get all () {
    return this.data
  }
}
