import express from "express";
import { initDatabase } from "./database";
import crudRouter from "./routes/crud";

async function main() {
  await initDatabase();
  const app = express();
  app.use(express.json());
  app.use(crudRouter);
  const PORT = 3000;
  app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:${PORT}'));
}
main();
