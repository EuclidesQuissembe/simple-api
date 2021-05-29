import express from "express";
const app = express();

app.get("/", (_, res) => {
  res.send({
    message: "Simple API with TypeScript and Express",
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening on PORT ${port}`);
});
