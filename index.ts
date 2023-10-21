import figlet from "figlet";



const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const body = figlet.textSync('Pranaam!', {
            font: 'Chunky',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }) + '\n' + req.url
        return new Response(body)
    }
}); // => Server

console.log(`Listening on PORT http://localhost:${server.port}`)