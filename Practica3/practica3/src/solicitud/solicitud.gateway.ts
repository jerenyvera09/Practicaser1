import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { SolicitudService } from './solicitud.service';
import { CreateSolicitudDto } from './dto/create-solicitud.dto';
import { UpdateSolicitudDto } from './dto/update-solicitud.dto';

@WebSocketGateway({ cors: true })
export class SolicitudGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  wss: Server;

  constructor(private readonly solicitudService: SolicitudService) {}

  /** ✅ Conexión y desconexión */
  handleConnection(client: Socket) {
    console.log(`✅ Cliente conectado: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`❌ Cliente desconectado: ${client.id}`);
  }

  /** ✅ Crear solicitud */
  @SubscribeMessage('createSolicitud')
  async create(@MessageBody() dto: CreateSolicitudDto) {
    await this.solicitudService.create(dto);
    this.wss.emit('refreshSolicitud', await this.solicitudService.findAll());
    return { message: 'Solicitud creada correctamente' };
  }

  /** ✅ Obtener todas las solicitudes */
  @SubscribeMessage('findAllSolicitud')
  async findAll() {
    return await this.solicitudService.findAll();
  }

  /** ✅ Obtener solicitud por ID */
  @SubscribeMessage('findOneSolicitud')
  async findOne(@MessageBody() id: number) {
    return await this.solicitudService.findOne(id);
  }

  /** ✅ Actualizar solicitud */
  @SubscribeMessage('updateSolicitud')
  async update(@MessageBody() dto: UpdateSolicitudDto) {
    if (!dto.id) throw new Error('ID es requerido para actualizar');
    await this.solicitudService.update(dto.id, dto);
    this.wss.emit('refreshSolicitud', await this.solicitudService.findAll());
    return { message: 'Solicitud actualizada correctamente' };
  }

  /** ✅ Eliminar solicitud */
  @SubscribeMessage('removeSolicitud')
  async remove(@MessageBody() id: number) {
    await this.solicitudService.remove(id);
    this.wss.emit('refreshSolicitud', await this.solicitudService.findAll());
    return { message: `Solicitud con ID ${id} eliminada` };
  }
}
