import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const responseFindByEmail = this.usersRepository.findByEmail(email);

    if (responseFindByEmail === undefined) {
      const user = new User();

      Object.assign(user, {
        email,
        name,
      });

      const response = this.usersRepository.create(user);

      return response;
    }
    throw new Error("User Already exists!");
  }
}

export { CreateUserUseCase };
