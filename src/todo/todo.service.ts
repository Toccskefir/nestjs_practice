import { BadRequestException, Injectable } from '@nestjs/common';
import { Todo } from './todo.model';

export type TodoDTO = Omit<Todo, 'id'>;

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
  public getTodos(limit: number, offset: number): Todo[] {
    if (Number.isNaN(limit) || Number.isNaN(offset)) {
      throw new BadRequestException();
    } else if (limit < 0 || offset < 0) {
      throw new BadRequestException();
    } else {
      return this.todos.slice(offset, offset + limit);
    }
  }

  public getTodo(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }

  public postTodo(todoDTO: TodoDTO) {
    const newTodo: Todo = {
      id: Math.random().toString(),
      ...todoDTO,
    };
    this.todos.push(newTodo);
    return newTodo;
  }
}
