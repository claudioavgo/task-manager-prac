import { Body, Controller, Get, Post, Param, Patch, Delete, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('auth/')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getUsers() {
    return this.userService.findAll();
  }

  @Post()
  createUser(@Body() user: User) {
    const userCreated = this.userService.create(user)

  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
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
