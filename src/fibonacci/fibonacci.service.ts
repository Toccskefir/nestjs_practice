import { Injectable } from '@nestjs/common';

@Injectable()
export class FibonacciService {
  private fibonacciList(n: number): number[] {
    const list: number[] = [];
    for (let i = 0; i < n; i++) {
      if (i === 0 || i === 1) {
        list.push(i);
      } else {
        list.push(list[i - 2] + list[i - 1]);
      }
    }
    return list;
  }

  getFibonacci(): number[] {
    return this.fibonacciList(100);
  }

  getFibonacciN(n: number): number {
    return this.fibonacciList(n)[n - 1];
  }
}
