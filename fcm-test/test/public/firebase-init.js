var firebaseConfig = {
    apiKey: "api-key-here",
    authDomain: "domain-here",
    databaseURL: "data-base-url-here",
    projectId: "project-id",
    storageBucket: "storage-bucket",
    messagingSenderId: "sender-id-here",
    appId: "app-id-here"
};
console.log(firebase);
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Request for permission
        Notification.requestPermission()
            .then((permission) => {
               
               
                console.log('Notification permission granted.');
                console.log(permission);
            //code stops running here on google chrome
            messaging.getToken()
                    .then((currentToken) => {
                        if (currentToken) {
                            console.log('Token: ' + currentToken);
                            sendTokenToServer(currentToken);
                            var data = { newToken: currentToken };
                            var url = "/Account/UpdateFirebaseToken";
                            $.ajax({
                                url: url,
                                type: "POST",
                                data: JSON.stringify(data),
                                dataType: "text",
                                processData: false,
                                contentType: "application/json; charset=utf-8",
                                success: function (data, status, jqXHR) {
                                    console.log("successfully retrieved token:", data, status, jqXHR);
                                },
                                error: function (jqXHR, status, err) {
                                    console.log(err);
                                },
                                complete: function (jqXHR, status) {
                                    console.log("request complete");
                                }
                            });
                        } else {
                             //doesn't reach here
                            console.log('No Instance ID token available. Request permission to generate one.');
                            setTokenSentToServer(false);
                        }
                    })
                    .catch(function (err) {
                        //doesn't reach here either
                        console.log('An error occurred while retrieving token. ', err);
                        setTokenSentToServer(false);
                    });
            })
            .catch(function (err) {
                console.log('Unable to get permission to notify.', err);
            });
    //});


messaging.onMessage(function (payload) {
    console.log("Notification received: ", payload);
  });


messaging.onTokenRefresh(function () {
    messaging.getToken()
        .then(function (refreshedToken) {
            console.log('Token refreshed.');
           setTokenSentToServer(false);
          sendTokenToServer(refreshedToken);
        })
        .catch(function (err) {
            console.log('Unable to retrieve refreshed token ', err);
        });
});


function sendTokenToServer(currentToken) {
    if (!isTokenSentToServer()) {
        console.log('Sending token to server...');
        setTokenSentToServer(true);
    } else {
        console.log('Token already sent to server so won\'t send it again ' +
            'unless it changes');
    }
}

function isTokenSentToServer() {
    return window.localStorage.getItem('sentToServer') == 1;
}

function setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? 1 : 0);
}