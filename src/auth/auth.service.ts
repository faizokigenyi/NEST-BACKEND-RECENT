/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';

@Injectable({})
export class AuthService {

  signup() {
    return { msg: 'i HAVE SIGNED UP' };
  }
  signin() {
    return { msg: 'i HAVE SIGNED IN' };
  }
}
