import cors from "cors";
import express from "express";
import { router } from "./routes";

const app = express();
const port = 1416;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server listening on port ${port}`));
