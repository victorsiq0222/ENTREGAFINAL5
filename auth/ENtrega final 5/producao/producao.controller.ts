import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProducaoService } from './producao.service';
import { CreateProducaoDto } from './dto/create-producao.dto';
import { UpdateProducaoDto } from './dto/update-producao.dto';

@Controller('producao')
export class ProducaoController {
  constructor(private readonly producaoService: ProducaoService) {}
  //Rota:Post/producao/:Id . Adiciona uma nova producao
  @Post()
  create(@Body() createProducaoDto: CreateProducaoDto) {
    return this.producaoService.create(createProducaoDto);
  }
  //procura dentro de todas as produções.Rota:Get/producao
  @Get()
  findAll() {
    return this.producaoService.findAll();
  }
  //procura uma produção .Rota:Get/producao/:Id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.producaoService.findOne(+id);
  }
 //atualiza a produção , com base no ID .Rota:Pacth/producao/:Id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProducaoDto: UpdateProducaoDto) {
    return this.producaoService.update(+id, updateProducaoDto);
  }
  //deleta os dados da produção com base no Id .Rota:Delete/producao/:Id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.producaoService.remove(+id);
  }
}
