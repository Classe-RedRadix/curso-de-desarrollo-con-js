const fs = require("fs");
const path = require('path');

const dir = "../../ejercicio-final";

function calculateDirSize(dir, callback) {
    let dirSize = 0;
    let filesCount = 0;
    let filesRead = 0;

    fs.readdir(dir, (error, files) => {
        if (error) throw error;
        console.log("Files: ", files);
        const filesPath = files.map((file) => path.resolve(dir, file));

        filesCount = filesPath.length;

        filesPath.forEach((file, index) => {
            console.log("Start asynchronous process ", file, index);

            fs.stat(file, (error, stats) => {
                if (error) throw error;

                filesRead++;
                dirSize += stats.size;

                console.log(file, stats.size);
                
                if (filesRead === filesCount) {
                    callback(dirSize); 
                }
            });
        });

        
    });
}

calculateDirSize(dir, function(size) {
    console.log(size);
});

