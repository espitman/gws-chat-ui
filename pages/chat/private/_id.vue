<template>
  <div>
    <HeaderPrivateChat />
    <ChatMessages />
    <ChateReply />
    <ChateMessageInput />

    <ModalBlock/>
  </div>
</template>

<script>
export default {
  name: 'PrivateChatPage',
  mounted() {
    init_iconsax()
  }
}
</script>
