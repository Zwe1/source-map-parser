const path = require("path");
const fs = require("fs");
const { SourceMapConsumer } = require("source-map");
const readline = require("utils/readline");

const range = 5;

const sourceMapPath = path.join(
  process.cwd(),
  "build/static/app.ddcbd9079b1ff2433f5c.chunk.js.map"
);

const rawSourceMap = JSON.parse(fs.readFileSync(sourceMapPath, "utf8"));

SourceMapConsumer.with(rawSourceMap, null, consumer => {
  const position = consumer.originalPositionFor({ line: 1, column: 1 });
  const { line = 1 } = position;
  console.log("position", position);
  readline(
    sourceMapPath,
    [Math.max(1, line - range), line + range],
    filePieces => {
      console.log("filePieces", filePieces);
    }
  );
});

module.exports = () => {};
