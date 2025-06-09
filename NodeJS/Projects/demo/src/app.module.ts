import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    UsersModule, // Thêm UsersModule vào đây
    PrismaModule,
    // SharedModule,  // Ví dụ
  ],
})
export class AppModule { }