'use strict'

const sqs = require('./context').sqs
const queueUrl = require('./context').queueUrl

let msg = JSON.stringify({
  text: 'sample message body',
  created: Date.now()
})

let sendParams = {
  MessageBody: msg,
  QueueUrl: queueUrl,
  DelaySeconds: 0,
  MessageAttributes: {
    text: {
      DataType: 'String',
      StringValue: 'sample string attribute'
    },
    number: {
      DataType: 'Number',
      StringValue: '12.34'
    }
  }
}

let sendReq = sqs.sendMessage(sendParams)
sendReq.
  on('success', function() {
    console.log('Success!')
  }).
  on('error', function() {
    console.log('Error!')
  }).
  on('complete', function(response) {
    console.log('Always!')
    console.log(response.data)
  }).
  send()
