import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'nestjs-prisma';

import { CreateBookWithDetailsDto } from './dto/create-book-with-details.dto';
//import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';


@Injectable()
export class BooksService {

  //ADDDED CONSTRUCTOR
  constructor(private readonly prisma: PrismaService) {}
  
  create(createBookDto: CreateBookDto) {

    return this.prisma.book.create({ data: createBookDto });
  }

  findAll() {

    return this.prisma.book.findMany({
      include: {
        bookDetail: true, // Include the related book detail
      },
    });
  }

  findOne(id: number) {

    return this.prisma.book.findFirst({ where: { id }, 
      include: {
      bookDetail: true, // Include the related book detail
    }, });
  }

  update(id: number, updateBookDto: UpdateBookDto) {

    return this.prisma.book.update({ where: { id }, data: updateBookDto });
  }

  async remove(id: number) {

    const bookId = id;

    // Delete the bookDetail record first
    await this.prisma.bookDetail.deleteMany({
      where: { bookId }
    });

    try {
      
      // Then delete the book record
      return this.prisma.book.delete({
        where: { id }
      });

    } catch (error) {
      // General error handling
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'An error occurred while trying to delete the book. Please try again later.',
        },
        HttpStatus.CONFLICT,
      );
    }
    
  }


  async createBookWithDetails(createBookWithDetailsDto: CreateBookWithDetailsDto) {
    const { title, author, publishedDate, isbn, price, summary, pageCount, genre, language, publisher } = createBookWithDetailsDto;

    // Check if the ISBN already exists
    const existingBook = await this.prisma.book.findUnique({
      where: { isbn },
    });

    if (existingBook) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'A book with this ISBN already exists',
        },
        HttpStatus.CONFLICT,
      );
    }

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
