import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  createdAt: Date;
}
