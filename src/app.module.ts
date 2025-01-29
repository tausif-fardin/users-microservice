import { Module } from '@nestjs/common';
import { UsersModule } from './users/uers.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
