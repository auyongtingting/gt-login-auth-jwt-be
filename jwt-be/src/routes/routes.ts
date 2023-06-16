import * as Router from 'koa-router'
import controller = require('controllers')

export const Routers = new Router()

Routers.get('/users', controller.user.getUsers) 

  