const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Usando o GET na rota de animes'
    })
});

router.post('/',(req, res, next)=>{
    
    const anime =  {
        nome:req.body.nome,
        data:req.body.data
    };

    res.status(201).send({
        mensagem: 'Usando POST dentro da rota de animes',
        animeAdcionado: anime
    })
});

router.get('/:id_animes', (req, res, next)=>{
    const id = req.params.id_animes
    res.status(200).send({
        mensagem: 'a serie que você procurou é ? ',
        id : id
    });
});

router.patch('/',(req, res, next)=>{
    res.status(201).send({
        mensagem: 'Usando PATCH dentro da rota de animes'
    })
});


router.delete('/',(req, res, next)=>{
    res.status(201).send({
        mensagem: 'Usando DELETE dentro da rota de animes'
    })
});
module.exports = router;