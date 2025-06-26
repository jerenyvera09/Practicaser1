import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, } from '@nestjs/common';
import { EntregaService } from './entrega.service';
import { CreateEntregaDto } from './dto/create-entrega.dto';
import { UpdateEntregaDto } from './dto/update-entrega.dto';

@Controller('entrega')
export class EntregaController {
  constructor(private readonly entregaService: EntregaService) {}

  @Post()
  async create(@Body() createEntregaDto: CreateEntregaDto) {
    return this.entregaService.create(createEntregaDto);
  }

  @Get()
  async findAll() {
    return this.entregaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.entregaService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEntregaDto: UpdateEntregaDto,
  ) {
    return this.entregaService.update(id, updateEntregaDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.entregaService.remove(id);
  }
}
