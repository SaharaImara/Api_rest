const { Router } = require('express');
const router = Router();

router.get('/',(req, res) =>{
    res.json({"Title":"Hello world"});
});
router.get('/users',(req, res) =>{
    const data ={
        "name": "esk",
        "last_name": "imara"
    };
    res.json(data);
});
module.exports =router;