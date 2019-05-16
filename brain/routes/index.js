'use strict'

//TODO Enter each modules the necesary routes

const accountRouter = require('./account-router');
const documentRouter = require('./document-router');
const eventRouter = require('./event-router');
const userRouter = require('./user-router');

module.exports = {
    accountRouter,
    documentRouter,
    eventRouter,
    userRouter
}