self.addEventListener('push', (e) => {
    console.log(e.data.text())
    var options = {
        body: 'Description of your notification',
        icon: '_img/image.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        
    };
    e.waitUntil(self.registration.showNotification(e.data.text(), options));
});