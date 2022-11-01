'use strict';

const client = require('./client')

let getImages = (limit = 25, offset = 0) => client.get(`/api/v1/images?limit=${limit}&offset=${offset}`)

let getAllImages = async () => {
  let offset = 0
  let limit = 50
  let apps = []
  let res = {
    data: null
  }
  do {
    res = await getImages(limit, offset)
    offset += limit
    if (res.data !== null) {
      apps = [...apps, ...res.data]
    }
  } while (res.data !== null)

  return apps;
}

module.exports = {
  getAllImages
}
