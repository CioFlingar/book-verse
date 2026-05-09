import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(
  cors({
    origin: precess.env.CORS_ORIGIN,
    credentials: true,
  }),
);
app.use(
  express.json({
    limit: process.env.FILE_SIZE_LIMIT,
  }),
);
app.use(
  express.urlencoded({
    extended: true,
    limit: process.env.FILE_SIZE_LIMIT,
  }),
);
app.use(express.static("public"));
app.use(cookieParser());

export { app };
