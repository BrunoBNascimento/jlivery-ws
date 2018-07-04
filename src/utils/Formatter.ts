
export class Formatter {

    static error(message: string): Object {
      return {
        errors: true,
        message
      }
    }
  
    static unexpectedError(): Object {
      return this.error('Ocorreu um erro inesperado.')
    }
  
    static send(token: string): Object {
      return {
        status: 200,
        token
      }
    }
  }