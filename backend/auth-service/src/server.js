const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const { authenticate } = require('./authService');

// Load proto file
const packageDefinition = protoLoader.loadSync('backend/proto/services.proto');
const proto = grpc.loadPackageDefinition(packageDefinition).services;

// Create gRPC server
const server = new grpc.Server();
server.addService(proto.AuthService.service, { authenticate });

server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
console.log('Auth service running on port 50051');
server.start();
