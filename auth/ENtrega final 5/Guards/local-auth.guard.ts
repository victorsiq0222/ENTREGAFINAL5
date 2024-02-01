import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

export class LocalAuthGuard extends AuthGuard('Local'){
    canActivate(context: ExecutionContext): {
      return  super.canActivate(context)

    
        
    }
}