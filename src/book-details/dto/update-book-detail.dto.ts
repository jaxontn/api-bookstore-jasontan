import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDetailDto } from './create-book-detail.dto';

export class UpdateBookDetailDto extends PartialType(CreateBookDetailDto) {}
