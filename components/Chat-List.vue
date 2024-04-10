<template>
  <!-- chat section starts -->
  <section class="chat-section">
    <div class="custom-container">
      <h6 class="content-color fw-medium">Chat ({{chats.length}})</h6>

      <ul class="chat-list">
        <li v-for="chat in chats">
          <nuxt-link :to="`/chat/private/${chat.message.roomID}`" class="chat-list-box">
            <div class="chat-list-image online">
              <img class="img-fluid img" :src="chat.user.avatar" alt="p2" />
            </div>
            <div class="chat-details">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="name">{{ chat.user.name }}</h5>
                <h6 class="success-color">{{chat.message.time}}</h6>
              </div>
              <div class="content">
                <div
                  class="d-flex align-items-center justify-content-between gap-2"
                >
                  <p>{{chat.message.body}}</p>
                  <h6 class="count">1</h6>
                </div>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </section>
  <!-- chat section end -->
</template>

<script>
export default {
  props: {
    chats: { type: Array, required: true },
  },
}
</script>
