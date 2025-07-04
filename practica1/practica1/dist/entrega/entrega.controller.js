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
exports.EntregaController = void 0;
const common_1 = require("@nestjs/common");
const entrega_service_1 = require("./entrega.service");
const create_entrega_dto_1 = require("./dto/create-entrega.dto");
const update_entrega_dto_1 = require("./dto/update-entrega.dto");
let EntregaController = class EntregaController {
    constructor(entregaService) {
        this.entregaService = entregaService;
    }
    async create(createEntregaDto) {
        return this.entregaService.create(createEntregaDto);
    }
    async findAll() {
        return this.entregaService.findAll();
    }
    async findOne(id) {
        return this.entregaService.findOne(id);
    }
    async update(id, updateEntregaDto) {
        return this.entregaService.update(id, updateEntregaDto);
    }
    async remove(id) {
        return this.entregaService.remove(id);
    }
};
exports.EntregaController = EntregaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_entrega_dto_1.CreateEntregaDto]),
    __metadata("design:returntype", Promise)
], EntregaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntregaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EntregaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_entrega_dto_1.UpdateEntregaDto]),
    __metadata("design:returntype", Promise)
], EntregaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EntregaController.prototype, "remove", null);
exports.EntregaController = EntregaController = __decorate([
    (0, common_1.Controller)('entrega'),
    __metadata("design:paramtypes", [entrega_service_1.EntregaService])
], EntregaController);
//# sourceMappingURL=entrega.controller.js.map