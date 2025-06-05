import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; //  Giữ lại nếu có
import { AppService } from './app.service';     //  Giữ lại nếu có
import { UsersModule } from './modules/users/users.module'; // Thêm dòng này
// import { CoreModule } from './core/core.module'; // Nếu bạn có CoreModule
// import { SharedModule } from './shared/shared.module'; // Nếu bạn có SharedModule

@Module({
  imports: [
    UsersModule, // Thêm UsersModule vào đây
    // CoreModule,    // Ví dụ
    // SharedModule,  // Ví dụ
  ],
  controllers: [AppController], // Giữ lại hoặc xóa nếu không dùng controller gốc
  providers: [AppService],   // Giữ lại hoặc xóa nếu không dùng service gốc
})
export class AppModule { }