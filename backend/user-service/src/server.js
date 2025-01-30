// server.js for the User Service
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const { createUser, getUser } = require('./userService');

// Load the proto file
const packageDefinition = protoLoader.loadSync('proto/services.proto');
const proto = grpc.loadPackageDefinition(packageDefinition).services;

// Create gRPC server
const server = new grpc.Server();
server.addService(proto.UserService.service, { createUser, getUser });

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
console.log('User service running on port 50051');
server.start();
