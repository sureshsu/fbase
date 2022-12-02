
importScripts('https://www.gstatic.com/firebasejs/9.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.0/firebase-messaging-compat.js');

// document.writeln("<script type='text/javascript' src='https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js'></script>");
// document.writeln("<script type='text/javascript' src='https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js'></script>");


 if ('serviceWorker' in navigator) {
     navigator.serviceWorker.register('../firebase-messaging-sw.js')
       .then(function(registration) {
         console.log('Registration successful, scope is:', registration.scope);
       }).catch(function(err) {
        console.log('Service worker registration failed, error:', err);
       });
    }
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

// const initMessaging = firebase.messaging();

// console.log("*****initMessaging*******",initMessaging)

// const messaging = firebase.messaging();
// console.log("****messaging*****",messaging);
// function SubscribeUsers() {
//   Notification.requestPermission().then(Permission => {
//       console.log(Permission);
//       if(Permission == "granted"){
//           messaging.getToken(
//               {vapidkey:"BAvMwMWlkmz0HTGdk_jOXp3NsPG6yRUt2a6XyGp-Ad5hxpaf-eosqVRKCSY6AYXbraLN5tprnHlLfnBVwj1USLY"}).then(currentToken=>{
//               console.log("currentToken:",currentToken);
//           })
//       }

//   });
// }