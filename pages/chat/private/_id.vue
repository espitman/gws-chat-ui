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
    this.$nuxt.$on('message-sent', this.onMessageSent)
    this.$nuxt.$on('message-received', this.onMessageReceived)
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
      this.socket = new this.$socket(this.id, this.room)
    } catch (e) {
      console.log('@@@', e)
      alert('EEE')
    }
    this.loading = false
  },
  methods: {
    sendMessage(msg) {
      this.socket.send(msg)
      const inputElement = document.getElementById('my-message')
      inputElement.focus()
      this.scroller()
    },
    onMessageSent(data) {
      this.room.messages.push(data)
      this.scroller()
    },
    onMessageReceived(data) {
      this.room.messages.push(data)
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
