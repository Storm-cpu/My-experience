import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module'; // Thêm dòng này
// import { CoreModule } from './core/core.module'; // Nếu bạn có CoreModule
// import { SharedModule } from './shared/shared.module'; // Nếu bạn có SharedModule

@Module({
  imports: [
    UsersModule, // Thêm UsersModule vào đây
    // CoreModule,    // Ví dụ
    // SharedModule,  // Ví dụ
  ],
})
export class AppModule { }