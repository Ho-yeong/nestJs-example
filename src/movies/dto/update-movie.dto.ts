import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDTO } from './create-movie.dto';

// npm install @nestjs/mapped-types
export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
