import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AdminModule } from './admin/admin.module';
import { PageModule } from './page/page.module';
import { TodoModule } from './todo/todo.module';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { MessageModule } from './message/message.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AdminModule,
    PageModule,
    TodoModule,
    FibonacciModule,
    MessageModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
