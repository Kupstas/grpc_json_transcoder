'use strict';

const utils = require('./utils');
const grpc = require('grpc');
const grpcPromise = require('grpc-promise');

const QuotesProto = utils.loadProto('quotes.proto').services;

const client = new QuotesProto.Quotes('affiliate-envoy:51051', grpc.credentials.createInsecure());
grpcPromise.promisifyAll(client);

module.exports = client;
