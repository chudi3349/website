const client = require('twilio')();

client.messages.create({
    from: 'whatsapp: +14155238886',
    to: 'whatsapp +2348138733881',
    body: 'Hello From Twilio'
}).then(message => console.log(message.sid));