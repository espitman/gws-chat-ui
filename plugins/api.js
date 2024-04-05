import conf from './configs'

export default function ({ $axios }, inject) {
  const api = $axios.create()
  api.setBaseURL(conf.api)
  inject('api', api)
}
