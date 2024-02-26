import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Render,
  Res,
} from '@nestjs/common';
import { CreateTodoDTO, TodoService } from './todo.service';
import { Response } from 'express';

@Controller('todo-html')
export class TodoHtmlController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @Render('todo/list')
  listTodos() {
    return { todos: this.todoService.getTodos({}) };
  }

  @Get('/:id')
  @Render('todo/details')
  returnTodo(@Param('id') id: string) {
    const todo = this.todoService.getTodo(id);
    if (!todo) {
      throw new NotFoundException();
    }
    return todo;
  }

  @Post()
  postTodo(@Body() todoDTO: CreateTodoDTO, @Res() res: Response) {
    this.todoService.postTodo(todoDTO);
    res.render('todo/list', this.todoService.getTodos({}));
  }

  @Post('/edit/:id')
  updateTodo(
    @Param('id') id: string,
    @Body() todoDTO: CreateTodoDTO,
    @Res() res: Response,
  ) {
    this.todoService.updateTodo(id, todoDTO);
    res.render('todo/details', this.todoService.getTodo(id));
  }

  @Post('/delete/:id')
  deleteTodo(@Param('id') id: string, @Res() res: Response) {
    this.todoService.deleteTodo(id);
    res.render('todo/list', { todos: this.todoService.getTodos({}) });
  }
}
