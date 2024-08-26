import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.usersRepository.findOneBy({ id });
    }

    async create(user: CreateUserDto): Promise<User> {
        try {
            return await this.usersRepository.save(user);
        } catch (error) {
            throw new BadRequestException('Failed to create user');
        }
    }

    async update(id: string, user: Partial<User>): Promise<User> {
        const existingUser = await this.findOne(id);
        if (!existingUser) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        try {
            await this.usersRepository.update(id, user);
            return this.findOne(id);
        } catch (error) {
            throw new BadRequestException('Failed to update user');
        }
    }

    async remove(id: string): Promise<void> {
        const existingUser = await this.findOne(id);
        if (!existingUser) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        try {
            await this.usersRepository.delete(id);
        } catch (error) {
            throw new BadRequestException('Failed to delete user');
        }
    }
}
