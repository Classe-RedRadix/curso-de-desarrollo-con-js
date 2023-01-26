const fs = require("fs");
const path = require('path');

const dir = "../../ejercicio-final";

function calculateDirSize(dir, callback) {
    let dirSize = 0;

    fs.readdir(dir, (error, files) => {
        if (error) throw error;
        console.log("Files: ", files);
        const filesPath = files.map((file) => path.resolve(dir, file));

        fs.stat(filesPath[0], (error, fileStat) => {
            if (error) throw error;
            console.log(filesPath[0], fileStat.size);
            dirSize += fileStat.size;
            callback(dirSize); 
        })
    });
}

calculateDirSize(dir, function(something) {
    console.log(something);
});

