import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**
 * See optional instruction for global modules https://docs.nestjs.com/modules#global-modules
 */
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
