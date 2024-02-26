import { Injectable } from '@nestjs/common';
import fs from 'fs/promises';
import { Message } from './message.model';

@Injectable()
export class MessageService {
  async sendMessage(message: Message) {
    const fileName: string = './src/message' + Math.random() + '.txt';
    await fs.writeFile(fileName, message.sender + ': ' + message.message);
  }
}
