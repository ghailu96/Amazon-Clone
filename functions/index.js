const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HxdFDJwgohBsctCFb536ACTssNlvPp6BOpiajT8LNaKl3Pwsb653bIaUrhSrwt6yyrXHrgF2sXuRVhoWJAIJpK7005HpDNqeu')

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;

  console.log('Payment Request Recieved for this amount >>> ', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: 'usd',
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});



exports.api = functions.https.onRequest(app);