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
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { User } from './entities/user.entity'; // <-- THAY ĐỔI IMPORT NÀY (nếu bạn đổi đường dẫn)

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: HttpStatus.OK, description: 'Return all users.', type: [User] }) // Bây giờ User là một class
    findAll(): User[] { // Hoặc Promise<User[]> nếu service là async
        return this.usersService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a user by ID' })
    @ApiParam({ name: 'id', description: 'User ID', type: Number })
    @ApiResponse({ status: HttpStatus.OK, description: 'Return the user.', type: User }) // User là class
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found.' })
    findOne(@Param('id', ParseIntPipe) id: number): User { // Hoặc Promise<User>
        return this.usersService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'The user has been successfully created.', type: User }) // User là class
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request.' })
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createUserDto: CreateUserDto): User { // Hoặc Promise<User>
        return this.usersService.create(createUserDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update an existing user' })
    @ApiParam({ name: 'id', description: 'User ID', type: Number })
    @ApiResponse({ status: HttpStatus.OK, description: 'The user has been successfully updated.', type: User }) // User là class
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found.' })
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto,
    ): User { // Hoặc Promise<User>
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a user' })
    @ApiParam({ name: 'id', description: 'User ID', type: Number })
    // Đối với API xóa, thường trả về 204 No Content hoặc một thông báo, không nhất thiết là User entity
    @ApiResponse({ status: HttpStatus.OK, description: 'The user has been successfully deleted.' })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found.' })
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.remove(id);
    }
}