<template>
  <section class="section-lg-b-space position-relative pt-0">
    <img
      class="img-fluid chat-bg"
      src="/images/wallpaper0.png"
      alt="wallpaper"
    />
    <div class="custom-container">
      <h6 class="fw-normal content-color text-center heading pt-4">
        Today 11:45 AM ({{ room.messages.length }})
      </h6>
      <ul class="message-box-list">
        <li
          v-for="message in room.messages"
          :class="getMessageTypeClass(message)"
        >
          <a
            v-if="message.type === 1"
            href="#"
            onclick="myFunction(this, '--theme-color')"
            id="message"
          >
            <div class="message-box">
              <img
                v-if="false"
                class="img-fluid person-img"
                :src="message.userAvatar"
                alt="p9"
              />

              <div class="message-box-details">
                <h5>
                  {{ message.body }}
                </h5>
                <div class="timing">
                  <img
                    v-if="false"
                    class="img-fluid"
                    src="/images/star-fill.svg"
                    alt="star"
                  />
                  <h6>{{ message.time }}</h6>
                </div>
              </div>
            </div>
          </a>
          <div v-else class="message-box read">
            <div class="message-box-details">
              <h5>{{ message.body }}</h5>
              <div class="timing">
                <img
                  v-if="false"
                  class="img-fluid star"
                  src="/images/star-fill.svg"
                  alt="star"
                />
                <h6>{{ message.time }}</h6>
                <img class="img-fluid tick" src="/images/tick.svg" alt="tick" />
                <img
                  v-if="false"
                  class="img-fluid tick-all"
                  src="/images/tick-all.svg"
                  alt="tick"
                />
              </div>
            </div>
          </div>
        </li>

        <!--        <li class="new">-->
        <!--          <div class="message-box message-typing">-->
        <!--            <img class="img-fluid person-img" src="/images/p9.png" alt="p9">-->

        <!--            <div class="typing">-->
        <!--              <span></span>-->
        <!--              <span></span>-->
        <!--              <span></span>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </li>-->
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    room: { type: Object, required: true },
  },
  data() {
    return {}
  },
  methods: {
    getMessageTypeClass(msg) {
      if (msg.type === 1) {
        return 'new'
      }
      return 'personal'
    },
  },
}
</script>

<style>
.message-box-list li.new .message-box .message-box-details h6,
.message-box-list li.personal .message-box .message-box-details h6 {
  margin-top: 12px;
  font-size: 0.6rem;
  opacity: 0.6;
}
</style>
