'use strict';

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const axios = require('axios');

const client = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {'Authorization': `Basic ${process.env.BASIC_AUTH_TOKEN}`}
});

const get = (url) => client.get(url)
.then(function (response) {
  if(response.status != 200) {
    throw new Error(response);
  }
  return response
})
.catch(function (error) {
  throw new Error(error);
});

const post = (url, data) => client.post(url, data)
.then(function (response) {
  if(response.status != 200) {
    throw new Error(response);
  }
  return response
})
.catch(function (error) {
  throw new Error(error);
});

module.exports = {
  get,
  post,
}
