import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const PORT = 3333;
  await app.listen(PORT, function () {
    console.log(`app start with port ${PORT}`);
  });
}

bootstrap();
