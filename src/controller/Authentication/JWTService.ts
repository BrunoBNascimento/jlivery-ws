import * as JWT from 'jsonwebtoken'
import { AUTH } from './auth.config'
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../../repositories/UserRepository';

export class JWTService {

  static signToken(email: string, options?: any) {
    return JWT.sign(email, AUTH.secret, options || null)
  }

  static verifyToken(token: string, options?: any) {
    try {
      JWT.verify(token, AUTH.secret)
      return true
    } catch (err) {
      return false
    }
  }
}