<template>
  <div>
    <section class="panel-space"></section>
    <div class="navbar-menu">
    <ul>
      <li :class="this.active === 'home' ? 'active' : ''">
        <nuxt-link to="/">
          <div class="icon">
            <img class="unactive" src="/images/svg/chat.svg" alt="chat">
            <img class="active" src="/images/svg/chat-fill.svg" alt="chat">
          </div>
          <span class="active">Chat</span>
        </nuxt-link>
      </li>

      <li :class="this.active === 'contacts' ? 'active' : ''">
        <nuxt-link to="contacts">
          <div class="icon">
            <img class="unactive" src="/images/svg/call.svg" alt="call">
            <img class="active" src="/images/svg/call-fill.svg" alt="call">
          </div>
          <span>Contacts</span>
        </nuxt-link>
      </li>

      <li :class="this.active === 'setting' ? 'active' : ''">
        <nuxt-link to="setting">
          <div class="icon">
            <img class="unactive" src="/images/svg/setting.svg" alt="setting">
            <img class="active" src="/images/svg/setting-fill.svg" alt="setting">
          </div>
          <span>Setting</span>
        </nuxt-link>
      </li>

      <li :class="this.active === 'profile' ? 'active' : ''">
        <nuxt-link to="profile">
          <div class="icon">
            <img class="unactive" src="/images/svg/profile.svg" alt="profile">
            <img class="active" src="/images/svg/profile-fill.svg" alt="profile">
          </div>
          <span>profile</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
  </div>

</template>
<script>
export default {
  props:{
    active:{type: String,required: true}
  }
}
</script>
