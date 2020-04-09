var push = require('web-push');

let vapidKeys = {
    publicKey: 'BAjAFwJK7Tcommh70Jry5fvOuLYLzgJtJVXKKQNpfRUkm3tqpdkI7v7k78FaLwzaiJZB-kFk3sGM8oVSIRvDNug',
    privateKey: 'oUWIVGFJrrlYEl9rqxHnLEflwgAf6OizBinzYrJu7Kw'
}

push.setVapidDetails('mailto: evandrouzeda@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/fXKki0JFK5g:APA91bED7QfoZ6KgXxx10vNDCbO-5vUWL65mLVA-Ad8fxxhhaJ7FyhXCSyV92wG6fSWyrSk0Obqo_kF-fowXgDwGTquZ--jbw0yNPW6ldAi4AzPtaRv2ZfaqFbhVYN2mnKqIn7tKKPNP",
    "expirationTime": null,
    "keys": {
        "p256dh": "BB16vo9tY0zQwg29a5HujPre6XfNBlLjM0AZpw_TDBHslKY9_lzeU1kKFhlHdn1sOxTSHebDtWCuCN-8sqdhHis",
        "auth": "L3G4s4IdiA79BV4_KyChCQ"
    }
};

push.sendNotification(sub, 'test message')