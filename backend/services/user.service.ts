// User service: business logic for user operations
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

export class UserService {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  // Example: get all users
  async getAllUsers(): Promise<User[]> {
    // TODO: Integrate with Prisma client
    return [];
  }

  // Create user with hashed password
  async createUser(name: string, email: string, plainPassword: string): Promise<User> {
    const hashedPassword = await this.authService.hashPassword(plainPassword);
    // TODO: Save user to DB with hashedPassword
    return {
      id: 0,
      name,
      email,
      password: hashedPassword,
      createdAt: new Date()
    };
  }
}
