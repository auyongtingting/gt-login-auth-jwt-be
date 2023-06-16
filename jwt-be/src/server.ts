import connectDB from "../ormconfig"
import {tRouter} from 'routes/test-routes'
import {Routers} from 'routes/routes'

var app = require('./app')
const cors = require("cors")

const bootstrap = async () => {

    await connectDB

    app.use(tRouter.routes(), tRouter.allowedMethods())
    app.use(Routers.routes(), Routers.allowedMethods())
    
    app.listen(8080)

}

bootstrap()
