import { BadRequestException, Controller, Get, Param } from "@nestjs/common";
import { FibonacciService } from './fibonacci.service';
//import { isNumber, isUndefined } from "@nestjs/common/utils/shared.utils";

@Controller('/fibonacci')
export class FibonacciController {
  constructor(private readonly fibonacciService: FibonacciService) {}

  /*@Get()
  getFibonacci(@Query('length') length: string | string[] | undefined): number[] {
    if (isUndefined(length)) {
      return this.fibonacciService.getFibonacci();
    } else if (isNumber(length)) {
      return this.fibonacciService.getFibonacciN(length);
    } else {
      return new BadRequestException();
    };
  }*/

  @Get('/:n')
  getFibonacciN(@Param('n') n: string): number {
    const nNumber = parseInt(n);
    if (nNumber < 0 || Number.isNaN(nNumber)) {
      throw new BadRequestException();
    }
    return this.fibonacciService.getFibonacciN(nNumber);
  }
}
