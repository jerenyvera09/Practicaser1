"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSolicitudDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_solicitud_dto_1 = require("./create-solicitud.dto");
class UpdateSolicitudDto extends (0, mapped_types_1.PartialType)(create_solicitud_dto_1.CreateSolicitudDto) {
}
exports.UpdateSolicitudDto = UpdateSolicitudDto;
//# sourceMappingURL=update-solicitud.dto.js.map