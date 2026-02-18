const firebaseConfig = {
 apiKey: "AIzaSyDibvGyQMWD0vVIO4QUmVR9KCBk0ID7QGA",
  authDomain: "nihul-a9af2.firebaseapp.com",
  projectId: "nihul-a9af2",
  messagingSenderId: "94047452500",
  appId: "1:94047452500:web:a0178b688f38b2f2499cc1"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const messaging = firebase.messaging();

messaging.requestPermission()
.then(() => messaging.getToken({
  vapidKey: "BLqQy8fp_4-reLnSH1DSwRg4o0Wlt4GBNaqfah488kTfIxBNb4RD4RJZ_8hWCb15QCfm5XaC5zKfgG-jbUgHbfQ"
}))
.then(token => {
  console.log("FCM Token:", token);
});

function sendMiss() {
  db.collection("signals").doc("nikki").set({
    message: "miss_you",
    time: firebase.firestore.FieldValue.serverTimestamp()
  });

  navigator.vibrate([0, 500, 300, 500]);
}
