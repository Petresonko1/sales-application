// userService.js for User Service
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// Load the proto file
const packageDefinition = protoLoader.loadSync('proto/services.proto');
const proto = grpc.loadPackageDefinition(packageDefinition).services;

// Logic for creating a user
const createUser = (call, callback) => {
    const { username, email } = call.request;
    const user = { id: '1', username, email, created_at: new Date().toISOString() };
    callback(null, user);
};

// Logic for getting a user
const getUser = (call, callback) => {
    const { id } = call.request;
    const user = { id, username: 'JohnDoe', email: 'john.doe@example.com', created_at: new Date().toISOString() };
    callback(null, user);
};

module.exports = { createUser, getUser };
