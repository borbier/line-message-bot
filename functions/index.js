const functions = require('firebase-functions');

exports.LineBot = functions.https.onRequest((req, res) => {
  res.send('Hello world!');
});