import { Injectable, NotFoundException } from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { UsersRepository } from './users.repository'; // Import repository

@Injectable()
export class UsersService {
    constructor(private repository: UsersRepository) { }

    async create(data: Prisma.UserCreateInput): Promise<User> {
        return this.repository.create(data);
    }

    async findAll(): Promise<User[]> {
        return this.repository.findAll();
    }

    async findOne(id: number): Promise<User> {
        const user = await this.repository.findOne(id);
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
        await this.findOne(id);

        return this.repository.update(id, data);
    }

    async remove(id: number): Promise<User> {
        await this.findOne(id);
        return this.repository.remove(id);
    }
}