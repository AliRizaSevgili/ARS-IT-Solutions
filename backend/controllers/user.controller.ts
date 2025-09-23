// User controller: handles API requests
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Request, Response } from 'express';

const authService = new AuthService();
const userService = new UserService(authService);

export async function getUsersHandler(req: Request, res: Response) {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function createUserHandler(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;
    // TODO: Add validation here
    const user = await userService.createUser(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
