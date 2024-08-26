import { Body, Controller, Get, Post, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userService.create(user)
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this.userService.findOne(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: Partial<User>) {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
