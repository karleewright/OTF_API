
const { router, get} = require('microrouter')
const cors= require('micro-cors')()
const { send } = require('micro')
const Stats = require ('./stats')






module.exports = cors(
    router(
        ...Stats,
    )  
    
)

