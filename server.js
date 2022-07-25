const express = require("express");
require("dotenv").config();


const { connectToDb } = require("./config/mongo-con");
const playerRouter = require('./routes/player')
const clubRouter = require('./routes/club')
const managerRouter = require('./routes/manager')

const app = express();


app.use(express.json())

app.use('/api/v8/player', playerRouter)
app.use('/api/v8/club', clubRouter)
app.use('/api/v8/manager', managerRouter)

app.use(errorHandler);

connectToDb();

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
