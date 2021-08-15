import * as fs from "fs"

fs.readFile('./table.md', "utf-8", (err, file) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(file); // read table.md as string
})