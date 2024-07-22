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

    try {
      await this.ensureAdmin(userId); // Check if the user is an admin
      const updatedDetail = await this.bookDetailsService.updateByBookId(bookId, updateBookDetailDto);
      if (!updatedDetail) {
        throw new HttpException('Failed to update book detail', HttpStatus.NOT_FOUND);
      }
      return updatedDetail;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to update book detail', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }






  @Patch(':id') //update by detail detail id
  async update(@Param('id') id: string, @Body() body: { userId: number; updateBookDetailDto: UpdateBookDetailDto}) {  

    const { userId, updateBookDetailDto } = body;

    try {
      await this.ensureAdmin(userId); // Check if the user is an admin
      const updatedDetail = await this.bookDetailsService.update(+id, updateBookDetailDto);
      if (!updatedDetail) {
        throw new HttpException('Failed to update book detail', HttpStatus.NOT_FOUND);
      }
      return updatedDetail;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to update book detail', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }






  private async ensureAdmin(userId: number) {

      const user = await this.userService.findOne(userId);
      if (!user || !user.isAdmin) {
        throw new HttpException('User is not an admin, only admins are allowed', HttpStatus.FORBIDDEN);
      }
  }



}
