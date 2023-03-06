// const fs = require('fs');
// const path = require('path');

// //Create a folder
// // fs.mkdir(path,join(__dirname, '/test1'), {}, eer => {
// //     if (err) throw err;
// //     console.log('Folder is created!');
// // }) 


// //Create and write file
// //Also append to file
// fs.writeFile(path.join(__dirname, 'test1', 'hello.txt'), 'Hello World!!!', err => {
//     if(err)throw err;
//     console.log('File was created and was written into...');

// });

// fs.appendFile(path.join(__dirname, 'test1', 'hello.txt'), 'I love nodejs!!!', err => {
//     if(err)throw err;
//     console.log('File was appended to...');
// });

// fs.readFile(path.join(__dirname, 'test1', 'hello.txt'), 'utf-8', (err,data)  => {
//     if(err)throw err;
//     console.log(data);
// });

// fs.rename(path.join(__dirname, 'test1', 'hello.txt'), path.join(__dirname, test1, 'hello_preimenuvam_txt'), err => {
//     if(err)throw err;
//     console.log('The file has been renamed...');
// });



const fs = require('fs');
const path = require('path');

const fileWrite = (filename, data) => {
    return new Promise((success, fail) => {
        fs.writeFile(filename, data, err => {
            if(err) return fail (err);
            return success();
        });
    });
};

fileWrite(path.join(__dirname, 'test', 'ocenki.txt'), '4, 5, 6')
    .then(() => {
console.log("SUCCESS!");
return fileWrite(path.join(__dirname, 'test', 'boi.txt'), 'crvena, zolta, zelena');
    }).then(() => {
console.log("SUCCESS 2!");
return fileWrite(path.join(__dirname, 'test', 'boi2.txt'), 'plava, violetova, portokalova')
    }).catch(err => {
        console.log(err);
    });


console.log('se izvrsi ova');


const fileRead = (filename) => {
    return new Promise((success, fail) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if(err) return fail (err);
            return success(data);
        });
    });
};

fileRead(path.join(__dirname, 'test', 'book.txt'))
    .then((data) => {
console.log("SUCCESS!");
console.log(data);
    }).catch(err => {
        console.log("PROMISE REJECTED");
        console.log(err);
    });