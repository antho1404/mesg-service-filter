const Service = require('@mesg/service')
const filter = require('./tasks/filter')

const mesg = new Service()

mesg.listenTask({ filter }).on('error', error => console.error(error))
