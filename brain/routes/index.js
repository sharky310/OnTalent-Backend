'use strict'

const accountRouter = require('./account-router');
const documentRouter = require('./document-router');
const eventRouter = require('./event-router');
const userRouter = require('./user-router');
const adminRouter = require('./admin-router');
const taskRouter = require('./task-router');

module.exports = {
    accountRouter,
    documentRouter,
    eventRouter,
    userRouter,
    adminRouter,
    taskRouter
}