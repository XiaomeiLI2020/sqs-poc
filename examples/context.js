'use strict'

const AWS = require('aws-sdk')
AWS.config.update({region: 'eu-west-1'})

module.exports.sqs = new AWS.SQS()
module.exports.queueUrl = 'https://sqs.eu-west-1.amazonaws.com/973007134543/sqs-poc'
