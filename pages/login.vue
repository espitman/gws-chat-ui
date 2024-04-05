<template>
  <div>
    <!-- login page start -->
    <div class="login-img">
      <img
        class="img-fluid img"
        src="/images/login-vector.svg"
        alt="login-img"
      />
    </div>
    <div class="custom-container">
      <h2 class="login-title">Login</h2>
      <h3 class="login-content pt-1">Let’s start again to chat with friends</h3>
      <form class="auth-form pb-3" v-on:submit="login">
        <div class="form-group mt-4">
          <label
            class="form-label fw-semibold dark-text"
            for="validationDefault01"
            >Username</label
          >
          <div class="d-flex gap-2">
            <div class="form-input">
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Enter your Username"
                required=""
                v-model="formData.name"
              />
            </div>
          </div>
        </div>
        <div class="form-group mt-4">
          <label
            class="form-label fw-semibold dark-text"
            for="validationDefault01"
            >Password</label
          >
          <div class="d-flex gap-2">
            <div class="form-input">
              <input
                type="password"
                class="form-control"
                id="validationDefault01"
                placeholder="Enter your password"
                required=""
                v-model="formData.password"
              />
            </div>
          </div>
        </div>

        <button class="btn theme-btn w-100 mt-4" role="button" type="submit">
          Login
        </button>
      </form>
    </div>
    <!-- login page end -->
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  mounted() {
    init_iconsax()
    this.$user.checkNotAuth()
  },
  data() {
    return {
      formData: {
        name: '',
        password: '',
      },
    }
  },
  methods: {
    async login(event) {
      event.preventDefault()
      this.$user.login(this.formData.name, this.formData.password)
    },
  },
}
</script>

<style>
.login-img {
  padding-block: unset !important;
}
h3.login-content,
.auth-form .form-group .form-input .form-control {
  font-weight: lighter !important;
}
</style>
