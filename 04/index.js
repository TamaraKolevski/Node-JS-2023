const path = require('path');

//Get the base filename
console.log(__filename);
console.log(path.basename(__filename));
console.log(__filename.split("\\")[__filename.split("\\").length - 1]);

//Directory name
console.log(path.dirname(__filename));
console.log(_dirname);

//File extension name

console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.parse(__filename).ext);

//concatenate paths
//../04/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));


let imenik = [
    {ime: 'Zlate Zlatevski', telefon: 555666}
    {ime: 'Pero Perovski', telefon: 535666}
    {ime: 'Marko Markovski', telefon: 525666}
]

(async () => {
    try {
        let imenikData = JSON.stringify(imenik); 
        console.log(imenikData);
        await fileWrite(path.join(__dirname, 'test1', 'imenik.txt'))
        let dataString = await fileRead(__dirname, 'test1', 'imenik.txt');
        let data = JSON.parse(dataString)

    } catch(err) {
        console.log(err);
    }
})