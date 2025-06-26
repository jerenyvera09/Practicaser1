"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceptorModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const receptor_entity_1 = require("./entities/receptor.entity");
const receptor_service_1 = require("./receptor.service");
const receptor_controller_1 = require("./receptor.controller");
let ReceptorModule = class ReceptorModule {
};
exports.ReceptorModule = ReceptorModule;
exports.ReceptorModule = ReceptorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([receptor_entity_1.Receptor])],
        controllers: [receptor_controller_1.ReceptorController],
        providers: [receptor_service_1.ReceptorService],
        exports: [typeorm_1.TypeOrmModule],
    })
], ReceptorModule);
//# sourceMappingURL=receptor.module.js.map