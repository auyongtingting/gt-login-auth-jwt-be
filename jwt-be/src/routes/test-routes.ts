import * as Router from 'koa-router'
import createTestData = require('../test/createTestData')

export const tRouter = new Router()

tRouter.post('/testusers', createTestData.testData.createTestUser)
