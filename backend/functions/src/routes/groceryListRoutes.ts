/* eslint-disable require-jsdoc */
import { Service } from "typedi";
import { GroceryListController } from "../controllers/groceyListController";
import * as express from "express";
import * as cors from "cors";
import errorHandler from "../errorHandler";

export interface IGroceryListRoutes {}

@Service()
export class GroceryListRoutes implements IGroceryListRoutes {
  router: express.Router;
  app: express.Express;
  constructor(public groceryListController: GroceryListController) {
    this.router = express.Router();

    this.router.get("/", this.groceryListController.getAll);

    this.router.post("/", groceryListController.addOne);

    this.router.put("/:id", groceryListController.purchaseOne);

    this.app = express();
    this.app.use(express.json());
    this.app.use(cors({ origin: true }));
    this.app.use(this.router);
    this.app.use(errorHandler);
  }
}
