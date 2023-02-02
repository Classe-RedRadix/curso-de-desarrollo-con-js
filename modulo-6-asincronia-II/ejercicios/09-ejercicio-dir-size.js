const fs = require("fs");
const path = require("path");

async function asyncMap(list, transfomer) {
  const promises = list.map((item) => transfomer(item));

  return await Promise.all(promises);
}

async function calculateDirSize(dir) {
  const fileNames = await fs.promises.readdir(dir);

  const files = fileNames.map((file) => path.resolve(dir, file));

  async function mapFileToSize(file) {
    const stats = await fs.promises.stat(file);
    return stats.size;
  }

  const sizes = await asyncMap(files, mapFileToSize);
  return sizes.reduce((total, n) => total + n, 0);
}

async function main() {
  try {
    const size = await calculateDirSize("./ejercicio-findsdal");
    console.log(size); // 13159
  } catch (error) {
    console.error("Algo has roto", error.message);
  }
}

main();