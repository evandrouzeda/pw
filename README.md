# pw
Is a simple app, to show and test push notificantion, on PWA apps.

# Steps
## Step 1
Run the code using **node push.js**

- The code will generate Vapid keys

## Step 2
Uncomment the line **43** and beyond, on **push.js** file.
Paste the keys to the obj **vapidKeys**, and in **index.html** on line **35**, paste the **publicKey**.

## Step 3
Run the code again.
> Using **node push.js**.

And now, go to your Web Browser on **localhost:5000**.

> **Note:** If you are not receiving any notifications, maybe is because your OS is blocking notifications.

[Find more on Google](https://developers.google.com/web/fundamentals/push-notifications)
