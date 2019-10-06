// The core Firebase JS SDK is always required and must be listed first
importScripts('https://www.gstatic.com/firebasejs/7.1.0/firebase-app.js');
// TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries
importScripts('https://www.gstatic.com/firebasejs/7.1.0/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "29590635953"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/assets/images/wait.gif'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
