"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
const enums_1 = require("../enums");
class Persona {
    constructor(data) {
        this.id = '';
        this.nombres = '';
        this.apellidos = '';
        this.cedula = '';
        this.correo = '';
        this.telefono = '';
        this.direccion = '';
        this.fechaNacimiento = new Date();
        this.genero = enums_1.Genero.OTRO;
        this.tipoUsuario = enums_1.TipoUsuario.ESTUDIANTE;
        if (data) {
            this.id = data.id || '';
            this.nombres = data.nombres || '';
            this.apellidos = data.apellidos || '';
            this.cedula = data.cedula || '';
            this.correo = data.correo || '';
            this.telefono = data.telefono || '';
            this.direccion = data.direccion || '';
            this.fechaNacimiento = data.fechaNacimiento || new Date();
            this.genero = data.genero || enums_1.Genero.OTRO;
            this.tipoUsuario = data.tipoUsuario || enums_1.TipoUsuario.ESTUDIANTE;
        }
    }
    getNombreCompleto() {
        return `${this.nombres} ${this.apellidos}`;
    }
    getEdad() {
        const hoy = new Date();
        const edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const mesActual = hoy.getMonth();
        const mesNacimiento = this.fechaNacimiento.getMonth();
        if (mesActual < mesNacimiento ||
            (mesActual === mesNacimiento && hoy.getDate() < this.fechaNacimiento.getDate())) {
            return edad - 1;
        }
        return edad;
    }
}
exports.Persona = Persona;
//# sourceMappingURL=persona.entity.js.map