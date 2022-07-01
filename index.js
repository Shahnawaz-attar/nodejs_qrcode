const qr = require('qrcode');

// Prepare data
let data = {
    id: 1,
    name: "Shahnawaz",
    email: "Shahnawaz@gmail.com"
};

let strData = JSON.stringify(data)

// To display qr code into terminal
qr.toString(strData, { type: 'terminal' },
    function(err, code) {

        if (err) return console.log("error occurred")

        console.log(code)
    });

// To display qrcode in string format
qr.toDataURL(strData, function(err, code) {
    if (err) return console.log("error occurred")

    console.log(code)
})
  