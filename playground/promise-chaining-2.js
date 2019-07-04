require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d1e3153fcec5234742b86b4').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({ competado: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completado:false})
    return count
}

deleteTaskAndCount('5d1e30f618af9c128016fa05').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})