import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getAllUser() {
    return [
      {
        name: 'test 1',
        age: 1,
      },
      {
        name: 'test 2',
        age: 3,
      },
    ];
  }
}
