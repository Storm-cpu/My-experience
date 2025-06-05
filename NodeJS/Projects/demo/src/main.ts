import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // Thêm dòng này

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Sử dụng ValidationPipe toàn cục
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Loại bỏ các thuộc tính không có trong DTO
      forbidNonWhitelisted: true, // Báo lỗi nếu có thuộc tính không mong muốn
      transform: true, // Tự động chuyển đổi kiểu dữ liệu (ví dụ: string sang number cho params)
      transformOptions: {
        enableImplicitConversion: true, // Cho phép chuyển đổi ngầm định
      },
    }),
  );

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();