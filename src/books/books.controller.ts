import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { BooksService } from './books.service';
//import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';


import { UserService } from '../user/user.service';
import { CreateBookWithDetailsDto } from './dto/create-book-with-details.dto';


@Controller('books')
export class BooksController {
  constructor(
    private readonly booksService: BooksService,
    private readonly userService: UserService
  ) {}





  
  @Get()
  async findAll() {

    try {
      return await this.booksService.findAll();
    } catch (error) {
      throw new HttpException('Failed to retrieve books', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }






  @Get(':id')
  async findOne(@Param('id') id: string) {

    try {
      const book = await this.booksService.findOne(+id);
      if (!book) {
        throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
      }
      return book;
    } catch (error) {
      throw new HttpException('Failed to retrieve book', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }






  @Patch(':id') //bookId
  async update(@Param('id') id: string, @Body() body: { userId: number; updateBookDto: UpdateBookDto}) {

    const { userId, updateBookDto } = body;

    try {
      await this.ensureAdmin(userId);
      const updatedBook = await this.booksService.update(+id, updateBookDto);
      if (!updatedBook) {
        throw new HttpException('Failed to update book', HttpStatus.NOT_FOUND);
      }
      return updatedBook;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to update book', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }






  @Delete(':id') //bookId
  async remove(@Param('id') id: string, @Body('adminId') adminId: number) {

    try {
      await this.ensureAdmin(adminId);
      const deletedBook = await this.booksService.remove(+id);
      if (!deletedBook) {
        throw new HttpException('Failed to delete book', HttpStatus.NOT_FOUND);
      }
      return deletedBook;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to delete book', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }






  @Post()
  async createBookWithDetails(@Body() body: { userId: number; createBookWithDetailsDto: CreateBookWithDetailsDto }) {

    const { userId, createBookWithDetailsDto } = body;

    try {
      await this.ensureAdmin(userId);
      // Proceed with creating the book and book details
      const newBook = await this.booksService.createBookWithDetails(createBookWithDetailsDto);
      return newBook;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to create book with details', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }






  private async ensureAdmin(userId: number) {
    
      const user = await this.userService.findOne(userId);
      if (!user || !user.isAdmin) {
        throw new HttpException('User is not an admin, only admins are allowed', HttpStatus.FORBIDDEN);
      }
  }




}
