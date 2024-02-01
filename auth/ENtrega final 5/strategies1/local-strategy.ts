import { PassportStrategy } from "@nestjs/passport";
import{Strategy} from "passport-local";

export class LocalStrategy extends PassportStrategy(Strategy){

   constructor(
    private readonly AuthService:AuthService
   ){
     super({usernamefield:'email' ,passwordfield:'password'})

   }

   validate(email:string,password:string){
    return this.AuthService.validateUser(email,password)
   }

}
