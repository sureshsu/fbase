
importScripts('https://www.gstatic.com/firebasejs/9.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.0/firebase-messaging-compat.js');


//  if ('serviceWorker' in navigator) {
//      navigator.serviceWorker.register('../firebase-messaging-sw.js')
//        .then(function(registration) {
// 		messaging.useServiceWorker(registration);
// 		return registration.scope;
//          console.log('Registration successful, scope is:', registration.scope);
//        }).catch(function(err) {
//         console.log('Service worker registration failed, error:', err);
//        });
//     }
    self.addEventListener('push', function (event) {
      console.log('Service Worker recived a push message', event.data.text());
      var notification = event.data.json().notification;
      var title = notification.title;
      event.waitUntil(
          self.registration.showNotification(title, {
              body: notification.body,
              icon: notification.icon,
              data: { url: notification.click_action }
          }));
    });
 firebase.initializeApp({
    // messagingSenderId: "410451915353",
    messagingSenderId: "277255948303",
   })

