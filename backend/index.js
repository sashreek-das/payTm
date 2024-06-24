const express = require("express")
const cors = require("cors");

const rootRouter = require("./routes/index");




const app = express();

app.use(cors());
app.use(express.json());


const port = 3000;

app.use("api/v1/", rootRouter)

// app.use("api/v1/",accountRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})