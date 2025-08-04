import { Genero, TipoUsuario } from '../enums';
export declare class Persona {
    id: string;
    nombres: string;
    apellidos: string;
    cedula: string;
    correo: string;
    telefono: string;
    direccion: string;
    fechaNacimiento: Date;
    genero: Genero;
    tipoUsuario: TipoUsuario;
    constructor(data?: Partial<Persona>);
    getNombreCompleto(): string;
    getEdad(): number;
}
//# sourceMappingURL=persona.entity.d.ts.map