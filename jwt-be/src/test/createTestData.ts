import { BaseContext } from 'koa'
import connectDB from '../../ormconfig'
import { User } from 'models/user'

export class testData {
    public static async createTestUser(ctx: BaseContext){
    try {
    await connectDB
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([
        { email: "test@gmail.com", password: "test123"}, 
     ])
    .execute()
    
    ctx.body = "Test user created successfully" 

    } catch (err) {
        ctx.status = err.statusCode || err.status || 500
        ctx.body = {
            message: err.message
        }   
    }
}
}