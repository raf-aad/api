const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Usando o GET na rota de series'
    })
});

router.post('/',(req, res, next)=>{
    res.status(201).send({
        mensagem: 'Usando POST dentro da rota de series'
    })
});

router.get('/:id_series', (req, res, next)=>{
    const id = req.params.id_series
    res.status(200).send({
        mensagem: 'a serie que você procurou é ? ',
        id : id
    });
});

router.patch('/',(req, res, next)=>{
    res.status(201).send({
        mensagem: 'Usando PATCH dentro da rota de series'
    })
});


router.delete('/',(req, res, next)=>{
    res.status(201).send({
        mensagem: 'Usando DELETE dentro da rota de Filmes'
    })
});

module.exports = router;