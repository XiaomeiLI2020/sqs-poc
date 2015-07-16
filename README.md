zmq-poc
==============
AWS SQS playground on node.js

## Usage

Update `examples/config.js` to match your AWS region, queue URL and authentication (currently using shared
credentials file on `~/.aws/credentials`).

To run the examples use:
- `node examples/list_queues`
- `node examples/send`
- `node examples/receive_and_delete`
