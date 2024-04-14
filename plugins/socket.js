export default function ({ app, $config }, inject) {
  class Socket {
    constructor(id, room) {
      this.id = id
      this.room = room
      this.url = app.$config.wsUrl + this.id + '?jwt=' + app.$user.getToken()
      this.socket = new WebSocket(this.url)
      this.onMessage()
      this.onError()
      this.onClose()
    }

    onMessage() {
      this.socket.onmessage = (event) => {
        const userAvatar = this.room.audience.avatar
        let message = {}
        try {
          message = JSON.parse(event.data)
        } catch (e) {
          message = { body: event.data }
        }
        $nuxt.$emit('message-received', {
          body: message.body,
          userAvatar,
          time: '2024-04-08 20:48:33',
          type: 1,
        })
      }
    }

    onError() {
      this.socket.onclose = () => {
        alert('Socket has error...')
      }
    }

    onClose() {
      this.socket.onclose = () => {
        alert('Socket is closed...')
      }
    }

    send(msg) {
      const newMsg = JSON.stringify({
        type: 'message',
        body: msg,
      })
      this.socket.send(newMsg)
      $nuxt.$emit('message-sent', {
        body: msg,
        time: '2024-04-08 20:48:33',
        type: 2,
      })
    }
  }

  inject('socket', Socket)
}
