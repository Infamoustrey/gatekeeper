# gatekeeper

> A request Middleware for Express

This middleware package offers a variety of usefull functions to expedite error handeling and app development.

### Install & Use

First download into your project and add to your package.json.

```bash
$ npm install @infamoustrey/gatekeeper --save
```

Then import into your express app.

```javascript

let app = require('express')();
let gatekeeper = require('@infamoustrey/gatekeeper');

// The Require function will throw a 400 response if the required parameters are not met
app.get('/api/foo', gatekeeper.Require(['bar']), (res, req) => {

    res.send('Value of parameter bar: '+req.body.bar);

});

app.listen(3000, () => console.log('App Listening on port: ' + 3000));

```