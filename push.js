//Simple example code to make a push app
var push = require('web-push');
var express = require('express');

var app = express()

//this is used to use static html, making express run in static mode
app.use(express.static(__dirname))

var server = app.listen(5000, () => {
    console.log('Server is listen on port 5000...')
})

var socket = require('socket.io').listen(server);

var subClient = []; //used to care the last client subscription, but you can use for to send to all
socket.on('connect', (client) => {
    client.on('sub', (sub) => {
        subClient.push(sub);
        console.log('Client Subcribed');
    })

    client.on('send', (msg) => {
        send(msg)
    })
})

//function that send the notification
function send(msg) {
    push.sendNotification(subClient[subClient.length - 1], msg).catch((err) => {
        if (err.statusCode === 404 || err.statusCode === 410) {
            console.log('Subscription has expired or is no longer valid...')
        } else {
            throw err;
        }
    })
}

//only used on the first time you run this code, to generate de keys. After comment our delete the line below
console.log(push.generateVAPIDKeys())

//UNCOMMENT ONLY AFTER GENERETE THE KEYS
/*
let vapidKeys = {
    publicKey: '<YOUR VAPID KEY THAT WAS GENERATED>',
    privateKey: '<SAME THIN>'
}

push.setVapidDetails('mailto: your@email.com', vapidKeys.publicKey, vapidKeys.privateKey)
*/
