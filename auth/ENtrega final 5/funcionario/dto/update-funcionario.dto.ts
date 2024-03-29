import { PartialType } from '@nestjs/mapped-types';
import { CreateFuncionarioDto } from './create-funcionario.dto';

export class UpdateFuncionarioDto extends PartialType(CreateFuncionarioDto) {
    nome:string;
    cargo:string;
    telefone:string;
    email:string;
    password: string;
}
