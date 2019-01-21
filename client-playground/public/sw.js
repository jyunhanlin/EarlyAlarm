/* eslint-disable */
self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
});
self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
  return self.clients.claim();
});
// self.addEventListener('fetch', function(event) {
//   console.log('[Service Worker] Fetching something ....', event);
//   event.respondWith(fetch(event.request));
// });


self.addEventListener('notificationclick', function(event) {
  var notification = event.notification;
  var action = event.action;
  if (action === 'confirm') {
    console.log('Confirm was chosen');
    notification.close();
  } else {
    console.log(action);
    notification.close();
  }
});
self.addEventListener('notificationclose', function(event) {
  console.log('Notification was closed', event);
});


self.addEventListener('push', function(event) {
  console.log('Push Notification received', event);
  var data = { title: 'New!', content: 'Something new happened!' }; // Default data
  if (event.data) {
    data = JSON.parse(event.data.text());
  }
  var options = {
    body: data.content,
    icon: 'tagtoo.ico',
    badge: 'tagtoo.ico',
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});
/* eslint-enable */