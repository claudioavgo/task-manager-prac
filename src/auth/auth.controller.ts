import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly userService: UserService, private readonly authService: AuthService) { }

    @Post('signup')
    createUser(@Body() user: CreateUserDto) {
        const userCreated = this.userService.create(user)
        if (userCreated) {

            const token = this.authService.signIn(user.name, user.password)

            return {
                message: "User created successfully!",
                token: token
            }
        }
    }
}
