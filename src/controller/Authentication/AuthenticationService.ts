import { Service } from 'typedi'
import { JWTService } from './JWTService';
import { Formatter } from '../../utils/Formatter';
import { Validator } from 'class-validator';
import { AUTH } from './auth.config';
import { Repository } from 'typeorm';
import { User } from '../../entity/User;
import * as bcrypt from 'bcryptjs'
import { Validation } from '../../utils/Validation';
import { InjectRepository } from 'typeorm-typedi-extensions';

@Service()
export class AuthenticationService {

  constructor(
    @InjectRepository(User)
    private repository: Repository<User>
  ) {}

  async authenticate(body): Promise<Object> {
    const user = await this.repository.findOne({ email: body.email })

    if (!user)
      return Validation.oneError('Email não encontrado')

    if (body.password.length < AUTH.passMinLength)
      return Validation.oneError(`Senhas devem conter pelo menos ${AUTH.passMinLength} caracteres.`)

    const dcrypt = bcrypt.compareSync(body.password, user.password)
    if (!dcrypt)
      return Validation.oneError('Senha incorreta')

    return this.login(user.email)

  }

  async login(email: string): Promise<Object> {
    const token = JWTService.signToken(email)
    return Formatter.send(token)
  }

}