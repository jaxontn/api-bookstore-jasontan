import { Controller, Body, Patch, Param, HttpException, HttpStatus } from '@nestjs/common';
import { BookDetailsService } from './book-details.service';
//import { CreateBookDetailDto } from './dto/create-book-detail.dto';
import { UpdateBookDetailDto } from './dto/update-book-detail.dto';

import { UserService } from 'src/user/user.service';

@Controller('book-details')
export class BookDetailsController {
  constructor(
    private readonly bookDetailsService: BookDetailsService,
    private readonly userService: UserService
  ) {}


  @Patch() //updateByBookId
  async updateByBookId(@Body() body: { userId: number; bookId: number; updateBookDetailDto: UpdateBookDetailDto}) {

    const { userId, bookId, updateBookDetailDto } = body;

    await this.ensureAdmin(userId); // Check if the user is an admin

    return this.bookDetailsService.updateByBookId(bookId, updateBookDetailDto);
  }

  @Patch(':id') //update by detail detail id
    async update(@Param('id') id: string, @Body() body: { userId: number; updateBookDetailDto: UpdateBookDetailDto}) {  
    
    const { userId, updateBookDetailDto } = body;

    await this.ensureAdmin(userId); // Check if the user is an admin
    
    return this.bookDetailsService.update(+id, updateBookDetailDto);
  }


  async ensureAdmin(userId: number) {
    const user = await this.userService.findOne(userId);
    if (!user || !user.isAdmin) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'User is not an admin, only admins are allowed',
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
