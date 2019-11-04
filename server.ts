const Koa = require("koa");
const path = require("path");
const logger = require("koa-logger");
const router = require("koa-router")();
const app = new Koa();
const join = (filePath: string) => path.join(process.cwd(), filePath);

const PORT = process.env.PORT || 8000;

console.log("node server starting...");

app.use(logger());

router
  .post("/sourcemap/save", require(join("routes/saveSourceMaps")))
  .get("/error/parse", require(join("routes/catchErrors")));

app.use(router.routes());

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  }
  console.log(`listening at localhost:${PORT}`);
});
