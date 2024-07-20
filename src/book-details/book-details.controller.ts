import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookDetailsService } from './book-details.service';
import { CreateBookDetailDto } from './dto/create-book-detail.dto';
import { UpdateBookDetailDto } from './dto/update-book-detail.dto';

@Controller('book-details')
export class BookDetailsController {
  constructor(private readonly bookDetailsService: BookDetailsService) {}

  @Post()
  create(@Body() createBookDetailDto: CreateBookDetailDto) {
    return this.bookDetailsService.create(createBookDetailDto);
  }

  @Get()
  findAll() {
    return this.bookDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDetailDto: UpdateBookDetailDto) {
    return this.bookDetailsService.update(+id, updateBookDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookDetailsService.remove(+id);
  }
}
