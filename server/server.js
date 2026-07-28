import express from "express";
import cors from "cors";
import { sql } from "./db.js";

const app = express();

app.use(cors());

app.get("/test", async (req, res) => {
try {
const result = await sql`SELECT NOW()`;

res.json(result);
} catch (error) {
console.error(error);
res.status(500).json(error);
}
});

app.listen(5000, () => {
console.log("Server running on port 5000");
});