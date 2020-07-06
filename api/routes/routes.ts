import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getDestinos,
  getDestino,
  addDestino,
  updateDestino,
  removeDestino,
} from "../controller/destino-controller.ts";

const router = new Router();

router.get("/api/v1/destino", getDestinos)
  .get("/api/v1/destino/:id", getDestino)
  .post("/api/v1/destino", addDestino)
  .put("/api/v1/destino", updateDestino)
  .delete("/api/v1/destino/:id", removeDestino);

export default router;
