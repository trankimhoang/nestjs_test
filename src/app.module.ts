import { Module } from '@nestjs/common';
import {UserModel} from "./users/user.module";

@Module({
    imports: [UserModel]
})
export class AppModule {}
