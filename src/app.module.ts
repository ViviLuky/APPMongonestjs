import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import { MoviesModule } from './movies/movies.module';
import { MovieController } from './movie/movie.controller';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb+srv://vivi:vivi@cluster0.cszslkf.mongodb.net/?retryWrites=true&w=majority'),
      MoviesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
