/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

/*
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
*/

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
"use strict";
const mongoose = require("mongoose");
const { initializeApp } = require("firebase-admin/app");
const dotenv = require("dotenv");

initializeApp();

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err: any) => console.log("error connecting to mongodb", err));

exports.grocerylist = require("./functions/grocery-list");

