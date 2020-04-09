var push = require('web-push');

let vapidKeys = {
    publicKey: 'BAjAFwJK7Tcommh70Jry5fvOuLYLzgJtJVXKKQNpfRUkm3tqpdkI7v7k78FaLwzaiJZB-kFk3sGM8oVSIRvDNug',
    privateKey: 'oUWIVGFJrrlYEl9rqxHnLEflwgAf6OizBinzYrJu7Kw'
}

push.setVapidDetails('mailto: evandrouzeda@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/eV3FOi_tPtk:APA91bFwJnphjgqn1omcIPGpf8D2UWkDDkY4xjiczFjA2-fT8vNXlkbAn4coomeB6tY-wwez3MU5QGWiXOMzgIkRkLj_EIin2YHpQsCkd3dJgEnvrLQes-o5eHwZQkRHo23jEjhnXNju",
    "expirationTime": null,
    "keys": {
        "p256dh": "BEv3EOsDT9mIPjAm50WgjJEt0IHesKvbrrLBzvTLRqYlrr2g736vznDGR_4NmLjN-GIS_ezelVFDzIz1Gq8JT8I",
        "auth": "8-9NvCvgx685dvrmGPPMdw"
    }
};

push.sendNotification(sub, 'test message')