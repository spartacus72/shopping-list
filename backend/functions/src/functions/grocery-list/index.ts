"use strict";
import * as express from "express";
import * as cors from "cors";
import getAll from "./get-all";
import addOne from "./add-one";
import purchaseOne from "./purchase-one";
import { onRequest } from "firebase-functions/v2/https";
import errorHandler from "../../errorHandler";

// eslint-disable-next-line new-cap
const router = express.Router();

router.get("/", getAll);

router.post("/", addOne);

router.put("/:id", purchaseOne);

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.use(router);
app.use(errorHandler);

export const api = onRequest(app);
