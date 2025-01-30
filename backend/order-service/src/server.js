const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const { createOrder, getOrder } = require('./orderService');

// Load proto file
const packageDefinition = protoLoader.loadSync('backend/proto/services.proto');
const proto = grpc.loadPackageDefinition(packageDefinition).services;

// Create gRPC server
const server = new grpc.Server();
server.addService(proto.OrderService.service, { createOrder, getOrder });

server.bind('0.0.0.0:50054', grpc.ServerCredentials.createInsecure());
console.log('Order service running on port 50054');
server.start();
