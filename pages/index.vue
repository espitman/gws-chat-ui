<template>
  <div>
    <Header/>
    <SideBar />
    <Stories />
    <ChatList />
    <NewPart />

    <BottomNavbar active="home"/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    init_iconsax()
  }
}
</script>
