import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    // exports: [UsersService] // Nếu bạn muốn service này được sử dụng bởi module khác
})
export class UsersModule { }