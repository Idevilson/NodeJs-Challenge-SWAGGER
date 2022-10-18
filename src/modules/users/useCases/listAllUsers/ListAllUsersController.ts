import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.headers;

    const user_id = String(id);

    try {
      const users = this.listAllUsersUseCase.execute({user_id});
      console.log(users);
      return response.status(201).json(users).send();
    } catch (error) {
      return response
        .status(400)
        .json({ error: "user not authorized or user invalid" })
        .send();
    }
  }
}

export { ListAllUsersController };
