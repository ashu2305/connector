const admin = require('firebase-admin');

var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialmediaapp-43325.firebaseio.com"
});



//admin.initializeApp();

const db = admin.firestore();


module.exports = { admin, db };