import axios from 'axios'
import queryString from 'query-string'

export function requester (token) {
  return async function (route, query) {
    try {
      const request = {
        method: 'get',
        url: `${route}?${query ? queryString.stringify(query) : ''}`,
        baseURL: 'https://api.clashroyale.com/v1/',
        headers: {
          Accept: 'application/json',
          authorization: `Bearer ${token}`
        }
      }

      const response = await axios(request)

      return response.data
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
