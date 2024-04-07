<template>
  <header id="header" class="section-t-spacee main-header inner-page-header">
    <div class="custom-container">
      <div class="header-panel contact-panel">
        <div class="d-flex align-items-center gap-2">
          <nuxt-link to="/contacts">
            <i class="iconsax icon-btn" data-icon="chevron-left"> </i>
          </nuxt-link>
          <nuxt-link to="personal-info.html" class="profile-head">
            <div class="profile-img">
              <img class="img-fluid img" :src="room.userAvatar" alt="" />
            </div>
            <div>
              <h4 class="fw-semibold">{{room.userName}}</h4>
              <h6 class="fw-normal text-white-75">Online</h6>
            </div>
          </nuxt-link>
        </div>

        <div class="d-flex align-items-center gap-sm-3 gap-2">
          <div class="dropdown more-options dropdown-menu-end">
            <nuxt-link
              class="btn dropdown-toggle mt-0 p-0"
              to="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              <i class="iconsax icon-btn" data-icon="menu-meatballs"> </i>
            </nuxt-link>

            <ul class="dropdown-menu">
              <li>
                <nuxt-link to="personal-info.html" class="dropdown-item">
                  <i class="iconsax icon" data-icon="group"></i> View
                  Info</nuxt-link
                >
              </li>

              <li>
                <nuxt-link to="#" id="reply-btn" class="dropdown-item">
                  <img
                    class="img-fluid icon"
                    src="/images/reply-all.svg"
                    alt="reply"
                  />Reply</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="#" class="dropdown-item">
                  <i class="iconsax icon" data-icon="star"></i> Mute
                  Notification</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="default-wallpaper.html" class="dropdown-item">
                  <i class="iconsax icon" data-icon="picture-add"></i>
                  Wallpaper</nuxt-link
                >
              </li>
              <li>
                <nuxt-link to="#" class="dropdown-item">
                  <i class="iconsax icon" data-icon="add-square"> </i>Add
                  Shortcut</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="#clear"
                  data-bs-toggle="modal"
                  class="dropdown-item"
                >
                  <i class="iconsax icon" data-icon="brush-2"></i> Clear
                  Chat</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="#block"
                  data-bs-toggle="modal"
                  class="dropdown-item error-color"
                >
                  <i
                    class="iconsax icon error-icon"
                    data-icon="shield-slash"
                  ></i>
                  Block</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    room: { type: Object, required: true },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
.main-header .header-panel .profile-head .profile-img .img {
  object-fit: cover;
}
</style>
