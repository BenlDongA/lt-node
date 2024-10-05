import express from "express";
import rootRouter from "./routes/root.js";
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.set('views', './buoi4/views'); 

app.use(express.static('./buoi4/public'));


app.use("/", rootRouter)

app.listen(port, () => {
  console.log("Server stated!!!");
});

