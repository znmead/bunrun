import figlet from "figlet";

const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const url = new URL(req.url)

        if (url.pathname === '/') {
            const body = figlet.textSync('Pranaam!', {
                font: 'Chunky',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 80,
                whitespaceBreak: true
            }) + '\n' + req.url
            return new Response(body)
        }
        if (url.pathname === '/about') {
            const body = figlet.textSync('About Mead', {
                font: 'Isometric2',
                horizontalLayout: 'full',
                verticalLayout: 'default',
                width: 80,
                whitespaceBreak: true
            }) + '\n' + req.url
            return new Response(body)
        }
        if (url.pathname === '/contact') {
            const body = figlet.textSync('Contact me at 831-236-6136 or zachary.n.mead@gmail.com', {
                font: 'Doom',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 80,
                whitespaceBreak: true
            }) + '\n' + req.url
            return new Response(body)
        }
        if (url.pathname === '/projects') {
            const body = figlet.textSync('Projects', {
                font: 'Small',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 80,
                whitespaceBreak: true
            }) + '\n' + req.url
            return new Response(body)
        }
        if (url.pathname === '/resume') {
            const body = figlet.textSync('Resume', {
                font: 'USA Flag',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 80,
                whitespaceBreak: true
            }) + '\n' + req.url
            return new Response(body)
        }
        if (url.pathname === '/blog') {
            const body = figlet.textSync('Blog', {
                font: 'Big',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 80,
                whitespaceBreak: true
            }) + '\n' + req.url
            return new Response(body)
        }
        else {
            const body = figlet.textSync(`>>> Be  me \n>>> Not  found \n>>> - 404 -`, {
                font: 'Doom',
                horizontalLayout: 'default',
                verticalLayout: 'default',
                width: 80,
                whitespaceBreak: true
            }) + '\n' + req.url
            return new Response(body, { status: 404 })
        }
    }
}); // => Server

console.log(`Listening on PORT http://localhost:${server.port}`)