self.addEventListener('push', (e) => {
    var options = {
        body: 'Esse é o corpo da minha notificação',
        icon: 'imagens/icone.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        
    };
    e.waitUntil(self.registration.showNotification('test message', {}));
});