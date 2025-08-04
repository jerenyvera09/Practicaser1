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
exports.CreatePersonaDto = void 0;
const class_validator_1 = require("class-validator");
const enums_1 = require("../enums");
class CreatePersonaDto {
    constructor() {
        this.nombres = '';
        this.apellidos = '';
        this.cedula = '';
        this.correo = '';
        this.telefono = '';
        this.direccion = '';
        this.fechaNacimiento = '';
        this.genero = enums_1.Genero.OTRO;
        this.tipoUsuario = enums_1.TipoUsuario.ESTUDIANTE;
    }
}
exports.CreatePersonaDto = CreatePersonaDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Los nombres son obligatorios' }),
    (0, class_validator_1.IsString)({ message: 'Los nombres deben ser texto' }),
    (0, class_validator_1.Length)(2, 50, { message: 'Los nombres deben tener entre 2 y 50 caracteres' }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "nombres", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Los apellidos son obligatorios' }),
    (0, class_validator_1.IsString)({ message: 'Los apellidos deben ser texto' }),
    (0, class_validator_1.Length)(2, 50, { message: 'Los apellidos deben tener entre 2 y 50 caracteres' }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "apellidos", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La cédula es obligatoria' }),
    (0, class_validator_1.IsString)({ message: 'La cédula debe ser texto' }),
    (0, class_validator_1.Matches)(/^\d{10}$/, { message: 'La cédula debe tener 10 dígitos' }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "cedula", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El correo es obligatorio' }),
    (0, class_validator_1.IsEmail)({}, { message: 'El correo debe tener un formato válido' }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "correo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El teléfono es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El teléfono debe ser texto' }),
    (0, class_validator_1.Matches)(/^\d{10}$/, { message: 'El teléfono debe tener 10 dígitos' }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "telefono", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La dirección es obligatoria' }),
    (0, class_validator_1.IsString)({ message: 'La dirección debe ser texto' }),
    (0, class_validator_1.Length)(5, 200, { message: 'La dirección debe tener entre 5 y 200 caracteres' }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "direccion", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'La fecha de nacimiento es obligatoria' }),
    (0, class_validator_1.IsDateString)({}, { message: 'La fecha de nacimiento debe ser una fecha válida' }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El género es obligatorio' }),
    (0, class_validator_1.IsEnum)(enums_1.Genero, { message: 'El género debe ser MASCULINO, FEMENINO u OTRO' }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "genero", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El tipo de usuario es obligatorio' }),
    (0, class_validator_1.IsEnum)(enums_1.TipoUsuario, { message: 'El tipo de usuario debe ser DOCENTE, ADMINISTRATIVO o ESTUDIANTE' }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "tipoUsuario", void 0);
//# sourceMappingURL=create-persona.dto.js.map