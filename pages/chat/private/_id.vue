<template>
  <div>
    <HeaderPrivateChat :room="room" />
    <ChatMessages :room="room" :messages="message" />
    <ChateReply />
    <ChateMessageInput :send-message="sendMessage" />

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
      id: undefined,
      room: {},
      socket: undefined,
      message: [],
    }
  },
  async mounted() {
    init_iconsax()
    this.$user.checkAuth()
  },
  async fetch() {
    this.loading = true
    const {
      data: { payload },
    } = await this.$api.get(`/message-service/room/${this.id}`)
    this.room = payload
    console.log(this.room)

    try {
      this.socket = new WebSocket('ws://192.168.1.221:8085/chat/' + this.id)
      this.socket.onerror = (event) => {
        console.log(event)
      }
      this.socket.onmessage = (event) => {
        console.log({ msg: event.data, type: 'new' })
        this.message.push({ msg: event.data, type: 'new' })
        console.log(this.messages)
      }
    } catch (e) {
      console.log('@@@', e)
      alert('EEE')
    }

    this.loading = false
  },
  methods: {
    sendMessage(msg) {
      this.message.push({ msg, type: 'personal' })
      console.log(this.messages)
      this.socket.send(msg)
    },
  },
}
</script>
