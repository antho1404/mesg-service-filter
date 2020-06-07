const Service = require('@liteflow/service')
const filter = require('./tasks/filter')

const liteflow = new Service()

liteflow.listenTask({ filter }).on('error', error => console.error(error))
