'use strict';

const utils = require('./utils');
const grpc = require('grpc');

const AffiliateProto = utils.loadProto('affiliate.proto').services;
const quotesGrpcClient = require('./quotes-client');

const methods = {
    getAffiliate: (call, callback) => {
        console.log('got message from quotes', call.request);
        const response = JSON.stringify({ message: 'sam ti pidor' });
        return callback(null, { response });
    }
};

function main() {
    const server = new grpc.Server();
    server.addService(AffiliateProto.Affiliate.service, methods);
    server.bind('0.0.0.0:50061', grpc.ServerCredentials.createInsecure());
    server.start();

    console.log('affiliate grpc server running on port 50061');

    setInterval(pingQuotes, 2000);
}

main();

async function pingQuotes() {
    try {
        const response = await quotesGrpcClient.getQuotes().sendMessage({ message: 'message from affiliate'});
    } catch (error) {
        console.log('grpc error', error);
    }
}