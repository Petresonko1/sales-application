const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// Load proto file
const packageDefinition = protoLoader.loadSync('backend/proto/services.proto');
const proto = grpc.loadPackageDefinition(packageDefinition).services;

const createProduct = (call, callback) => {
    const { name, price } = call.request;
    const product = { id: '1', name, price };  // Simulate DB insertion
    callback(null, product);
};

const getProduct = (call, callback) => {
    const { id } = call.request;
    const product = { id, name: 'Product A', price: 100 };  // Simulate DB fetch
    callback(null, product);
};

module.exports = { createProduct, getProduct };
