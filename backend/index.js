const express = require("express")

const rootRouter = require("./routes/index");

const accountRouter = require("./account");

const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

const port = 3000;

app.use("api/v1/", rootRouter)

app.use("api/v1/",accountRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})