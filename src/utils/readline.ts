const readline = require("readline");
const fs = require("fs");

module.exports = function readFileToArr(
  filePath: string,
  piece = [1, 1],
  callback: (lines: string[]) => void
) {
  const fRead = fs.createReadStream(filePath);
  const objReadline = readline.createInterface({
    input: fRead
  });

  const arr: string[] = [];
  const [start, end] = piece;

  objReadline.on("line", (line: string, i) => {
    while (i >= start && i <= end) {
      arr.push(line);
    }
  });

  objReadline.on("close", () => {
    callback(arr);
  });
};
