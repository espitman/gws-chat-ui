// const evtSource = new EventSource('http://91.206.177.145:8085/event/' + 7)
// evtSource.onmessage = (event) => {
//   console.log(event.data)
//
//   const pushData = {
//     title: 'SSE Event',
//     body: event.data,
//   }
//   self.registration.showNotification(pushData.title, pushData)
//
//
//
//
//   // app.$toast.success(event.data)
//   // setTimeout(app.$toast.clear, 5000)
// }


importScripts("https://js.pusher.com/beams/service-worker.js");
