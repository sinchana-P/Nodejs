// import {x} from './app'

// -----
const app = require('./app')

console.log(app)
console.log(app.x)
console.log(app.y)
console.log(app.z())

// ---

const arr=[2,3,4,5,6,7,3,8,2]

let result = arr.filter((item) => {
    return item > 3
})
console.warn(result)