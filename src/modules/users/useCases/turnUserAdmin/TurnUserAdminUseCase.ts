import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    console.log(user_id);
    const user = this.usersRepository.findById(user_id);

    if (user === undefined) {
      throw new Error("User not existing");
    } else {
      const response = this.usersRepository.turnAdmin(user);
      return response;
    }
  }
}

export { TurnUserAdminUseCase };
