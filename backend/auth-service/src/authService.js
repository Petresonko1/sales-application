const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

// Load proto file
const packageDefinition = protoLoader.loadSync('backend/proto/services.proto');
const proto = grpc.loadPackageDefinition(packageDefinition).services;

const authenticate = (call, callback) => {
    const { username, password } = call.request;
    if (username === 'admin' && password === 'admin') {
        callback(null, { token: 'generated-token' });
    } else {
        callback({
            code: grpc.status.UNAUTHENTICATED,
            details: 'Invalid credentials',
        });
    }
};

module.exports = { authenticate };
