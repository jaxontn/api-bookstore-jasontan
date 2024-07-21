// src/api/dto/create-book-with-details.dto.ts

//import { IsString, IsInt, IsNotEmpty, IsDate, IsNumber } from 'class-validator';

export class CreateBookWithDetailsDto {

  title: string;
  author: string;
  publishedDate: Date;
  isbn: string;
  price: number;
  summary: string;
  pageCount: number;
  genre: string;
  language: string;
  publisher: string;
  
}
