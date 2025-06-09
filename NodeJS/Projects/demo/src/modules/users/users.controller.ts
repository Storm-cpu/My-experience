// src/modules/users/users.controller.ts
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
// Import DTOs nếu bạn đã tạo chúng
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) { // Thêm async
        return await this.usersService.create(createUserDto); // Thêm await
    }

    @Get()
    async findAll() { // Thêm async
        return await this.usersService.findAll(); // Thêm await
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) { // Thêm async
        return await this.usersService.findOne(id); // Thêm await
    }

    @Put(':id')
    async update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto,
    ) { // Thêm async
        return await this.usersService.update(id, updateUserDto); // Thêm await
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) { // Thêm async
        return await this.usersService.remove(id); // Thêm await
    }
}