import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDTO } from './todo.service';

@Controller('/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getTodos(
    @Query('limit') limit: string | string[],
    @Query('offset') offset: string | string[],
  ) {
    if (Array.isArray(limit) || Array.isArray(offset)) {
      throw new BadRequestException();
    } else {
      const limitNumber = limit === undefined ? Infinity : parseInt(limit);
      const offsetNumber = offset === undefined ? 0 : parseInt(limit);

      return this.todoService.getTodos(limitNumber, offsetNumber);
    }
  }

  @Get('/:id')
  getTodo(@Param('id') id: string) {
    const todo = this.todoService.getTodo(id);
    if (!todo) {
      throw new NotFoundException();
    }
    return todo;
  }

  @Post()
  postTodo(@Body() todoDTO: TodoDTO) {
    return this.todoService.postTodo(todoDTO);
  }
}
