const http = require('http');

const server = http.createServer((req,res)=>{

    if(req.url ==='/'){
        return res.end('Welcome to winston homepage')
        //res.end()
    }
    if(req.url === '/about'){
       return res.end('Welcome to about page')
    }
        res.end(`
        <h1>Oops !!</h1>
        <p>Ze can't seem to find the page you are looking for</p>
        <a href='/'>back home</a>
        `)
    
   
   

    
})


server.listen(8000)