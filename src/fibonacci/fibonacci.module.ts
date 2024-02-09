import { Module } from '@nestjs/common';
import { FibonacciController } from './fibonacci.controller';
import { FibonacciService } from './fibonacci.service';

@Module({
  imports: [],
  controllers: [FibonacciController],
  providers: [FibonacciService],
})
export class FibonacciModule {}
