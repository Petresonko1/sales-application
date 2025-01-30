const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const { createProduct, getProduct } = require('./productService');

// Load proto file
const packageDefinition = protoLoader.loadSync('backend/proto/services.proto');
const proto = grpc.loadPackageDefinition(packageDefinition).services;

// Create gRPC server
const server = new grpc.Server();
server.addService(proto.ProductService.service, { createProduct, getProduct });

server.bind('0.0.0.0:50053', grpc.ServerCredentials.createInsecure());
console.log('Product service running on port 50053');
server.start();
