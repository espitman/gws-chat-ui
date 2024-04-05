<template>
  <div>
    <Header />
    <SideBar />
    <Contacts :users="users" />
    <BottomNavbar active="contacts" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    init_iconsax()
    this.$user.checkAuth()
  },
  data() {
    return {
      loading: true,
      users: [],
    }
  },
  async fetch() {
    this.loading = true
    const {
      data: {
        payload: { users },
      },
    } = await this.$api.get(`/user-service/all`)
    this.users = users
    this.loading = false
  },
}
</script>
