import { Context } from "koa"
import { Repository } from "typeorm"
import { request, summary, responsesAll, tagsAll } from "koa-swagger-decorator"
import { User } from "../models/user"
import connectDB from "../../ormconfig"


@responsesAll({ 200: { description: "success"}, 400: { description: "bad request"}, 401: { description: "unauthorized, missing/wrong jwt token"}})
@tagsAll(["User"])
export default class UserController {

    @request("get", "/users")
    @summary("Retrieve all users")
    public static async getUsers(ctx: Context): Promise<void> {
        const userRepository: Repository<User> = connectDB.manager.getRepository(User) 

        const users: User[] = await userRepository.find()

        ctx.status = 200 
        ctx.body = users
    }

  }
