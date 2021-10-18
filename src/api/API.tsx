import axios from 'axios'

const baseURL = 'https://private-anon-a31bf5d446-aerolabchallenge.apiary-proxy.com'

const Api = axios.create({ baseURL })

const SCHEMA = 'Bearer '
const AUTH_HEADER = 'Authorization'
Api.interceptors.request.use(config => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYyNDBlOGQ2YmNiYTAwMjE0ZjUzNGMiLCJpYXQiOjE2MzM4MjkwOTZ9.mClN4Bu2B7T7XtdI7ysJcvDovS8u2CQBrOvyualdnSE'
    if (token) {
        config.headers![AUTH_HEADER] = SCHEMA + token
    } else {
        delete config.headers![AUTH_HEADER]
    }
    return config
})

export default Api