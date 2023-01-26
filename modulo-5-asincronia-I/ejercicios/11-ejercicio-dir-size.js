const fs = require("fs");
const path = require("path");

function asyncMap(list, transfomer, callback) {
  const result = [];

  list.forEach((element, index) => {
    transfomer(element, (value) => {
      result[index] = value;

      if (list.length === result.length) {
        callback(result);
      }
    });
  });
}

function calculateDirSize(dir, callback) {
  fs.readdir(dir, (error, fileNames) => {
    if (error) throw error;
    const files = fileNames.map((file) => path.resolve(dir, file));

    function mapFileToSize(file, done) {
      fs.stat(file, (error, stats) => {
        if (error) throw error;

        done(stats.size);
      });
    }

    function onListMapped(fileSizes) {
      const sum = fileSizes.reduce((total, n) => total + n, 0);
      callback(sum);
    }

    asyncMap(files, mapFileToSize, onListMapped);
  });
}

calculateDirSize("../../ejercicio-final", (size) => console.log(size)); // 6763

