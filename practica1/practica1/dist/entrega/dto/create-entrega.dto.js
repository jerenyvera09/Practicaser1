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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEntregaDto = void 0;
const class_validator_1 = require("class-validator");
class CreateEntregaDto {
}
exports.CreateEntregaDto = CreateEntregaDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEntregaDto.prototype, "descripcion", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)({}, { message: 'fechaEntrega debe tener formato válido (YYYY-MM-DD)' }),
    __metadata("design:type", String)
], CreateEntregaDto.prototype, "fechaEntrega", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['pendiente', 'entregado', 'cancelado'], {
        message: 'estado debe ser pendiente, entregado o cancelado',
    }),
    __metadata("design:type", String)
], CreateEntregaDto.prototype, "estado", void 0);
//# sourceMappingURL=create-entrega.dto.js.map