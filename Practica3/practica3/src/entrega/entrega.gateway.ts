import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { EntregaService } from './entrega.service';
import { CreateEntregaDto } from './dto/create-entrega.dto';
import { UpdateEntregaDto } from './dto/update-entrega.dto';

@WebSocketGateway({ cors: true })
export class EntregaGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  wss: Server;

  constructor(private readonly entregaService: EntregaService) {}

  /** ✅ Cliente conectado */
  handleConnection(client: Socket) {
    console.log(`✅ Cliente conectado: ${client.id}`);
  }

  /** ✅ Cliente desconectado */
  handleDisconnect(client: Socket) {
    console.log(`❌ Cliente desconectado: ${client.id}`);
  }

  /** ✅ Crear Entrega */
  @SubscribeMessage('createEntrega')
  async create(@MessageBody() dto: CreateEntregaDto) {
    await this.entregaService.create(dto);
    this.wss.emit('refreshEntrega', await this.entregaService.findAll());
    return { message: 'Entrega creada correctamente' };
  }

  /** ✅ Listar todas las entregas */
  @SubscribeMessage('findAllEntrega')
  async findAll() {
    return await this.entregaService.findAll();
  }

  /** ✅ Buscar entrega por ID */
  @SubscribeMessage('findOneEntrega')
  async findOne(@MessageBody() id: number) {
    return await this.entregaService.findOne(id);
  }

  /** ✅ Actualizar entrega */
  @SubscribeMessage('updateEntrega')
  async update(@MessageBody() dto: UpdateEntregaDto) {
    if (!dto.id) throw new Error('ID es requerido para actualizar');
    await this.entregaService.update(dto.id, dto);
    this.wss.emit('refreshEntrega', await this.entregaService.findAll());
    return { message: 'Entrega actualizada correctamente' };
  }

  /** ✅ Eliminar entrega */
  @SubscribeMessage('removeEntrega')
  async remove(@MessageBody() id: number) {
    await this.entregaService.remove(id);
    this.wss.emit('refreshEntrega', await this.entregaService.findAll());
    return { message: `Entrega con ID ${id} eliminada` };
  }
}
