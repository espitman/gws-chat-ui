export default function ({ app }, inject) {
  const event = {
    init() {
      console.log('SSE...')
      this.evtSource = new EventSource(
        'http://192.168.1.221:8085/event/' + app.$user.getUserID(),
      )
      this.evtSource.onmessage = (event) => {
        showNotification(event)
      }
    },
  }

  const showNotification = (event) => {
    // app.$toast.success(event.data)
    // setTimeout(app.$toast.clear, 5000)
    const notification = new Notification('Hello!', {
      body: event.data,
      icon: 'path/to/notification-icon.png', // Optional icon path
    })
  }

  inject('event', event)
}
