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
exports.ReceptorController = void 0;
const common_1 = require("@nestjs/common");
const receptor_service_1 = require("./receptor.service");
const create_receptor_dto_1 = require("./dto/create-receptor.dto");
const update_receptor_dto_1 = require("./dto/update-receptor.dto");
let ReceptorController = class ReceptorController {
    constructor(receptorService) {
        this.receptorService = receptorService;
    }
    create(createDto) {
        return this.receptorService.create(createDto);
    }
    findAll() {
        return this.receptorService.findAll();
    }
    findOne(id) {
        return this.receptorService.findOne(+id);
    }
    update(id, updateDto) {
        return this.receptorService.update(+id, updateDto);
    }
    remove(id) {
        return this.receptorService.remove(+id);
    }
};
exports.ReceptorController = ReceptorController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_receptor_dto_1.CreateReceptorDto]),
    __metadata("design:returntype", void 0)
], ReceptorController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReceptorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReceptorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_receptor_dto_1.UpdateReceptorDto]),
    __metadata("design:returntype", void 0)
], ReceptorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReceptorController.prototype, "remove", null);
exports.ReceptorController = ReceptorController = __decorate([
    (0, common_1.Controller)('receptor'),
    __metadata("design:paramtypes", [receptor_service_1.ReceptorService])
], ReceptorController);
//# sourceMappingURL=receptor.controller.js.map