/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

/*

*/

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
"use strict";
import * as logger from "firebase-functions/logger";
import * as mongoose from "mongoose";
import { initializeApp } from "firebase-admin/app";
import * as dotenv from "dotenv";
import { api as groceryListHandler } from "./functions/grocery-list/index";

initializeApp();

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL || "")
  .then(() => logger.log("database connected successfully"))
  .catch((err) => logger.log("error connecting to mongodb", err));

export const grocerylist = groceryListHandler;
