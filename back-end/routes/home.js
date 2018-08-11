export default function(app) {
    // Home 
    app.get('/', function (request, response) {
        response.send('<h1>Home</h1>')    
    })
}