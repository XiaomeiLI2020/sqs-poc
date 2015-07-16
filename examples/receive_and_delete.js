'use strict'

const sqs = require('./context').sqs
const queueUrl = require('./context').queueUrl

let receiveParams = {
  QueueUrl: queueUrl,
  AttributeNames: [
    'All'
  ],
  MaxNumberOfMessages: 1,
  MessageAttributeNames: [
    'All'
  ],
  VisibilityTimeout: 0,
  WaitTimeSeconds: 0
}

sqs.receiveMessage(receiveParams, function(err, data) {
  if (err) {
    console.log(err, err.stack)
  }
  else {
    console.log(data)
    console.log(data.Messages[0].MessageAttributes)

    let deleteParams = {
      QueueUrl: queueUrl,
      ReceiptHandle: data.Messages[0].ReceiptHandle
    }

    let rcvMsg = JSON.parse(data.Messages[0].Body)
    console.log(rcvMsg.text)
    console.log(new Date(rcvMsg.created));
    sqs.deleteMessage(deleteParams, function(err, data) {
      if (err) {
        console.log(err, err.stack)
      }
      else {
        console.log(data)
      }
    })
  }
})
