import { Request, Response } from 'express'

import User from '../Schema/User'

class UserController {
  public async index (request:Request, response:Response): Promise<Response> {
    const user = await User.find()

    return response.json(user)
  }

  public async create (request:Request, response:Response): Promise<Response> {
    const user = await User.create(request.body)

    // user.fullName()

    return response.json(user)
  }
}

export default new UserController()
