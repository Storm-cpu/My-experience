import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Đặt PrismaModule là global để không cần import vào từng module con
@Module({
    providers: [PrismaService],
    exports: [PrismaService], // Export PrismaService để các module khác có thể inject
})
export class PrismaModule { }