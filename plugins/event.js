export default function ({ app }, inject) {
  const event = {
    init() {
      console.log('SSE...')
      this.evtSource = new EventSource(
        'http://192.168.1.221:8085/event/' + app.$user.getUserID(),
      )
      this.evtSource.onmessage = (event) => {
        console.log(event.data)
        app.$toast.success(event.data)
        setTimeout(app.$toast.clear, 5000)
      }
    },
  }

  inject('event', event)
}
