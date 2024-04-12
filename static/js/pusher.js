// console.log('userID::', localStorage.getItem('userID'))

const beamsClient = new PusherPushNotifications.Client({
  instanceId: '21b50811-ce5d-4d69-876a-f60cc9a09ccf',
})

beamsClient
  .start()
  .then(() => beamsClient.addDeviceInterest('user-7'))
  .then(() => console.log('Successfully registered and subscribed!'))
  .catch(console.error)
