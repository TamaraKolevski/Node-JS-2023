// 9Qfe97UzVlZDQG0T
const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://tamarakolevski:9Qfe97UzVlZDQG0T@cluster0.sjfx4hl.mongodb.net/JavaScriptAcademy?retryWrites=true&w=majority'

mongoose.connect(connectionString);

const Users = mongoose.model(
    'users',
    {
        _id: String,
        name: String,
        last_name: String,
        date_of_birth: String
    },
    'users'
    );

Users.find({}).
    then(user => {
        console.log(users);
    }).catch(err => {
        console.log(err);
    });

let newUser = new Users({
    _id: new mongoose.Types.ObjectId(),
        name: 'Pero',
        last_name: 'Perovski',
        date_of_birth: new Date("1982-08-30")
});

newUser.save();

// Users.updateOne()
// Users.update()

// Users.updateOne({_id: "6421e0488ed12b11cb82157f"}, {last_name: "Zlatevski"}).
// then(user =>{
//     console.log(user);
// }).catch(err => {
//     console.log(err);
// });

// Users.findOne({name: "Pero"}).
// then(user =>{
//     console.log(user.name);
//     console.log(user.last_name);
// }).catch(err => {
//     console.log(err);
// });

Users.deleteOne({_id: "6421e0488ed12b11cb82157f"}).
then(user =>{
 console.log(user.name);
     console.log(user.name + 'successufully deleted');
     }).catch(err => {
     console.log(err); });



const user = await Users.findById("6421e0488ed12b11cb82157f").exec;
console.log




