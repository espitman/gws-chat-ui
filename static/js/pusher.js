// console.log('userID::', localStorage.getItem('userID'))

const beamsClient = new PusherPushNotifications.Client({
  instanceId: '4cd36c6b-4ddf-4a91-b59b-465c9480b538',
})

beamsClient
  .start()
  .then(() =>
    beamsClient.addDeviceInterest('user-' + localStorage.getItem('userID')),
  )
  .then(() => console.log('Successfully registered and subscribed!'))
  .catch(console.error)
