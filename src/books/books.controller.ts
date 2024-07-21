import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';


import { UserService } from '../user/user.service';
import { CreateBookWithDetailsDto } from './dto/create-book-with-details.dto';


@Controller('books')
export class BooksController {
  constructor(
    private readonly booksService: BooksService,
    private readonly userService: UserService
  ) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }



  @Post('create-with-details')
  async createBookWithDetails(@Body() body: { userId: number; createBookWithDetailsDto: CreateBookWithDetailsDto }) {
    const { userId, createBookWithDetailsDto } = body;

    // Check if the user is an admin
    const isAdmin = await this.userService.isAdmin(userId);
    
    if (!isAdmin) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'userID is not an admin, Only admin is allowed',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    // Proceed with creating the book and book details
    return this.booksService.createBookWithDetails(createBookWithDetailsDto);
  }
}
