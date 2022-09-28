const { Router } = require('express');
const router = Router();

const users = require('../sample.json')
router.get('/',(req, res) =>{
    res.json(users);
});
router.get('/:id',(req, res) =>{
    var id = req.params.id;
    users.forEach((id)=>{
        console.log(id)
    });
    res.json(users);
});
router.post('/',(req, res) =>{
    //console.log(req.body);
    const { firstName,lastName,email } = req.body;
    if(firstName && lastName && email){
        const id = users.length +1;
        const newUser = {id,...req.body};
        users.push(newUser);
        res.json(users);
        
    }else{
        res.json("Wrong request");
    }
    //res.send('received');
});


module.exports =router;