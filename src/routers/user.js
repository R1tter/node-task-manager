const express = require('express')
const User = require('../models/user')
const router = new express.Router()


//endpoints de usuários
//criando
router.post('/users', (req, res)=>{
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
})
//procurando  todos
router.get('/users',(req, res)=>{
    //aqui eu poderia passar um nome ou algo assim no find({nome:'marcelo'})
    User.find({}).then((users)=>{
        res.send(users)
    }).catch((e)=>{
        res.status(500).send()
    }) 
})
//procurando um
router.get('/users/:id',(req, res)=>{
    const _id = req.params.id

    User.findById(_id).then((user)=>{
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e)=>{
        res.status(500).send()
    })
    
})
//dando update
router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['nome', 'email', 'password', 'idade']
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({error: 'Update inválido'})
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)    
    }
})

//Deletando usuários
router.delete('/users/:id', async (req, res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
        
    }
})


module.exports = router