importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDibvGyQMWD0vVIO4QUmVR9KCBk0ID7QGA",
  authDomain: "nihul-a9af2.firebaseapp.com",
  projectId: "nihul-a9af2",
  messagingSenderId: "94047452500",
  appId: "1:94047452500:web:a0178b688f38b2f2499cc1"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification("💙 Miss You", {
    body: "Someone is missing you...",
    vibrate: [0, 1000, 500, 1000, 500, 1000], // call-like vibration
    icon: "/icon.png"
  });
});
