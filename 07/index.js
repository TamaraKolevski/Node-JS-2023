//  


const fs = require('fs');


const fileRead = (filename) => {
    return new Promise((success, fail) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return fail(err);
            return success(data);
        });
    });
};


const render = async (page, data) {
    let content = await fileRead('./${page}.html');
    return content.replace('{{res}}', data);
};
console.log('Server is started...')
server.listen(8080);

// let text = 'Zdravo jas sum Zivko i ova e 7mi cas';
// let zbor = 'zdravo';

// let rezultat = text.toLowerCase().search('zdravo');
// if(rezultat === false) {
//     console.log('rezultatot ne e najden vo tekstot');
// }else  {
//     console.log('pozicijata na koja se naoga zborot vo stringot e' + rezultat);
// }