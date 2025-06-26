"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntregaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entrega_entity_1 = require("./entities/entrega.entity");
let EntregaService = class EntregaService {
    constructor(entregaRepository) {
        this.entregaRepository = entregaRepository;
    }
    create(createEntregaDto) {
        const nueva = this.entregaRepository.create(createEntregaDto);
        return this.entregaRepository.save(nueva);
    }
    findAll() {
        return this.entregaRepository.find();
    }
    findOne(id) {
        return this.entregaRepository.findOneBy({ id });
    }
    async update(id, updateEntregaDto) {
        const entrega = await this.findOne(id);
        if (!entrega) {
            throw new common_1.NotFoundException(`No se encontró la entrega con ID ${id}`);
        }
        return this.entregaRepository.update(id, updateEntregaDto);
    }
    async remove(id) {
        const entrega = await this.findOne(id);
        if (!entrega) {
            throw new common_1.NotFoundException(`No se encontró la entrega con ID ${id}`);
        }
        return this.entregaRepository.delete(id);
    }
};
exports.EntregaService = EntregaService;
exports.EntregaService = EntregaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entrega_entity_1.Entrega)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EntregaService);
//# sourceMappingURL=entrega.service.js.map