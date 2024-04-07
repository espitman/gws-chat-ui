<template>
  <section class="section-lg-b-space position-relative pt-0">
    <img
      class="img-fluid chat-bg"
      src="/images/wallpaper0.png"
      alt="wallpaper"
    />
    <div class="custom-container">
      <h6 class="fw-normal content-color text-center heading pt-4">
        Today 11:45 AM
      </h6>
      <ul class="message-box-list">
        <li v-for="message in messages" :class="message.type || 'new'">
          <a
            v-if="message.type === 'new'"
            href="#"
            onclick="myFunction(this, '--theme-color')"
            id="message"
          >
            <div class="message-box">
              <img class="img-fluid person-img" :src="room.userAvatar" alt="p9" />

              <div class="message-box-details">
                <h5>
                  {{ message.msg }}
                </h5>
                <div class="timing">
                  <img
                    class="img-fluid"
                    src="/images/star-fill.svg"
                    alt="star"
                  />
                  <h6>11:45 AM</h6>
                </div>
              </div>
            </div>
          </a>
          <div v-else class="message-box read">
            <div class="message-box-details">
              <h5>{{ message.msg }}</h5>
              <div class="timing">
                <img
                  class="img-fluid star"
                  src="/images/star-fill.svg"
                  alt="star"
                />
                <h6>11:45 AM</h6>
                <img class="img-fluid tick" src="/images/tick.svg" alt="tick" />
                <img
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
    messages: { type: Array, required: true },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
