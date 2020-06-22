var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BBrscuPj8CtYxgAb6G4i95SylgCigV1xbcvroCPUi7PhJxpUjKTY5Zy2cYlUlX7DJrZIsMSB8ToAVBxuyZD6wYs",
   "privateKey": "WFwDYAPQpsFizmbqyJswYBPMRaA6gK6X5M93Dwa0JDA"
};
 
 
webPush.setVapidDetails(
   'mailto:ericopratamajaya@gmail.com',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/cdye1Uf9IbA:APA91bH2O12sIiyeHpGoIZSA8NobQRhfamUwFeb4fT7afug44WfgXcvzwqHNnkTS5X9uv5w_y4bUIY4cSvVxjOaIC50lxlOBJrWxhDQk-cdPeWkYITy5s3igA3nN9fyblTBE6Y7AtwRr",
   "keys": {
       "p256dh": "BM5cynxaH3ikwTivbLbegc8LK+ui466hC17pGQHHRMf+w9y6/kb35N1pvf2L49FAyUY59lRx6k2xWpK3h4e+lY8=",
       "auth": "K/hOWuXKnVk/8HuBM84dcQ=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '613468430502',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);