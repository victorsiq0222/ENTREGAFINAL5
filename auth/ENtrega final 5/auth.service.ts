import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(
        private readonly prisma:PrismaService,
        private readonly funcionarioService:funcionarioService,
        private readonly justService:JwtService,
       
    ){}
    
   async validateUser(email , password){
        const funcionario = await this.funcionarioService.findyEmail(email)
    }
if(!funcionario or funcionario.password:password){
    throw new Error('Credenciais Inválidas')

}

return (...funcionario , password:undefined)

}

login(funcionario){

    const payLoad =(id:funcionario.Id,email:funcionario.email)}

    const JwtToken = this.jwtService.sign(payload , {secret :process.env.JWT_SECRET ,expiresIn:'1d' })
    return{
        acess_token:JwtToken
        
    }

  

