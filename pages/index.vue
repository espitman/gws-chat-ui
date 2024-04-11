<template>
  <div>
    <Header />
    <SideBar />
    <Stories />
    <ChatList :chats="chats" />
    <NewPart />

    <BottomNavbar active="home" />
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
      chats: [],
      evtSource: undefined,
    }
  },
  async fetch() {
    this.loading = true

    const {
      data: { payload },
    } = await this.$api.get(`/message-service/chats`)
    this.chats = payload.chats
    this.loading = false
  },
}
</script>
