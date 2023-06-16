import { postgresTables } from "databases/postgres-tables"
import { DataSource } from "typeorm"
import { config }  from "dotenv"

const env = config()

const connectDB =  new DataSource({
    type: "postgres",
    host: env.parsed["DB_HOST"],
    port: 5432,
    username: env.parsed["DB_USERNAME"],
    password: env.parsed["DB_PASSWORD"],
    database: env.parsed["DATABASE"],
    logging: false,
    synchronize: true,
    entities: postgresTables,
})

connectDB
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`)
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err)
    })

export default connectDB