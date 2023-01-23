import { Module } from '@nestjs/common';
import { MovieService } from './services/movie/movie.service';
import {MongooseModule} from "@nestjs/mongoose";
import {MovieSchema} from "./schema/movie.schema/movie.schema";
import { MoviesController } from './movies.controller';

@Module({
  imports: [
      MongooseModule.forFeature([{
        name:'Movie',
        schema: MovieSchema,
        collection: 'movies2023'}])
  ],
  providers: [MovieService],
  controllers: [MoviesController]
})
export class MoviesModule {}
