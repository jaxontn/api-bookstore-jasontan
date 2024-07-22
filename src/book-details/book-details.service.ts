import { Injectable } from '@nestjs/common';
import { CreateBookDetailDto } from './dto/create-book-detail.dto';
import { UpdateBookDetailDto } from './dto/update-book-detail.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class BookDetailsService {

  //ADDDED CONSTRUCTOR
  constructor(private readonly prisma: PrismaService) {}
  
  create(createBookDetailDto: CreateBookDetailDto) {

    return this.prisma.bookDetail.create({ data: createBookDetailDto });
  }

  findAll() {

    return this.prisma.bookDetail.findMany();
  }

  findOne(id: number) {

    return this.prisma.bookDetail.findFirst({ where: { id } });
  }

  update(id: number, updateBookDetailDto: UpdateBookDetailDto) {

    return this.prisma.bookDetail.update({ where: { id }, data: updateBookDetailDto});
  }

  updateByBookId(bookId: number, updateBookDetailDto: UpdateBookDetailDto) {

    // Update bookDetail where bookId matches
    return this.prisma.bookDetail.update({
      where: { bookId },
      data: updateBookDetailDto,
    });

  }

  remove(id: number) {

    return this.prisma.bookDetail.delete({ where: { id } });
  }
}
