import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'nestjs-prisma'; //ADDED

@Injectable()
export class UserService {

  //ADDDED CONSTRUCTOR
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    //return 'This action adds a new user';
    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    //return `This action returns all user`;
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    //return `This action returns a #${id} user`;
    return this.prisma.user.findFirst({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    //return `This action updates a #${id} user`;
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  remove(id: number) {
    //return `This action removes a #${id} user`;
    return this.prisma.user.delete({ where: { id }});
  }

  async isAdmin(userId: number): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    return user?.isAdmin ?? false;
  }
  
}
