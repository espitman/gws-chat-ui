<template>
  <form class="messages-panel" @submit="send">
    <div class="message-inputarea">
      <input
        v-model="formData.message"
        type="text"
        class="message-input"
        placeholder="Type here..."
        id="my-message"
        @focus="this.inScroller"
      />
      <img class="img-fluid smile" src="/images/smile.svg" alt="" />
      <button type="submit" class="message-send-btn">
        <i class="iconsax icon-btn" data-icon="send-2"> </i>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    sendMessage: { type: Function, required: true },
    scroller: { type: Function, required: true },
  },
  data() {
    return {
      formData: {
        message: '',
      },
    }
  },
  methods: {
    send(event) {
      event.preventDefault()
      this.sendMessage(this.formData.message)
      this.formData.message = ''
    },
    inScroller() {
      setTimeout(this.scroller, 100)
    },
  },
}
</script>

<style>
.messages-panel .message-send-btn {
  border: none !important;
}
</style>
