const express = require('express');
const req = require('express/lib/request');
const router = express.Router();


router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Usando o GET na rota de users'
    })
});

router.post('/',(req, res, next)=>{
    res.status(201).send({
        mensagem: 'Usando POST dentro da rota de users'
    })
});

router.get('/:id_users', (req, res, next)=>{
    const id = req.params.id_users;
    res.status(200).send({
        mensagem: 'user que você procurou ? ',
        id : id
    });
});
router .get('/friend/:id_frined', (req,res ,next)=>{
    const idFriends = req.params.id_friend;
    res.status(200).send({
        mensagem: 'Está é sua lista de amigos:',
        friends: idFriends
    })
});
router.patch('/',(req, res, next)=>{
    res.status(201).send({
        mensagem: 'Usando PATCH dentro da rota de users'
    })
});


router.delete('/',(req, res, next)=>{
    res.status(201).send({
        mensagem: 'Usando DELETE dentro da rota de users'
    })
});

module.exports = router;