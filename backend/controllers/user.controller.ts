// User controller: handles API requests
import { UserService } from '../services/user.service';

const userService = new UserService();

export async function getUsersHandler(req: any, res: any) {
  const users = await userService.getAllUsers();
  res.json(users);
}
