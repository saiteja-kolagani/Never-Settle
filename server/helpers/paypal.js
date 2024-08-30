const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "LN6EKRBTR4E42",
  client_secret: "MyPetNameIsCASPER",
});

module.exports = paypal;
