const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// Load proto file
const packageDefinition = protoLoader.loadSync('backend/proto/services.proto');
const proto = grpc.loadPackageDefinition(packageDefinition).services;

const createCustomer = (call, callback) => {
    const { name, email } = call.request;
    const customer = { id: '1', name, email };  // Simulate DB insertion
    callback(null, customer);
};

const getCustomer = (call, callback) => {
    const { id } = call.request;
    const customer = { id, name: 'John Doe', email: 'johndoe@example.com' };  // Simulate DB fetch
    callback(null, customer);
};

module.exports = { createCustomer, getCustomer };
