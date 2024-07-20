import { Injectable } from '@nestjs/common';
import { CreateBookDetailDto } from './dto/create-book-detail.dto';
import { UpdateBookDetailDto } from './dto/update-book-detail.dto';

@Injectable()
export class BookDetailsService {
  create(createBookDetailDto: CreateBookDetailDto) {
    return 'This action adds a new bookDetail';
  }

  findAll() {
    return `This action returns all bookDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookDetail`;
  }

  update(id: number, updateBookDetailDto: UpdateBookDetailDto) {
    return `This action updates a #${id} bookDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookDetail`;
  }
}
