const firebaseConfig = {

	apiKey: "AIzaSyDLOosAg3k-xQd0bXiMqulMyMd6GsWbMaE",
	authDomain: "ocb-tizen-d78a1.firebaseapp.com",
	projectId: "ocb-tizen-d78a1",
	storageBucket: "ocb-tizen-d78a1.appspot.com",
	messagingSenderId: "277255948303",
	appId: "1:277255948303:web:afa51467c6ff4dacd3fb7a",
	measurementId: "G-ZXKPNLFRRE"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// isSupported();


function SubscribeUsers() {
	Notification.requestPermission().then(Permission => {
		console.log(Permission);
		
			if (Permission == "granted") {
				// messaging.usePublicVapidKey("BAvMwMWlkmz0HTGdk_jOXp3NsPG6yRUt2a6XyGp-Ad5hxpaf-eosqVRKCSY6AYXbraLN5tprnHlLfnBVwj1USLY")
				// messaging.getToken(messaging, {
				// 	vapidKey:
				// 		"BAvMwMWlkmz0HTGdk_jOXp3NsPG6yRUt2a6XyGp-Ad5hxpaf-eosqVRKCSY6AYXbraLN5tprnHlLfnBVwj1USLY",
				// })
				// messaging.usePublicVapidKey("BAvMwMWlkmz0HTGdk_jOXp3NsPG6yRUt2a6XyGp-Ad5hxpaf-eosqVRKCSY6AYXbraLN5tprnHlLfnBVwj1USLY")
				messaging.getToken({vapidKey:
							"BAvMwMWlkmz0HTGdk_jOXp3NsPG6yRUt2a6XyGp-Ad5hxpaf-eosqVRKCSY6AYXbraLN5tprnHlLfnBVwj1USLY",
					})	
				.then((currentToken) => {
						if (currentToken) {
							console.log("Firebase Token", currentToken);
							// return messaging.getToken();
						} else {

							console.log(
								"No registration token available. Request permission to generate one."
							);

						}
					})
					.catch((err) => {
						console.log("An error occurred while retrieving token. ", err);

					});


			}
			
	});
	
}

