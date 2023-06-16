import { Context } from "koa"
import { Repository } from "typeorm"
import { request, summary, responsesAll, tagsAll, body, path } from "koa-swagger-decorator"
import { User, userSchema } from "../models/user"
import connectDB from "../../ormconfig"

@responsesAll({ 200: { description: "success"}, 400: { description: "bad request"}, 401: { description: "unauthorized, missing/wrong jwt token"}})
@tagsAll(["User"])

export default class UserController {

    @request("get", "/tasks/{email}")
    @summary("Get a specific user with email")
    @path({
        email: { type: "string", required: true, description: "Distinct email of user" }
    })
    @body(userSchema)
    public static async getUser(ctx: Context): Promise<void> {
        const userRepository: Repository<User> = connectDB.manager.getRepository(User)
        const userToFetch: User = await userRepository.findOneBy({email: ctx.params.email})

        if (!userToFetch) {
            ctx.status = 404
            ctx.body = 'The user you are trying to find doesn\'t exist in the db'
        } else {
            ctx.status = 200
            ctx.body = userToFetch
        }
    }
  }
