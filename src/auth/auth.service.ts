/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'i HAVE SIGNED UP' };
  }
  signin() {
    return { msg: 'i HAVE SIGNED IN' };
  }
}
