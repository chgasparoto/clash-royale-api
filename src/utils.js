import axios from 'axios'
import queryString from 'query-string'

export async function requester (token, route, query) {
  try {
    const response = await axios({
      method: 'get',
      url: `${route}?${query ? queryString.stringify(query) : ''}`,
      baseURL: 'https://api.clashroyale.com/v1/',
      headers: {
        Accept: 'application/json',
        authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (error) {
    throw new Error(error.message)
  }
}
