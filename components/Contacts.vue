<template>
  <section class="section-b-space">
    <div class="custom-container">
      <div class="scrollbar scrollbar1 mb-0 border-0" id="scrollbar">
        <ul class="contact-list mt-0 pt-0">
          <li v-for="user in users">
            <a @click="getPrivateChat(user)" class="contact-box">
              <div class="contact-details ps-0">
                <img class="img-fluid img" :src="user.avatar" alt="p1" />
                <div>
                  <h5>{{ user.name }}</h5>
                  <h6>{{ user.status }}</h6>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <nuxt-link to="private-chat.html" class="new-chat-icon arrow-icon">
        <i class="iconsax icon" data-icon="arrow-right"> </i>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    users: { type: Array, required: true },
  },
  methods: {
    async getPrivateChat(user) {
      const {
        data: {
          payload: { id },
        },
      } = await this.$api.post('/message-service/room', { userId: user.id })
      this.$router.push('/chat/private/' + id)
    },
  },
}
</script>
