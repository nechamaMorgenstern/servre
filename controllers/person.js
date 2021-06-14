const Person = require("../models/Person");
const getAllPerson =async (req, res) => {
    try{
        let persons=await Person.find();
        if(persons)
            res.status(200).json({thePersons:persons});
        else
         res.status(500).json({message:"dont have person"});
    }
   catch(err){
        res.status(500).json({"error":err});
   }
}
const newPerson = async (req, res) => {
    console.log("createUser");
    let newUser = new Person(req.body);
    console.log(newUser)
    newUser.save(function (err, user) {
        if (err){
            console.log(err)
            res.status(500).send(err.message);
        }
        else
            res.status(200).json({ user: user })
    })
}
module.exports={newPerson,getAllPerson}