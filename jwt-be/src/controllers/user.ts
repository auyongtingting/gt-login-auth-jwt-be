import { Context } from "koa"
import { Repository } from "typeorm"
import { request, summary, responsesAll, tagsAll } from "koa-swagger-decorator"
import { User } from "../models/user"
import connectDB from "../../ormconfig"


@responsesAll({ 200: { description: "success"}, 400: { description: "bad request"}, 401: { description: "unauthorized, missing/wrong jwt token"}})
@tagsAll(["User"])
export default class UserController {

    @request("get", "/users/{email}")
    @summary("Retrieve one specific user")
    public static async getUsers(ctx: Context): Promise<void> {
        const userRepository: Repository<User> = connectDB.manager.getRepository(User)

        const users: User[] = await userRepository.find()

        if (!users) {
              ctx.status = 400 
              ctx.body = 'The user you are trying to find doesn\'t exist in the db'
          } else {
              ctx.status = 204
          }

        ctx.status = 200 
        ctx.body = users
    }

  }

//   @request("delete", "/tasks")
//   @summary("Delete specific task")
//   public static async deleteTask (ctx: Context) {
//       const taskRepository: Repository<Task> = connectDB.manager.getRepository(Task) // Get a task repository to perform operations with tasks
      
//       const taskToRemove: Task = await taskRepository.findOne({where: {id: ctx.params.id}}) // Load the task by id
//       if (!taskToRemove) {
//           ctx.status = 400 // Return a BAD REQUEST status code and error message
//           ctx.body = 'The task you are trying to delete doesn\'t exist in the db'
//       } else {
//           await taskRepository.remove(taskToRemove) // Remove task 
//           ctx.status = 204 // Return a No Content Success Response code 
//       }
//   }
