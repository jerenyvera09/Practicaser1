import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReceptorService } from './receptor.service';
import { CreateReceptorDto } from './dto/create-receptor.dto';
import { UpdateReceptorDto } from './dto/update-receptor.dto';

@Controller('receptor')
export class ReceptorController {
  constructor(private readonly receptorService: ReceptorService) {}

  @Post()
  create(@Body() createDto: CreateReceptorDto) {
    return this.receptorService.create(createDto);
  }

  @Get()
  findAll() {
    return this.receptorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receptorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateReceptorDto) {
    return this.receptorService.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receptorService.remove(+id);
  }
}