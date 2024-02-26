import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Todo } from './todo.model';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

//export type TodoDTO = Omit<Todo, 'id'>;

export class CreateTodoDTO {
  @IsNotEmpty()
  @IsString()
  text!: string;
}

export class GetTodosInput {
  @IsInt()
  @IsPositive()
  @Type(() => Number)
  @IsOptional()
  limit?: number;

  @IsInt()
  @Min(0)
  @Type(() => Number)
  @IsOptional()
  offset?: number;
}

@Injectable()
export class TodoService {
  private readonly todos: Todo[] = [
    {
      id: '1',
      text: 'Kenyeret venni',
    },
    {
      id: '2',
      text: 'Kutyát sétáltatni',
    },
    {
      id: '3',
      text: 'Fodrászhoz menni',
    },
  ];
  public getTodos({ limit = Infinity, offset = 0 }: GetTodosInput): Todo[] {
    return this.todos.slice(offset, offset + limit);
  }

  public getTodo(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }

  public postTodo(todoDTO: CreateTodoDTO) {
    const newTodo: Todo = {
      id: Math.random().toString(),
      ...todoDTO,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  public updateTodo(id: string, input: CreateTodoDTO) {
    const todo = this.getTodo(id);
    if (!todo) {
      throw new NotFoundException();
    }
    Object.assign(todo, input);
    return todo;
  }

  public deleteTodo(id: string) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index === -1) {
      return;
    }
    this.todos.splice(index, 1);
  }
}
