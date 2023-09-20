import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserDto } from '../user.dto';

@Controller('users')
export class UserController {
  // @Get()
  // getAllUser() {
  //   return [
  //     {
  //       name: 'test 1',
  //       age: 1,
  //     },
  //     {
  //       name: 'test 2',
  //       age: 3,
  //     },
  //   ];
  // }
  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createUser(@Body() user: UserDto): UserDto {
    return {
      username: 'test',
      password: 'test',
    };
  }
  @Get(':id')
  getUserById(@Param('id') id: number) {
    console.log(id);
    return 'test';
  }
}
