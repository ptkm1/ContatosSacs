import axios from 'axios'

export const Api = axios.create({
  baseURL: "http://194.31.52.245:8081/"
})
