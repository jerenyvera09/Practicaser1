import express from "express";
import { DonacionService } from "../services/donacionservice";
import { TipoDonacionService } from "../services/tipoDonacionservice";
import { RecepcionService } from "../services/recepcionservice";
import { PrioridadService } from "../services/prioridadservice";
import { AreaResponsableService } from "../services/areaResponsableservice";

const router = express.Router();

// Donaciones
router.get("/donaciones", async (_, res) => res.json(await DonacionService.getAll()));
router.get("/donaciones/:id", async (req, res) => res.json(await DonacionService.getById(+req.params.id)));
router.post("/donaciones", async (req, res) => res.json(await DonacionService.create(req.body)));
router.put("/donaciones/:id", async (req, res) => res.json(await DonacionService.update(+req.params.id, req.body)));
router.delete("/donaciones/:id", async (req, res) => res.json(await DonacionService.delete(+req.params.id)));

// Tipos de Donación
router.get("/tipos", async (_, res) => res.json(await TipoDonacionService.getAll()));
router.get("/tipos/:id", async (req, res) => res.json(await TipoDonacionService.getById(+req.params.id)));
router.post("/tipos", async (req, res) => res.json(await TipoDonacionService.create(req.body)));
router.put("/tipos/:id", async (req, res) => res.json(await TipoDonacionService.update(+req.params.id, req.body)));
router.delete("/tipos/:id", async (req, res) => res.json(await TipoDonacionService.delete(+req.params.id)));

// Recepciones
router.get("/recepciones", async (_, res) => res.json(await RecepcionService.getAll()));
router.get("/recepciones/:id", async (req, res) => res.json(await RecepcionService.getById(+req.params.id)));
router.post("/recepciones", async (req, res) => res.json(await RecepcionService.create(req.body)));
router.put("/recepciones/:id", async (req, res) => res.json(await RecepcionService.update(+req.params.id, req.body)));
router.delete("/recepciones/:id", async (req, res) => res.json(await RecepcionService.delete(+req.params.id)));

// Prioridades
router.get("/prioridades", async (_, res) => res.json(await PrioridadService.getAll()));
router.get("/prioridades/:id", async (req, res) => res.json(await PrioridadService.getById(+req.params.id)));
router.post("/prioridades", async (req, res) => res.json(await PrioridadService.create(req.body)));
router.put("/prioridades/:id", async (req, res) => res.json(await PrioridadService.update(+req.params.id, req.body)));
router.delete("/prioridades/:id", async (req, res) => res.json(await PrioridadService.delete(+req.params.id)));

// Áreas Responsables
router.get("/areas", async (_, res) => res.json(await AreaResponsableService.getAll()));
router.get("/areas/:id", async (req, res) => res.json(await AreaResponsableService.getById(+req.params.id)));
router.post("/areas", async (req, res) => res.json(await AreaResponsableService.create(req.body)));
router.put("/areas/:id", async (req, res) => res.json(await AreaResponsableService.update(+req.params.id, req.body)));
router.delete("/areas/:id", async (req, res) => res.json(await AreaResponsableService.delete(+req.params.id)));

export default router;
