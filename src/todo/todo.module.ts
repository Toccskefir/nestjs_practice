import { Module, ValidationPipe } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { APP_PIPE } from '@nestjs/core';
import { TodoHtmlController } from './todo.html.controller';

@Module({
  imports: [],
  controllers: [TodoController, TodoHtmlController],
  providers: [
    TodoService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({ transform: true, whitelist: true }),
    },
  ],
})
export class TodoModule {}
