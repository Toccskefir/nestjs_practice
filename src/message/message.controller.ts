import { Body, Controller, Post } from "@nestjs/common";
import { MessageService } from './message.service';
import { Message } from './message.model';

@Controller('/message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  postMessage(@Body() message: Message) {
    return this.messageService.sendMessage(message);
  }
}
