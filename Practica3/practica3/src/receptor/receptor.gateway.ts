import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ReceptorService } from './receptor.service';
import { CreateReceptorDto } from './dto/create-receptor.dto';
import { UpdateReceptorDto } from './dto/update-receptor.dto';

@WebSocketGateway({ cors: true })
export class ReceptorGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  wss: Server;

  constructor(private readonly receptorService: ReceptorService) {}

  handleConnection(client: Socket) {
    console.log(`✅ Cliente conectado: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`❌ Cliente desconectado: ${client.id}`);
  }

  /** ✅ Crear receptor */
  @SubscribeMessage('createReceptor')
  async create(@MessageBody() dto: CreateReceptorDto) {
    await this.receptorService.create(dto);
    // 🔔 Emitir lista actualizada
    this.wss.emit('refreshReceptor', await this.receptorService.findAll());
    return { message: 'Receptor creado correctamente' };
  }

  /** ✅ Obtener todos los receptores */
  @SubscribeMessage('findAllReceptor')
  async findAll() {
    return await this.receptorService.findAll();
  }

  /** ✅ Obtener receptor por ID */
  @SubscribeMessage('findOneReceptor')
  async findOne(@MessageBody() id: number) {
    return await this.receptorService.findOne(id);
  }

  /** ✅ Actualizar receptor */
  @SubscribeMessage('updateReceptor')
  async update(@MessageBody() dto: UpdateReceptorDto) {
    if (!dto.id) throw new Error('ID es requerido para actualizar');
    await this.receptorService.update(dto.id, dto);
    this.wss.emit('refreshReceptor', await this.receptorService.findAll());
    return { message: 'Receptor actualizado correctamente' };
  }

  /** ✅ Eliminar receptor */
  @SubscribeMessage('removeReceptor')
  async remove(@MessageBody() id: number) {
    await this.receptorService.remove(id);
    this.wss.emit('refreshReceptor', await this.receptorService.findAll());
    return { message: `Receptor con ID ${id} eliminado` };
  }
}
