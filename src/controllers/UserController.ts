import { Request, Response, Router } from "express";
import { AppResponse, User } from "../@types";

class UserController {
  public path = "/users";
  public router = Router();

  private users: User[] = [
    {
      id: 1,
      name: "Euclides Bernardo",
      email: "euclides.bernardo@nzooji.com",
      age: 20,
    },
    {
      id: 2,
      name: "Raúl Inácio",
      email: "raul.inacio@nzooji.com",
      age: 21,
    },
  ];

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get(this.path, this.index);
  }

  index = (_: Request, res: Response<AppResponse<User[]>>) => {
    res.status(200).send({ success: true, data: this.users });
  };

  show = (req: Request, res: Response<AppResponse<User>>) => {
    const { id } = req.params;

    const userId: number = parseInt(id, 9);

    if (userId > this.users.length) {
      res.status(200).send({ success: true });
      return;
    } else if (userId <= 0) {
      res.status(200).send({
        success: false,
        message: "O id do usuário não pode ser nulo ou negativo",
      });
      return;
    }

    const user: User = this.users[userId - 1];

    res.status(200).send({ success: true, data: user });
  };

  store = (req: Request, res: Response<AppResponse<User>>) => {
    const { name, email, age } = req.body;

    const id: number = this.users.length + 1;

    const user: User = { id, name, email, age };

    this.users.push(user);

    res.status(201).send({ success: true, data: user });
  };

  update = (req: Request, res: Response<AppResponse<User>>) => {
    const { id } = req.params;

    const userId = parseInt(id, 9) - 1;

    if (userId > this.users.length || userId < 0) {
      res.status(200).send({
        success: false,
        message: "Usuário com o id informado não encontrado",
      });
      return;
    }

    const user = this.users[userId];

    user.name = req.body.name ?? user.name;
    user.email = req.body.email ?? user.email;
    user.age = req.body.age ?? user.age;

    this.users[userId] = user;

    res.status(200).send({ success: true, data: user });
  };
}

export default UserController;
