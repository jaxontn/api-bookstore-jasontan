import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'nestjs-prisma';

import { CreateBookWithDetailsDto } from './dto/create-book-with-details.dto';


@Injectable()
export class BooksService {

  //ADDDED CONSTRUCTOR
  constructor(private readonly prisma: PrismaService) {}
  
  create(createBookDto: CreateBookDto) {
    //return 'This action adds a new book';
    return this.prisma.book.create({ data: createBookDto });
  }

  findAll() {
    //return `This action returns all books`;
    return this.prisma.book.findMany();
  }

  findOne(id: number) {
    //return `This action returns a #${id} book`;
    return this.prisma.book.findFirst({ where: { id } });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    //return `This action updates a #${id} book`;
    return this.prisma.book.update({ where: { id }, data: updateBookDto });
  }

  remove(id: number) {
    //return `This action removes a #${id} book`;
    return this.prisma.book.delete({ where: { id } });
  }


  async createBookWithDetails(createBookWithDetailsDto: CreateBookWithDetailsDto) {
    const { title, author, publishedDate, isbn, price, summary, pageCount, genre, language, publisher } = createBookWithDetailsDto;

    // Create the book
    const book = await this.prisma.book.create({
      data: {
        title,
        author,
        publishedDate,
        isbn,
        price,
      },
    });

    // Create the book details
    const bookDetails = await this.prisma.bookDetail.create({
      data: {
        bookId: book.id, //Get the book id
        summary,
        pageCount,
        genre,
        language,
        publisher,
      },
    });

    return { book, bookDetails };
  }
}
