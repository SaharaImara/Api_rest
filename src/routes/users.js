const { Router } = require('express');
const router = Router();

var all_ = [{
    "id": 1,
    "title": "Universidad",
    "keywords": ["estudios", "importante", "academia"],
    "userId": 1
    
},
{
    "id": 2,
    "title": "Casa",
    "keywords": ["oficio", "necesario", "orden"],
    "userId": 2
   
},
{
    "id": 3,
    "title": "job",
    "keywords": ["task1", "task2", "task3"],
    "userId": 2
    
}
]
var task = [
    {
        "id": 1,
        "title": "Estudiar para el examen de programación",
        "completed": 0,
        "todoId": 1,
        "userId": 1
    }, {
        "id": 2,
        "title": "Ir a clases",
        "completed": 1,
        "todoId": 1,
        "userId": 1
    }
]
const users = require('../sample.json')

router.get('/users', (req, res) => {
    res.json(users);
});
router.get('/users/todos/:id', (req, res) => {
    var id = req.params.id;
    var matches = [];
    //console.log(task.filter(x => x.userId == id))
    all_.forEach((x)=>{
        if(x.id == id){
           x.todo =(task.filter(x => x.userId == id));
           matches.push(x);
        }
    });
    console.log(matches)
    res.json(matches)
});

router.get('/users/:id/todos', (req, res) => {
    var id = req.params.id;
    users.forEach((users) => {
        if (users.id == id) {
            var matches = all_.filter(x => x.userId == users.id)
            console.log(matches)
            res.json(matches)
        }

    });

});
router.get('/users/:id', (req, res) => {
    var id = req.params.id;
    users.forEach((users) => {
        if (users.id == id) {
            res.json(users)
        }
    });
});
router.post('/users', (req, res) => {
    //console.log(req.body);
    const { firstName, lastName, email } = req.body;
    if (firstName && lastName && email) {
        const id = users.length + 1;
        const newUser = { id, ...req.body };
        users.push(newUser);
        res.json(users);

    } else {
        res.json("Wrong request");
    }
    //res.send('received');
});

router.post('/todos/:id/task', (req, res) => {
    //console.log(req.body);
    let userId = req.params.id;
    let todoId = req.params.id
    var title = req.body.title;
    var completed = req.body.completed;
    completed =completed+1
    if (title && completed) {
        let id = task.length +1;
        const newTask = { id,title,completed,todoId,userId };
        task.push(newTask);
        res.json(task);

    } else {
        res.json("Wrong request");
    }
});


module.exports = router;