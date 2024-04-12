<template>
  <Nuxt />
</template>

<script>
// import 'vue2-toast/lib/toast.css'
export default {
  mounted() {
    if (this.$user.isAuthenticated()) {
      this.$event.init()
    }

    // if ('Notification' in window && Notification.permission !== 'granted') {
    //   Notification.requestPermission()
    //     .then((permission) => {
    //       if (permission === 'granted') {
    //         console.log('Notification permission granted.')
    //       } else {
    //         console.log('Notification permission denied.')
    //       }
    //     })
    //     .catch((error) => {
    //       console.error('Error requesting notification permission:', error)
    //     })
    // }
  },
  destroyed() {},
}
</script>
