/* eslint-disable require-jsdoc */
import { Service } from "typedi";
import { IGroceryListController } from "../controllers/groceyListController";
import * as express from "express";
import * as cors from "cors";
import errorHandler from "../errorHandler";

export interface IGroceryListRputes {}

// eslint-disable-next-line new-cap
@Service()
// eslint-disable-next-line require-jsdoc
export class GroceryListRoutes implements IGroceryListRputes {
  router: express.Router;
  app: express.Express;
  constructor(public groceryListController: IGroceryListController) {
    this.router = express.Router();

    this.router.get("/", groceryListController.getAll);

    this.router.post("/", groceryListController.addOne);

    this.router.put("/:id", groceryListController.purchaseOne);

    this.app = express();
    this.app.use(express.json());
    this.app.use(cors({ origin: true }));
    this.app.use(this.router);
    this.app.use(errorHandler);
  }
}
