var push = require('web-push');

let vapidKeys = {
    publicKey: 'BAjAFwJK7Tcommh70Jry5fvOuLYLzgJtJVXKKQNpfRUkm3tqpdkI7v7k78FaLwzaiJZB-kFk3sGM8oVSIRvDNug',
    privateKey: 'oUWIVGFJrrlYEl9rqxHnLEflwgAf6OizBinzYrJu7Kw'
}

push.setVapidDetails('mailto: evandrouzeda@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')