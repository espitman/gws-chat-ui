export default function ({ app, $config }, inject) {
  const event = {
    init() {
      console.log('SSE...')
      this.evtSource = new EventSource($config.sseUrl + app.$user.getUserID())
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
