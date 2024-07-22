import { Module } from '@nestjs/common';
import { BookDetailsService } from './book-details.service';
import { BookDetailsController } from './book-details.controller';
import { PrismaModule } from 'nestjs-prisma';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [PrismaModule, UserModule], //Import UserModule
  controllers: [BookDetailsController],
  providers: [BookDetailsService],
})
export class BookDetailsModule {}
