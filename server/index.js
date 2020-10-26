const server = require('socket.io')()
const form = require('./form.js')
const port = 3000

server.on('connection', (socket) => {
    console.log
    socket.on('formSubmit', (req) => {
        console.log(req)
        var name = req.name;
        var email = req.email;
        var phone = req.phone;
    
        form.addForm(name, email, phone)
    })
});


server.listen('3000', () => {
    console.log("Google Sheets API ready")
});