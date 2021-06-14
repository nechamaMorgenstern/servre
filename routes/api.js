const router=require('express').Router();
const person=require('../controllers/person');
router.get('/getAll',person.getAllPerson)
router.post('/newPerson',person.newPerson)
module.exports=router;