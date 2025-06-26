"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateReceptorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_receptor_dto_1 = require("./create-receptor.dto");
class UpdateReceptorDto extends (0, mapped_types_1.PartialType)(create_receptor_dto_1.CreateReceptorDto) {
}
exports.UpdateReceptorDto = UpdateReceptorDto;
//# sourceMappingURL=update-receptor.dto.js.map