'use strict'

const sqs = require('./context').sqs

sqs.listQueues({}, function(err, data) {
  if (err) {
    console.log(err, err.stack)
  }
  else {
    console.log(data)
  }
})
