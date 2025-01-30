const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// Load proto file
const packageDefinition = protoLoader.loadSync('backend/proto/services.proto');
const proto = grpc.loadPackageDefinition(packageDefinition).services;

const createOrder = (call, callback) => {
    const { customer_id, product_ids } = call.request;
    const order = { id: '1', customer_id, product_ids, created_at: new Date().toISOString() };  // Simulate DB insertion
    callback(null, order);
};

const getOrder = (call, callback) => {
    const { id } = call.request;
    const order = { id, customer_id: '1', product_ids: ['1'], created_at: '2024-01-01' };  // Simulate DB fetch
    callback(null, order);
};

module.exports = { createOrder, getOrder };
