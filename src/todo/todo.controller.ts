import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateTodoDTO, GetTodosInput, TodoService } from './todo.service';

@Controller('/todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get()
  getTodos(@Query() input: GetTodosInput) {
    return this.todoService.getTodos(input);
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
  postTodo(@Body() todoDTO: CreateTodoDTO) {
    return this.todoService.postTodo(todoDTO);
  }

  @Put('/:id')
  updateTodo(@Param('id') id: string, @Body() todoDTO: CreateTodoDTO) {
    return this.todoService.updateTodo(id, todoDTO);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(id);
  }
}
