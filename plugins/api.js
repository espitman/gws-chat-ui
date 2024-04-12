export default function ({ $config, $axios }, inject) {
  const api = $axios.create()
  const baseUrl = $config.baseUrl
  api.setBaseURL(baseUrl)
  inject('api', api)
}
