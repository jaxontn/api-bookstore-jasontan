import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}






  @Post()
  async create(@Body() createUserDto: CreateUserDto) {

    try {
      return await this.userService.create(createUserDto);
    } catch (error) {
      throw new HttpException('Failed to create user', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }






  @Get()
  async findAll() {

    try {
      return await this.userService.findAll();
    } catch (error) {
      throw new HttpException('Failed to retrieve users', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }






  @Get(':id')
  async findOne(@Param('id') id: string) {

    try {
      const user = await this.userService.findOne(+id);
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return user;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to retrieve user', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }






  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {

    try {
      const updatedUser = await this.userService.update(+id, updateUserDto);
      if (!updatedUser) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return updatedUser;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to update user', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }






  @Delete(':id')
  async remove(@Param('id') id: string) {

    try {
      const deletedUser = await this.userService.remove(+id);
      if (!deletedUser) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return deletedUser;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to delete user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }






  @Get('/isAdmin/:id')
  async isAdmin(@Param('id') id: string) {

    try {
      const isAdmin = await this.userService.isAdmin(+id);
      if (isAdmin === null) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return isAdmin;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException('Failed to check admin status', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }


  
}
