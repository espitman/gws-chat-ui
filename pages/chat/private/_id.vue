<template>
  <div v-if="!loading">
    <HeaderPrivateChat :room="room" />
    <ChatMessages :room="room" />
    <ChateReply />
    <ChateMessageInput :send-message="sendMessage" :scroller="scroller" />

    <ModalBlock />
  </div>
</template>

<script>
export default {
  name: 'PrivateChatPage',
  asyncData({ params }) {
    const { id } = params
    return { id }
  },
  data() {
    return {
      loading: true,
      room: { messages: [] },
      socket: undefined,
      docH: 0,
    }
  },
  async mounted() {
    init_iconsax()
    this.$user.checkAuth()
    this.docH = document.body.scrollHeight
  },
  async fetch() {
    this.loading = true
    if (!this.id) {
      return this.$router.back()
    }
    this.loading = true

    const {
      data: { payload },
    } = await this.$api.get(`/message-service/room/${this.id}`)
    payload.messages = payload.messages || []
    this.room = payload
    this.scroller()
    try {
      let url = 'ws://192.168.1.221:8085/chat/' + this.id
      // let url = 'ws://localhost:8085/chat/' + this.id
      url += '?jwt=' + this.$user.getToken()
      this.socket = new WebSocket(url)
      this.socket.onerror = (event) => {
        console.log(event)
      }
      this.socket.onmessage = (event) => {
        const userAvatar = this.room.audience.avatar

        this.room.messages.push({
          body: event.data,
          userAvatar,
          time: '2024-04-08 20:48:33',
          type: 1,
        })
        this.scroller()
      }
    } catch (e) {
      console.log('@@@', e)
      alert('EEE')
    }

    this.loading = false
  },
  methods: {
    sendMessage(msg) {
      this.room.messages.push({
        body: msg,
        time: '2024-04-08 20:48:33',
        type: 2,
      })
      console.log(this.room.messages)
      this.socket.send(msg)
      const inputElement = document.getElementById('my-message')
      inputElement.focus()
      this.scroller()
    },
    scroller() {
      setTimeout(() => {
        if (document.body.scrollHeight > this.docH) {
          this.docH = -1
          window.scrollTo(0, document.body.scrollHeight)
        }
      })
    },
  },
}
</script>
