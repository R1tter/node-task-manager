require('../src/db/mongoose')
const User = require('../src/models/user')


// User.findByIdAndUpdate('5d1e0aff1b2b3c2afcff74f9',{idade: 1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({ idade: 1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// }) 

const updateAgeAndCount = async (id, idade) =>{
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ idade })
    return count
}

updateAgeAndCount('5d1e0aff1b2b3c2afcff74f9', 2).then((count) => {
    console.log(count)
}).catch((e)=>{
    console.log(e)
})