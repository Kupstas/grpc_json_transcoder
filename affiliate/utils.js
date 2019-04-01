'use strict';

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

exports.loadProto = (path) => {
    const packageDefinition = protoLoader.loadSync(path, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });

    return grpc.loadPackageDefinition(packageDefinition);
};