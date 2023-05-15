const http = require('http');

let fs = require('fs');

const htmlbgn = fs.readFileSync('testMP.html', 'utf-8');

const html = htmlbgn;

const maincssbgn = fs.readFileSync('styleMP.css', 'utf-8');

const maincss = maincssbgn;

const jQbgn = fs.readFileSync('JQuery.js', 'utf-8');

const jQ = jQbgn;

const rndbgn = fs.readFileSync('ruqrandom.js', 'utf-8');

const rnd = rndbgn;

const mainjsbgn = fs.readFileSync('scriptTM.js', 'utf-8');

const mainjs = mainjsbgn;

const btncontbgn = fs.readFileSync('buttonscontentTM.css', 'utf-8');

const btncont = btncontbgn;

const logoM = fs.readFileSync('Imgs/logoM.png');

const sidelogo = fs.readFileSync('Imgs/sidelogo.png');

const yasik = fs.readFileSync('Imgs/yasuo.png');

const favicon = fs.readFileSync('Imgs/mlogo.ico');

const students1 = fs.readFileSync('Imgs/students1.png');

const students2 = fs.readFileSync('Imgs/students2.png');

const headerimg = fs.readFileSync('Imgs/headerimg.png');

const q1 = fs.readFileSync('q1.html');

// Main page ends here, beneath is abyss or questions code tho:

const qnums = fs.readFileSync('qnums.css');

const styleq1 = fs.readFileSync('styleq1.css');

const scriptq1 = fs.readFileSync('scriptq1.js');

const counterq = fs.readFileSync('counterq.js');

const qlogo = fs.readFileSync('Imgs/qlogo.ico');

const nb = fs.readFileSync('nb.mp3');

const about = fs.readFileSync('about.txt');

const mission = fs.readFileSync('mission.txt');

const q2 = fs.readFileSync('q2.html');

const q3 = fs.readFileSync('q3.html');

const q4 = fs.readFileSync('q4.html');

const q5 = fs.readFileSync('q5.html');

const q6 = fs.readFileSync('q6.html');

const q7 = fs.readFileSync('q7.html');

const q8 = fs.readFileSync('q8.html');

//Questions ends here, beneath is howling abyss or final page consts tho:

const finalP = fs.readFileSync('finalP.html');

const scriptFP = fs.readFileSync('scriptFP.js');

const styleFP = fs.readFileSync('styleFP.css');

const finalico = fs.readFileSync('Imgs/finalico.ico');

http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
            break;

        case '/styleMP.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(maincss);
            break;

        case '/scriptTM.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(mainjs);
            break;

        case '/buttonscontentTM.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(btncont);
            break;

        case '/Imgs/mlogo.ico':
            res.writeHead(200, { 'Content-Type': 'image/x-icon' });
            res.end(favicon);
            break;

        case 'favicon.ico':
            res.writeHead(200, { 'Content-Type': 'image/x-icon' });
            res.end(favicon);
            break;

        case '/ruqrandom.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(rnd);
            break;

        case '/Imgs/students1.png':
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(students1);
            break;

        case '/Imgs/students2.png':
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(students2);
            break;

        case '/Imgs/headerimg.png':
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(headerimg);
            break;

        case '/Imgs/qlogo.ico':
            res.writeHead(200, { 'Content-Type': 'image/x-icon' });
            res.end(qlogo);
            break;

        case '/Imgs/sidelogo.png':
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(sidelogo);
            break;

        case '/Imgs/yasuo.png':
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(yasik);
            break;

        case '/about.txt':
            res.writeHead(200, { 'Content-Type': 'text/txt' });
            res.end(about);
            break;

        case '/mission.txt':
            res.writeHead(200, { 'Content-Type': 'text/txt' });
            res.end(mission);
            break;

        // Main page ends here, beneath is abyss or questions code tho:

        case '/q1.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(q1);
            break;

        case '/styleq1.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(styleq1);
            break;

        case '/qnums.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(qnums);
            break;

        case '/scriptq1.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(scriptq1);
            break;

        case '/counterq.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(counterq);
            break;

        case '/Imgs/logoM.png':
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(logoM);
            break;

        case '/nb.mp3':
            res.writeHead(200, { 'Content-Type': 'audio/mpeg' });
            res.end(nb);
            break;

        case '/testMP.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(htmlbgn);
            break;

        case '/q2.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(q2);
            break;

        case '/q3.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(q3);
            break;

        case '/q4.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(q4);
            break;

        case '/q5.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(q5);
            break;

        case '/q6.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(q6);
            break;

        case '/q7.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(q7);
            break;

        case '/q8.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(q8);
            break;

        //  Questions ends here, beneath is abyss or final page resources tho:

        case '/finalP.html':
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(finalP);
            break;

        case '/scriptFP.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(scriptFP)
            break;

        case '/styleFP.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(styleFP);
            break;

        case '/JQuery.js':
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.end(jQ);
            break;

        case '/Imgs/finalico.ico':
            res.writeHead(200, { 'Content-Type': 'image/x-icon' });
            res.end(finalico);
            break;

        // Final page resources ends here, beneath is abyss or error cases tho:

        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404, missing something');
            break;
    }
    // console.log(req.url);
}).listen(5000, () => console.log('server is On'));
//CD E:\TstclCanserV2_project