import dotenv from "dotenv";

// Init env
dotenv.config();

// Define config values from env
export const config = {
  app: {
    host: process.env.APP_HOST || "localhost",
    port: process.env.APP_PORT || "8080",
  },
  db: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "27017",
    name: process.env.DB_NAME || "test",
  },
};
