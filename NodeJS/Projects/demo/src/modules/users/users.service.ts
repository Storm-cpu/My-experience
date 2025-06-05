import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface'; // <-- IMPORT TỪ FILE MỚI

@Injectable()
export class UsersService {
    private users: User[] = [
        { id: 1, name: 'Alice', email: 'alice@example.com', age: 30 },
        { id: 2, name: 'Bob', email: 'bob@example.com', age: 25 },
    ];
    private nextId = 3;

    findAll(): User[] {
        return this.users;
    }

    findOne(id: number): User {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new NotFoundException(`User with ID "${id}" not found`);
        }
        return user;
    }

    create(createUserDto: CreateUserDto): User {
        const newUser: User = {
            id: this.nextId++,
            ...createUserDto,
        };
        this.users.push(newUser);
        return newUser;
    }

    update(id: number, updateUserDto: UpdateUserDto): User {
        const user = this.findOne(id);
        const userIndex = this.users.findIndex(u => u.id === id);

        const updatedUser = { ...user, ...updateUserDto };
        this.users[userIndex] = updatedUser;
        return updatedUser;
    }

    remove(id: number): { message: string } {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new NotFoundException(`User with ID "${id}" not found`);
        }
        this.users.splice(userIndex, 1);
        return { message: `User with ID "${id}" successfully removed` };
    }
}