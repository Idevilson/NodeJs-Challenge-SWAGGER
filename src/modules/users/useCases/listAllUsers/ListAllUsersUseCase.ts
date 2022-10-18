import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userFoundById = this.usersRepository.findById(user_id);

    if (userFoundById === undefined) {
      throw new Error("Invalid ID!"); 
    }

    if (userFoundById.admin !== true) {
      throw new Error("User not admin");
    } else {
      const users = this.usersRepository.list();
      console.log(users);
      return users;
    }
  }
}

export { ListAllUsersUseCase };
